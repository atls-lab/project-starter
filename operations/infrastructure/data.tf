data "terraform_remote_state" "cluster" {
  backend = "remote"

  config = {
    organization = "atls"

    workspaces = {
      name = "cluster-${var.environment}"
    }
  }
}
