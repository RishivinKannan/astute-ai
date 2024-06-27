/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vishnupk05.pythonanywhere.com",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

export default nextConfig;
