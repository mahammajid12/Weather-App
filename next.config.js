/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactStrictMode: true,
  }

// module.exports = {
//     images: {
//         domains: [
//             'openweathermap.org',
//         ]
//     }
// }

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'openweathermap.org',
        },
      ],
    },
  }