# Deployment Guide: BlueBlog on Vercel

This guide will help you deploy the BlueBlog project to Vercel with a Neon PostgreSQL database.

## 1. Database Setup (Neon Tech)
1.  Go to [Neon.tech](https://neon.tech/) and create a free account.
2.  Create a new project named `blueblog`.
3.  Copy the **Connection String** (it should look like `postgresql://neondb_owner:password@ep-xxxx-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require`).
    *   **Note**: Use the **Pooled** connection string for Vercel.

## 2. Image Hosting (Cloudinary)
1.  Go to [Cloudinary](https://cloudinary.com/) and create a free account.
2.  Go to your Dashboard and copy:
    *   `Cloud Name`
    *   `API Key`
    *   `API Secret`

## 3. Vercel Deployment
1.  Go to [Vercel](https://vercel.com/) and click **Add New** > **Project**.
2.  Import your GitHub repository: `pruthvirajtarode/Blueblog-main1`.
3.  In the **Environment Variables** section, add the following:

| Variable | Value |
| :--- | :--- |
| `DATABASE_URL` | Your Neon Pooled Connection String |
| `JWT_ACCESS_SECRET` | Any long random string (e.g., `blueblog_access_6y7u8i9o`) |
| `JWT_REFRESH_SECRET` | Any long random string (e.g., `blueblog_refresh_1q2w3e4r`) |
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary Cloud Name |
| `CLOUDINARY_API_KEY` | Your Cloudinary API Key |
| `CLOUDINARY_API_SECRET` | Your Cloudinary API Secret |
| `ADMIN_EMAIL` | `admin@blog.com` |
| `ADMIN_PASSWORD` | `Admin@123` |
| `ADMIN_NAME` | `Blog Administrator` |
| `NEXT_PUBLIC_SITE_URL` | `https://your-project-name.vercel.app` (The URL Vercel gives you) |
| `NEXT_PUBLIC_SITE_NAME` | `BlueBlog` |

4.  **Build & Development Settings**:
    *   Build Command: `npm run deploy:build`
    *   Install Command: `npm install`

5.  Click **Deploy**.

## 4. Seeding the Database
Once the deployment is successful, you need to seed the database to create the users.
1.  On your local machine (where the code is), make sure your `.env` has the same `DATABASE_URL`.
2.  Run: `npm run prisma:seed`
    *   This will create the following accounts:
        *   **Admin**: `admin@blog.com` / `Admin@123`
        *   **Writer**: `writer@blog.com` / `123456`
        *   **Author**: `author@blog.com` / `123456`

## 5. Accessing the Dashboard
- Admin Dashboard: `https://your-project-name.vercel.app/admin`
- Login with the credentials above.
