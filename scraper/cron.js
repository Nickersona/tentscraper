import cron from 'node-cron'

cron.schedule('0 1 * * *', () => {
  console.log('running a task at the start of every hour');
  require('./index');
});
