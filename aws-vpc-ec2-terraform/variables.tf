variable "region" {
  description = "The AWS region to deploy the EC2 instance"
  default     = "us-east-1"
}

variable "instance_type" {
  description = "The type of EC2 instance to create"
  default     = "t2.micro"
}

variable "ami_id" {
  description = "The AMI ID for the EC2 instance"
  default     = "ami-0e449927258d45bc4" # Example AMI ID for Amazon Linux 2
}

variable "key_name" {
  description = "The name of the key pair to use for SSH access"
  type        = string
}