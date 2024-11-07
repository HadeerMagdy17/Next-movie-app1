/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com', // Add this line
            port: '',
            pathname: '/images/**', // Specify the path for movie images
          },
        ],
      },
};

export default nextConfig;
