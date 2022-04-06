resource "yandex_iam_service_account" "kubernetes_editor" {
  name = "kubernetes-editor"
}

resource "yandex_iam_service_account" "images_puller" {
  name = "images-puller"
}

resource "yandex_resourcemanager_folder_iam_binding" "editor" {
  folder_id = var.folder
  role      = "editor"
  members   = [
    "serviceAccount:${yandex_iam_service_account.kubernetes_editor.id}"
  ]
}

resource "yandex_resourcemanager_folder_iam_binding" "images-puller" {
  folder_id = var.folder
  role      = "container-registry.images.puller"
  members   = [
    "serviceAccount:${yandex_iam_service_account.images_puller.id}"
  ]
}
