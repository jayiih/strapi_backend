module.exports = ({ env }) => ({
  // ...
  email: {
    provider: env('MAIL_HOST'),
    providerOptions: {
      apiKey: env('MAIL_PASSWORD'),
    },
    settings: {
      defaultFrom: env('MAIL_FROM_ADDRESS'),
      defaultReplyTo: env('MAIL_REPLY_TO_ADDRESS'),
    },
  },
  // ...
});