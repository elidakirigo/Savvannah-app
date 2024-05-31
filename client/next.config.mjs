/** @type {import('next').NextConfig} */
const nextConfig = {
	// ...(process.env.NODE_ENV = 'production' ? { output: 'export' } : {}),
	// output: 'standalone',
	images: {
		unoptimized: true,
	},
}

export default nextConfig
