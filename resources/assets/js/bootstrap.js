localStorage.FEK = "AODOd2HLEBFZOTGHW==";

window.moment = require("moment-timezone");
moment.tz.setDefault("UTC");

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import NProgress from "nprogress";

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.headers.common["X-CSRF-TOKEN"] = window.Laravel.csrfToken;

axios.interceptors.request.use(
  config => {
    NProgress.configure({
      easing: "ease",
      speed: 500,
      showSpinner: false
    });
    NProgress.start();
    NProgress.inc(0.3);
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    NProgress.done();
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from "laravel-echo";

window.Pusher = require("pusher-js");

window.Echo = new Echo({
  broadcaster: "pusher",
  key: window.Laravel.pusherKey
});

/*
|--------------------------------------------------------------------------
| Sentry + Raven Setup
|--------------------------------------------------------------------------
|
*/
import Raven from "raven-js";
import RavenVue from "raven-js/plugins/vue";

if (Laravel.env !== "local") {
  Raven.config(Laravel.sentryDSN)
    .addPlugin(RavenVue, Vue)
    .install();
}
