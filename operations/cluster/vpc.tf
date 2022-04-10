resource "yandex_vpc_network" "stage" { name = var.environment }

resource "yandex_vpc_subnet" "stage" {
  v4_cidr_blocks = ["10.0.0.0/22"]
  zone           = var.zone
  network_id     = yandex_vpc_network.stage.id
}

resource "yandex_vpc_security_group" "k8s-main-sg" {
  name       = "k8s-main-sg"
  network_id = yandex_vpc_network.stage.id
  ingress {
    protocol       = "TCP"
    v4_cidr_blocks = ["198.18.235.0/24", "198.18.248.0/24"]
    from_port      = 0
    to_port        = 65535
  }
  ingress {
    protocol          = "ANY"
    predefined_target = "self_security_group"
    from_port         = 0
    to_port           = 65535
  }
  ingress {
    protocol       = "ANY"
    v4_cidr_blocks = ["10.129.0.0/24"]
    from_port      = 0
    to_port        = 65535
  }
  ingress {
    protocol       = "ICMP"
    v4_cidr_blocks = ["172.16.0.0/12"]
  }
  egress {
    protocol       = "ANY"
    v4_cidr_blocks = ["0.0.0.0/0"]
    from_port      = 0
    to_port        = 65535
  }
}

resource "yandex_vpc_security_group" "k8s-public-services" {
  name       = "k8s-public-services"
  network_id = yandex_vpc_network.stage.id

  ingress {
    protocol       = "TCP"
    v4_cidr_blocks = ["0.0.0.0/0"]
    from_port      = 30000
    to_port        = 32767
  }
}

resource "yandex_vpc_security_group" "k8s-nodes-ssh-access" {
  name       = "k8s-nodes-ssh-access"
  network_id = yandex_vpc_network.stage.id

  ingress {
    protocol       = "TCP"
    v4_cidr_blocks = ["85.32.32.22/32"]
    port           = 22
  }
}

resource "yandex_vpc_security_group" "k8s-master-whitelist" {
  name       = "k8s-master-whitelist"
  network_id = yandex_vpc_network.stage.id

  ingress {
    protocol       = "TCP"
    v4_cidr_blocks = ["203.0.113.0/24"]
    port           = 6443
  }

  ingress {
    protocol       = "TCP"
    v4_cidr_blocks = ["203.0.113.0/24"]
    port           = 443
  }
}

resource "yandex_kubernetes_node_group" "stage" {
  cluster_id  = yandex_kubernetes_cluster.stage.id
  name        = var.environment
  version     = "1.20"

  instance_template {
    platform_id = "standard-v1"

    network_interface {
      nat                = true
      subnet_ids         = [yandex_vpc_subnet.stage.id]
      security_group_ids = [
        yandex_vpc_security_group.k8s-main-sg.id,
        yandex_vpc_security_group.k8s-nodes-ssh-access.id,
        yandex_vpc_security_group.k8s-public-services.id
      ]
    }

    resources {
      cores  = 2
      memory = 4
    }

    boot_disk {
      type = "network-hdd"
      size = 40
    }

    scheduling_policy {
      preemptible = false
    }

    container_runtime {
      type = "containerd"
    }
  }

  scale_policy {
    auto_scale {
      initial = 1
      min     = 1
      max     = 6
    }
  }

  allocation_policy {
    location {
      zone = var.zone
    }
  }

  maintenance_policy {
    auto_upgrade = true
    auto_repair  = true

    maintenance_window {
      day        = "saturday"
      start_time = "21:00"
      duration   = "3h"
    }
  }
}
