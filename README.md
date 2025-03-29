
**URL**: https://rama.cloudnotes.click
This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

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

