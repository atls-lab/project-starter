variable "token"{
  type = string
  sensitive = true
}

variable "cloud_id" {
  type = string
  sensitive = true
}

variable "folder_id" {
  type = string
  sensitive = true
}

variable "network_id" {
  type = string
  sensitive = true
}

variable "subnet_id" {
  type = string
  sensitive = true
}

variable "zone" {
  type = string
  default = "ru-central1-a"
}
