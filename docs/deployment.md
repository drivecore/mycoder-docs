---
sidebar_position: 99
title: Deployment
---

# Deployment Process

This documentation site is automatically deployed to Google Cloud Run whenever changes are pushed to the main branch. This document outlines the deployment process and how to make changes to it.

## Automated Deployment

The documentation site uses GitHub Actions for continuous integration and deployment (CI/CD):

1. When changes are pushed to the `main` branch, a GitHub workflow is triggered
2. The workflow builds the Docusaurus site and packages it in a Docker container
3. The container is pushed to Google Container Registry
4. The container is deployed to Google Cloud Run
5. The site is accessible at the Cloud Run URL (with custom domain mapping)

## Deployment Infrastructure

The deployment infrastructure consists of:

- **Docker Container**: The site is packaged in a Docker container for consistent deployment
- **Google Container Registry**: Stores the Docker images
- **Google Cloud Run**: Hosts the documentation site
- **GitHub Actions**: Automates the build and deployment process

## Local Development and Testing

To test the deployment locally:

1. Build the Docker image:
   ```bash
   docker build -t mycoder-docs .
   ```

2. Run the container locally:
   ```bash
   docker run -p 8080:8080 mycoder-docs
   ```

3. Access the site at http://localhost:8080

## Manual Deployment

While the deployment is automated, you can also trigger a manual deployment:

1. Go to the GitHub repository
2. Navigate to Actions → Deploy Documentation to Cloud Run workflow
3. Click "Run workflow" and select the branch to deploy

## Troubleshooting

If you encounter issues with the deployment:

1. Check the GitHub Actions logs for any errors
2. Verify that the Docker container builds successfully locally
3. Ensure the Google Cloud service account has the necessary permissions
4. Check the Cloud Run logs for runtime errors

## Modifying the Deployment Process

To modify the deployment process:

1. Update the `.github/workflows/deploy-docs.yml` file for changes to the CI/CD pipeline
2. Update the `Dockerfile` for changes to the container configuration
3. Test changes locally before pushing to the repository