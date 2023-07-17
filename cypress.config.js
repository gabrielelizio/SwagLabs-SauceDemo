const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'izyx52',
  e2e: {
  env: {
    hideCredentials:true,
  }  
  
  },
  },
);
