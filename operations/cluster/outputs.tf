output "cert" {
  value = yandex_kubernetes_cluster.stage.master.cluster_ca_certificate
  sensitive = true
}

output "auth" {
  value     = yandex_kubernetes_cluster.stage.master.external_v4_endpoint
  sensitive = true
}
