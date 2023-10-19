module.exports = {
  apps : [{
    "name": "website",
    "script": "node_modules/.bin/next",
    "args" : "start",
    "instances": "2",
    "exec_mode": "cluster",
    "max_memory_restart": "1G",
    "listen_timeout": "5000",
    "kill_timeout": "2000",
  }],

  deploy : {
    production : {
      user : 'user',
      host : '127.0.0.1',
      ref  : 'origin/master',
      repo : 'git@gitlab.com:zethic/qoruz-website-next.git',
      path : '/home/qoruz/qoruz-website-next',
      'pre-deploy-local': '',
      'post-deploy' : 'yarn && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    staging : {
      user : 'user',
      host : '127.0.0.1',
      ref  : 'origin/master',
      repo : 'git@gitlab.com:zethic/qoruz-website-next.git',
      path : '/home/qoruz/qoruz-website-next-dev',
      'pre-deploy-local': '',
      'post-deploy' : 'yarn && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
