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

Service	Purpose
Amazon VPC -->	Isolated network environment

Public Subnet -->	Hosts internet-facing resources

Private Application Subnet -->	Hosts backend EC2 instance

Private Database Subnet	--> Hosts RDS database

Internet Gateway -->	Allows public internet access

NAT Gateway -->	Enables outbound internet access for private resources

Application Load Balancer -->	Routes traffic to backend services
Amazon EC2	--> Hosts backend API
Amazon RDS MySQL -->	Stores health tracking data
Amazon S3	--> Hosts static frontend website
IAM	--> Access and permission management
Security Groups -->	Network-level access control
____________________________________________________________________

# Security Features

Network Security
- VPC network isolation
- Public and private subnet segmentation
- Internet Gateway for controlled public access
- NAT Gateway for secure outbound traffic
- Application Load Balancer in a public subnet
- Backend EC2 instance isolated in a private subnet
- Database isolated in a private database subnet

Access Control
- IAM roles and policies
- Security Groups configured using least-privilege principles
- Database access restricted to the backend server only
- Backend access restricted to the Application Load Balancer

Database Security
- Private RDS deployment
- No direct public database access
- Controlled database connectivity through EC2 backend services

____________________________________________________________________

# Lessons Learned

During this project, I gained hands-on experience designing and deploying a secure AWS infrastructure. I learned how to implement network segmentation using public and private subnets, configure Application Load Balancers, deploy backend services on EC2, and secure databases using private RDS deployments.

This project reinforced the importance of cloud security principles, including least-privilege access, resource isolation, and secure network design.
