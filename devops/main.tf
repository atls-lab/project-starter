terraform {
  required_providers {
    yandex = {
      source = "yandex-cloud/yandex"
    }
  }
  required_version = ">= 0.13"
}

provider "yandex" {
  token     = var.token
  cloud_id  = var.cloud_id
  folder_id = var.folder_id
  zone      = var.zone
}

resource "yandex_vpc_security_group" "k8s-main-sg" {
  name       = "k8s-main-sg"
  network_id = var.network_id
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
  network_id = var.network_id

  ingress {
    protocol       = "TCP"
    v4_cidr_blocks = ["0.0.0.0/0"]
    from_port      = 30000
    to_port        = 32767
  }
}

resource "yandex_vpc_security_group" "k8s-nodes-ssh-access" {
  name       = "k8s-nodes-ssh-access"
  network_id = var.network_id

  ingress {
    protocol       = "TCP"
    v4_cidr_blocks = ["85.32.32.22/32"]
    port           = 22
  }
}

resource "yandex_vpc_security_group" "k8s-master-whitelist" {
  name       = "k8s-master-whitelist"
  network_id = var.network_id

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

resource "yandex_kubernetes_cluster" "jakc" {
  network_id = var.network_id
  master {
    zonal {
      zone      = var.zone
      subnet_id = var.subnet_id
    }
  }
  service_account_id      = var.sa_kubernetes
  node_service_account_id = var.sa_registry
  depends_on              = [
    yandex_resourcemanager_folder_iam_binding.editor,
    yandex_resourcemanager_folder_iam_binding.images-puller
  ]
}

resource "yandex_vpc_subnet" "subnet-1" {
  v4_cidr_blocks = ["10.0.0.0/22"]
  zone           = var.zone
  network_id     = var.network_id
}

resource "yandex_resourcemanager_folder_iam_binding" "editor" {
  folder_id = var.folder_id
  role      = "editor"
  members   = [
    "serviceAccount:${var.sa_kubernetes}"
  ]
}

resource "yandex_resourcemanager_folder_iam_binding" "images-puller" {
  folder_id = var.folder_id
  role      = "container-registry.images.puller"
  members   = [
    "serviceAccount:${var.sa_registry}"
  ]
}
