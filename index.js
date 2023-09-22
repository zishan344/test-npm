const verifyLicense = require("./license");

function addNumbers(a, b, licenseKey) {
  if (!licenseKey) throw new Error("Provide license Key");
  if (!verifyLicense(licenseKey)) {
    throw new Error("Invalid license key");
  }
  return a + b;
}

module.exports = addNumbers;
