resource "aws_instance" "Public_ec2" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name
  associate_public_ip_address = true 
  subnet_id              = aws_subnet.public_subnet.id
   

  vpc_security_group_ids = [aws_security_group.Public_ec2_sg.id]
  user_data = <<-EOF
    #!/bin/bash
    yum update -y
    yum install httpd -y
    systemctl start httpd
    systemctl enable httpd
    echo "Hello World from $(hostname -f)" > /var/www/html/index.html
  EOF
  tags = {
    Name = "PublicEC2"
  }
}

resource "aws_security_group" "Public_ec2_sg" {
  name        = "public_ec2_sg"
  vpc_id      = aws_vpc.migration_vpc.id
  description = "Allow HTTP traffic"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

