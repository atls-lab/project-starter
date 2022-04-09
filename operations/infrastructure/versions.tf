terraform {
  required_providers {
    yandex = {
      source  = "yandex-cloud/yandex"
      version = "0.72"
    }

    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.7.1"
    }

    helm = {
      source  = "hashicorp/helm"
      version = "2.4.1"
    }

    kubectl = {
      source  = "gavinbunney/kubectl"
      version = ">= 1.13.1"
    }
  }
}
