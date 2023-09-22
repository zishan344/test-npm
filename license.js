// license.js
const validLicenseKey = "1234-5678-90AB-CDEF";

function verifyLicense(key) {
  return key === validLicenseKey;
}

module.exports = verifyLicense;
