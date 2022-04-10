output "cert" {
  value = yandex_kubernetes_cluster.stage.master[0]
  sensitive = true
}

output "auth" {
  value     = yandex_kubernetes_cluster.stage.master[0]
  sensitive = true
}
