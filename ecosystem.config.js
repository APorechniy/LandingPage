module.exports = {
    apps: [{
        name: 'nextjs-app',
        script: 'npm',
        args: 'start',
        cwd: '/var/www/html/LandingPage',

        env: {
            NODE_ENV: 'production',
            PORT: 3000,
        },

        max_memory_restart: '1G',

        error_file: '/var/log/nextjs-error.log',
        out_file: '/var/log/nextjs-out.log',
        time: true
    }]
}