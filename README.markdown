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
- Add a private subnet with a NAT Gateway for enhanced security.![image (7)](https://github.com/user-attachments/assets/fcd8d9e6-955f-456f-85f1-55f1846d0c97)

- Integrate an S3 bucket for static file storage.
- Deploy a load balancer for high availability.

## Author
Built as part of an AWS freelancing portfolio to showcase Terraform and cloud infrastructure skills.


## Screenshots

![image (7)](https://github.com/user-attachments/assets/b9c9e09d-d8c1-416d-a35b-38b90a799041)

![image (2)](https://github.com/user-attachments/assets/f42737bb-c7bc-4742-9828-7b6045a6ab79)

![image (1)](https://github.com/user-attachments/assets/33238fe6-424f-4f5d-a25a-10d4241b66aa)

![image (9)](https://github.com/user-attachments/assets/d946aca7-9f51-4546-ac0a-17732a4068bb)

![image](https://github.com/user-attachments/assets/a9dac025-5e7f-4750-a954-fad0c7ad18be)

![image (8)](https://github.com/user-attachments/assets/985c71ad-3d7b-48f3-8571-ae87e55bc6f4)

![image (6)](https://github.com/user-attachments/assets/4697ce3a-c322-41cf-a926-b0832a02d961)

![image (5)](https://github.com/user-attachments/assets/ce2feaed-ae76-40db-b5c9-7debc8dc0846)

![image (4)](https://github.com/user-attachments/assets/4818954f-fb4f-4549-979f-6c1e58ff4eac)

![image (3)](https://github.com/user-attachments/assets/de621d9f-1579-43b3-b5ec-26457944f5e7)
