module.exports = {
  apps: [{
    name: 'moth',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'www.theraremoth.com',
      key: '~/.ssh/moth-ssh.pem',
      ref: 'origin/master',
      repo: 'git@github.com:vuk1066/moth-spa.git',
      path: '/home/ubuntu/moth-spa',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
