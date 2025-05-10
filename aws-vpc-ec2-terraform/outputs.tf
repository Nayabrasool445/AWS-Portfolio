output "vpc_id" {
  description = "The ID of the VPC"
  value       = aws_vpc.migration_vpc.id
}

output "ec2_public_ip" {
  description = "The public IP address of the EC2 instance"
  value       = aws_instance.Public_ec2.public_ip
}

output "ec2_name" {
  description = "The name of the EC2 instance"
  value       = aws_instance.Public_ec2.tags["Name"]
}

output "security_group_id" {
  description = "The ID of the Security Group"
  value       = aws_security_group.Public_ec2_sg.id
}

output "security_group_name" {
  description = "The name of the Security Group"
  value       = aws_security_group.Public_ec2_sg.name
}

output "s3_bucket_name" {
  description = "The name of the S3 Bucket"
  value       = aws_s3_bucket.migration_s3_bucket.bucket
}