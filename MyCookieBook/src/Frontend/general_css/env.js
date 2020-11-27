(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["production"] = false;
  window["env"]["forbiddenErrorUrl"] = 'http://not-found.de';

  window['env']['userSettingsUrl'] = 'http://localhost:9070';
  window['env']['loginUrl'] = 'http://localhost:9000'

  window['env']['directusUrl'] =  'http://localhost:9090';

  window['env']['featureToggleDarkMode'] = false;
})(this);