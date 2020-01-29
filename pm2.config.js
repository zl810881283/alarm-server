module.exports = {
    apps : [{
      name: 'alarm-server',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'production'
      }
    }]
  };
  