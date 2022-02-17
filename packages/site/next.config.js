// pass the modules you would like to see transpiled
const withTM = require("next-transpile-modules")(["design-system"]);

module.exports = withTM({
  reactStrictMode: true,
});
