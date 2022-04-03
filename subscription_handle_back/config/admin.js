module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8f1833d0b7ed34246d9f3643823dd320'),
  },
});
