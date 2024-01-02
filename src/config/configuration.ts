export default () => ({
  APP_PORT: parseInt(process.env.PORT, 10) || 3000,
  APP_ORIGIN: process.env.APP_ORIGIN,
});
