output "cert" {
  value = yandex_kubernetes_cluster.stage.master[0].cluster_ca_certificate
}

output "auth" {
  value     = yandex_kubernetes_cluster.stage.master[0].external_v4_endpoint
}
