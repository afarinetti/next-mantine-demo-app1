import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  output: 'export',
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    turbo: {
      analyze: process.env.ANALYZE === 'true',
      cache: {
        dir: '.turbo',
      },
      treeShaking: true,
    },
  },
});
