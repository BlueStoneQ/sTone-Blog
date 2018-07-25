/**
 * 根据不同的NODE_ENV输出不同的配置对象 默认输出development的配置对象
 */
const development_env = require('./development');
const test_env = require('./test');

module.exports = {
  development: development_env,
  test: test_env
}[process.env.NODE_ENV || 'development'];