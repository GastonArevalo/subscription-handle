module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7ce500cb65e80b46ae9fc50e9c33a194'),
  },
});
