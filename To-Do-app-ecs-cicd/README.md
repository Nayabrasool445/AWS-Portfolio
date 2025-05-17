🚀 Project: To-Do App CI/CD on AWS using ECS Fargate
🎯 Project Goal
Build a CI/CD pipeline to deploy a containerized To-Do web application on Amazon ECS Fargate, using the following tools and services:

Docker for containerization

GitHub for version control

Amazon ECR for container registry

Terraform for Infrastructure as Code (IaC)

ECS Fargate for running containers without managing servers

✅ Progress Summary
📁 Local Setup & GitHub Integration
Created the To-Do web app project structure.

Initialized Git and pushed code to a GitHub repository.

Installed Git and Docker in an EC2 instance.

🐳 Docker Image Creation & Management
Dockerized the To-Do app.

Pushed the image to Docker Hub initially.

Created a private Amazon ECR repository.

Tagged and pushed the Docker image to ECR using AWS CLI.

🔐 ECR Authentication
Used aws ecr get-login-password to authenticate Docker with ECR.

Understood that Docker is just the platform, and ECR is the registry.

IAM-based authentication used instead of username/password for ECS tasks.

🏗️ Terraform Infrastructure Setup (S3 Backend)
Created a /terraform folder with:

main.tf, variables.tf, outputs.tf, and terraform.tfvars.

Configured remote state storage using an existing S3 bucket.

(Optional) Discussed usage of DynamoDB for state locking.

🌐 Network Setup with Terraform
Defined:

VPC

2 public subnets (for high availability across AZs)

Internet Gateway

Route Table with associations to public subnets

⚙️ ECS & Task Definition
Created an ECS Cluster via Terraform.

Wrote Fargate task definition using a JSON file.

Configured Terraform to read the todo-app.json file using data "local_file".

Attached execution IAM role to ECS task for:

Pulling the private image from ECR

Logging to CloudWatch

🛠️ Next Steps
Create ECS service and target group

Configure ALB (Application Load Balancer)

Complete the CI/CD pipeline using Jenkins or GitHub Actions

Trigger deployment automatically on new push

