module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','7f9bcab553ab34759b20f3233416a5102e1a39cf53ed21850719b5034292707ac81bd5ce77298c811402f3543129a339ff7d39a5dddabe5f6296a2b1b850cdd1'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
