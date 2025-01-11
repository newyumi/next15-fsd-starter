import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack(config) {
    // SVG 파일을 React 컴포넌트로 처리하도록 Webpack 로더 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
