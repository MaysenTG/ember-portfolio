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
    },
    EMAIL_JS: {
      service_id: 'service_wjf5wfb',
      template_id: 'template_olzhave',
      user_id: 'SVd0-2wmTIqt3Yvlz',
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
