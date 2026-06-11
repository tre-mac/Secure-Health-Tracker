# Secure-Health-Tracker

The Secure Health Tracker is a cloud-native web application that allows users to record and monitor daily blood pressure readings, sodium intake, and health-related notes. The application securely stores user data, enabling users to track trends and compare historical entries over time.

This project was designed and deployed using AWS cloud services with a strong emphasis on security, networking, and infrastructure best practices. The architecture separates public-facing resources from private application and database resources using a Virtual Private Cloud (VPC), public and private subnets, and least-privilege access controls.
_______________________________________________________________

# Project Goals
- Build a secure multi-tier cloud application
- Implement AWS networking best practices
- Protect application and database resources from direct public access
- Store and retrieve health tracking data securely
- Demonstrate cloud architecture, infrastructure, and security concepts
___________________________________________________________________

# Architecture
<img width="822" height="615" alt="Screenshot 2026-06-11 at 5 05 25 PM" src="https://github.com/user-attachments/assets/9eaf8101-62c0-4cb8-bae5-736df1277eb1" />

AWS Infrastructure
- Amazon VPC
- Public Subnet
- Private Application Subnet
- Private Database Subnet
- Internet Gateway
- NAT Gateway
- Application Load Balancer (ALB)
- Amazon EC2
- Amazon RDS MySQL
- Amazon S3
