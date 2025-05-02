# AWS VPC + EC2 with Terraform

This project demonstrates a secure, scalable AWS infrastructure setup using Terraform. It provisions a Virtual Private Cloud (VPC) with a public subnet, an EC2 instance hosting a simple "Hello World" webpage, and necessary networking components. The setup is built in the AWS Free Tier, ideal for learning and showcasing cloud infrastructure skills.

## Project Overview
The Terraform configuration creates:
- **VPC**: A virtual network with a CIDR block of `10.0.0.0/16`.
- **Public Subnet**: A subnet (`10.0.1.0/24`) for hosting publicly accessible resources.
- **Internet Gateway**: Enables internet access for the public subnet.
- **Route Table**: Directs traffic from the subnet to the Internet Gateway.
- **Security Group**: Allows HTTP (port 80) and SSH (port 22) traffic.
- **EC2 Instance**: A `t2.micro` instance running Amazon Linux 2023, serving a "Hello World" webpage via Apache.

## Prerequisites
- **Terraform**: Version 1.5+ installed.
- **AWS Account**: Configured with Free Tier access and IAM credentials.
- **SSH Key Pair**: Created in AWS (named `my-key-pair` in the code).

## Setup Instructions
1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   ```
2. Initialize Terraform:
   ```bash
   terraform init
   ```
3. Review the plan:
   ```bash
   terraform plan
   ```
4. Deploy the infrastructure:
   ```bash
   terraform apply
   ```
5. Access the EC2 instance:
   - Open the public IP (`http://<public-ip>`) in a browser to see the "Hello World" webpage.
   - SSH into the instance: `ssh -i my-key-pair.pem ec2-user@<public-ip>`.

## Screenshots
- **VPC Configuration**: [Add screenshot of VPC in AWS Console]
- **EC2 Instance**: [Add screenshot of EC2 instance details]
- **Webpage Output**: [Add screenshot of "Hello World" webpage]

## Usage
This setup is ideal for:
- Hosting simple web applications.
- Learning AWS networking and Terraform.
- Demonstrating infrastructure-as-code skills for freelancing or job applications.

## Future Improvements
- Add a private subnet with a NAT Gateway for enhanced security.
- Integrate an S3 bucket for static file storage.
- Deploy a load balancer for high availability.

## Author
Built as part of an AWS freelancing portfolio to showcase Terraform and cloud infrastructure skills.