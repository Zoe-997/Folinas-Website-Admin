/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: [
          "avatars.githubusercontent.com",
          "lh3.googleusercontent.com",
          "res.cloudinary.com",
          "cdn.shopify.com"
        ]
    }
};

export default nextConfig;
