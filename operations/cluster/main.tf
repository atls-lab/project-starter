resource "yandex_kubernetes_cluster" "stage" {
  name = "stage"

  network_id = yandex_vpc_network.stage.id

  master {
    zonal {
      zone      = yandex_vpc_subnet.stage.zone
      subnet_id = yandex_vpc_subnet.stage.id
    }
    public_ip = true

    security_group_ids = [
      yandex_vpc_security_group.k8s-main-sg.id,
      yandex_vpc_security_group.k8s-master-whitelist.id
    ]
  }
  service_account_id      = yandex_iam_service_account.kubernetes_editor.id
  node_service_account_id = yandex_iam_service_account.images_puller.id
  depends_on              = [
    yandex_resourcemanager_folder_iam_binding.editor,
    yandex_resourcemanager_folder_iam_binding.images-puller
  ]
}
