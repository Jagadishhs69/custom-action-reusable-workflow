const core = require('@actions/core');

try {
  const name = core.getInput('name');
  const timestamp = new Date().toISOString();

  console.log(`👋 Hello, ${name}!`);
  core.setOutput("timestamp", timestamp);
} catch (error) {
  core.setFailed(error.message);
}
