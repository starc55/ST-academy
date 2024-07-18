module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "93744a3bb473a959debbe6a1e858ecafe444948f363378d2c9a4f6dba38f6848",
      "75d5800ba102b3699ff43a1c3ef799bda580ce92ca3d9af39558066e6507c9bc",
    ]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
