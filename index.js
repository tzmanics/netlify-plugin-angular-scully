const scullyPlugin = {
  async onPreBuild({ utils: { run } }) {
    console.log('Using ng add to install Scully');
    await run.command('ng add @scullyio/init');
    await run.command('ng build --prod');
    await run.command('npm run scully');
  },
};
