// const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});

module.exports = withPWA({
    i18n: {
        locales: ['vi', 'en'],
        defaultLocale: 'vi',
        localeDetection: false,
    },
    reactStrictMode: false,
    swcMinify: false,
    images: {
        domains: [
            'robohash.org',
            'res.cloudinary.com',
            'images.pexels.com',
            'placehold.co',
            'www.ntdaily.com',
            'swiperjs.com',
            'img.freepik.com',
            'api.juclothing.com',
        ],
    },
    pwa: {
        dest: 'public',
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
    },
    staticPageGenerationTimeout: 5 * 6 * 1000,
    typescript: {
        ignoreBuildErrors: true,
    },
});