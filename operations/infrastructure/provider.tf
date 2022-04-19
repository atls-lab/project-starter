terraform {
  backend "remote" {
    organization = "atls"

    workspaces {
      prefix = "infrastructure-"
    }
  }
}

provider "yandex" {
  token     = var.token
  folder_id = var.folder
  cloud_id  = var.cloud
  zone      = var.zone
}

resource "kubernetes_secret" "example" {
  metadata {
    name = "basic-auth"
  }

  data = {
    username = "admin"
    password = "P4ssw0rd"
  }

  type = "kubernetes.io/basic-auth"
}

provider "kubernetes" {
  host                   = data.terraform_remote_state.cluster.outputs.auth

  cluster_ca_certificate = data.terraform_remote_state.cluster.outputs.cert
}

provider "helm" {
  kubernetes {
    host                   = data.terraform_remote_state.cluster.outputs.auth

    cluster_ca_certificate = data.terraform_remote_state.cluster.outputs.cert
  }
}

provider "kubectl" {
  load_config_file = false

  host                   = data.terraform_remote_state.cluster.outputs.auth

  cluster_ca_certificate = data.terraform_remote_state.cluster.outputs.cert
}
