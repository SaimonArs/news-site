/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
		serverActions: {
			allowedForwardedHosts: ['localhost'],
			allowedOrigins: ['localhost:8080']
		},
	}
};

export default nextConfig;
