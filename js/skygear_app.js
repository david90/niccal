skygear.config({
  'endPoint': 'https://calendar.staging.skygeario.com/', // trailing slash is required
  'apiKey': 'b9d15e05d75d433b88e148c78a07a914',
}).then(() => {
  console.log('skygear container is now ready for making API calls.');
}, (error) => {
  console.error(error);
});