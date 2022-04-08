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

provider "kubernetes" {}

provider "helm" {}
