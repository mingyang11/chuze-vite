module.exports = {
  apps: [
    {
      name: 'vite-demo',
      script: 'vite-demo-server.js'
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '118.31.103.55',
      ref: 'origin/master',
      repo: 'https://github.com/mingyang11/chuze-vite.git',
      path: '/frontcode/vite-demo',
      'post-deploy': 'git reset --hard && git checkout master && git pull && npm i --production=false && npm run build:release && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}