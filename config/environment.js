'use strict'

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'ember-portfolio',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      apiUrl: 'https://yqqoycjyqdbdvtqkwgdx.supabase.co/rest/v1/projects',
      apiKey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxcW95Y2p5cWRiZHZ0cWt3Z2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NDMwMzUsImV4cCI6MjAyOTMxOTAzNX0.2T6wC80P7p5fzSvdIKTuyW5uVqmLX6dyv0ugPUBQO9E',
      apiAuthToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxcW95Y2p5cWRiZHZ0cWt3Z2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NDMwMzUsImV4cCI6MjAyOTMxOTAzNX0.2T6wC80P7p5fzSvdIKTuyW5uVqmLX6dyv0ugPUBQO9E',
    },
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
    ENV.APP.autoboot = false
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV
}
