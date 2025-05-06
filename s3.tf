resource "aws_s3_bucket" "migration_s3_bucket" {
  bucket = "nayab-migration-bucket"


  tags = {
    Name        = "Migration bucket"
    Environment = "Dev"
  }

}

resource "aws_s3_bucket_public_access_block" "migration_s3_bucket_block" {
  bucket                  = aws_s3_bucket.migration_s3_bucket.id
  block_public_acls       = false
  ignore_public_acls      = false
  block_public_policy     = false
  restrict_public_buckets = false
}



  resource "aws_s3_bucket_website_configuration" "migration_s3_bucket_website" {
    bucket = aws_s3_bucket.migration_s3_bucket.id
  
    index_document {
      suffix = "nayabstaticweb.html"
    }
  
    error_document {
      key = "error.html"
    }
  }

resource "aws_s3_bucket_policy" "migration_s3_bucket_policy" {
  bucket = aws_s3_bucket.migration_s3_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.migration_s3_bucket.arn}/*"
      }
    ]
  })
}