/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: false,
  exportPathMap: async function (
  ) {
    return {
      '/': { page: '/voyager' },
      '/timeline': { page: '/timeline' },
      '/mentored': { page: '/mentored' },
      '/mentoring': { page: '/mentoring' },
    }
  },
}
