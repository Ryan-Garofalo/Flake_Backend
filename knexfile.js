require('dotenv').config({silent: true});

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/flake'
  },

  production: {
    client: 'pg',
    connection: 'postgres://arrllqqjdqrzba:3Io48sw8XSYSGSB4ThdvfHkDkd@ec2-54-235-119-42.compute-1.amazonaws.com:5432/d821rc5crqn5m1' + '?ssl=true'
  }
};
