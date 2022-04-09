terraform {
  backend "remote" {
    organization = "atls"

    workspaces {
      prefix = "cluster-"
    }
  }
  required_providers {
    yandex = {
      source = "yandex-cloud/yandex"
    }
  }
  required_version = ">= 0.13"
}

provider "yandex" {
  token     = var.token
  folder_id = var.folder
  cloud_id  = var.cloud
  zone      = var.zone
}
