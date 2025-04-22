# Portfolio Website

**URL**: https://portfolio.therama.dev

## Overview

Personal portfolio website showcasing my work as a developer. Built with modern web technologies and deployed on AWS infrastructure.

## Tech Stack

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- AWS account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ramaeondev/portfolio.therama.dev
cd portfolio.therama.dev
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment

This project is automatically deployed to AWS S3 using GitHub Actions. When you push changes to the `main` branch, the workflow will:

1. Build the project
2. Deploy the build to S3
3. Invalidate CloudFront cache (if configured)

### Setting up AWS deployment

To set up the deployment workflow, you need to add the following secrets to your GitHub repository:

- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `AWS_REGION`: The AWS region where your S3 bucket is located (e.g., `us-east-1`)
- `S3_BUCKET`: The name of your S3 bucket
- `CLOUDFRONT_DISTRIBUTION_ID` (optional): If you're using CloudFront, add your distribution ID

### Configuring S3 for website hosting

1. Create an S3 bucket with public access enabled
2. Enable static website hosting in the bucket properties
3. Add a bucket policy to allow public read access
4. Configure CloudFront (optional but recommended for better performance and HTTPS)

### Amazon Lambda for Contact Form

The contact form in this website is configured to send emails using AWS Lambda and SES. You'll need to:

1. Create a Lambda function to process form submissions
2. Set up API Gateway to expose the Lambda function
3. Configure CORS in API Gateway
4. Update the API endpoint in the Contact component
5. Set up SES for sending emails

## Project Structure

```
portfolio.therama.dev/
├── public/           # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── styles/      # Global styles
│   └── utils/       # Utility functions
├── index.html       # Entry HTML file
└── vite.config.ts   # Vite configuration
```

## Features

- Responsive design
- Dark/Light mode
- Project showcase
- Contact form with AWS Lambda integration
- Blog section
- Performance optimized
- SEO friendly

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Ramaeon - [Portfolio](https://portfolio.therama.dev)

