module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url:"http://20.51.193.70",
  app: {
    keys: env.array('APP_KEYS'),
  },
});
