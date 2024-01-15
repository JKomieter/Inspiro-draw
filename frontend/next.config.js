/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { server }) => {
        config.module.rules.push(
            {
                test: /\.svg$/,
                use: [{ loader: "@svgr/webpack", options: { icon: true } }],
            },
            {
                test: /\.node$/,
                use: [
                    {
                        loader: "node-loader",
                        
                    },
                ],
            }
        )
        return config;
    }
}

module.exports = nextConfig
