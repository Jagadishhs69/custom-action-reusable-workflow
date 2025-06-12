const core = require('@actions/core');
try {
  const name = core.getInput('name');
  console.log(`Hello, ${name}!`);
  const timestamp = new Date().toISOString();
  core.setOutput('timestamp', timestamp);
} catch (error) {
  core.setFailed(error.message);
}
