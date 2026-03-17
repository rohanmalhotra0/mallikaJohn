const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const ownerName = process.env.GITHUB_REPOSITORY?.split('/')[0] || ''
const isUserSite = repoName.toLowerCase() === `${ownerName.toLowerCase()}.github.io`
const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH
const basePath =
  explicitBasePath !== undefined
    ? explicitBasePath
    : process.env.GITHUB_ACTIONS && repoName && !isUserSite
      ? `/${repoName}`
      : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
}

module.exports = nextConfig
