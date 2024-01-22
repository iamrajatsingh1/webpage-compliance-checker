const axios = require('axios');
const { analyzeContent } = require('./contentAnalyzer.service.js');
const { CompliancePolicy } = require('../config');

async function checkCompliance(url) {
  const webpageContent = await fetchWebpage(url);
  const findings = analyzeContent(webpageContent, CompliancePolicy);
  return findings;
}

async function fetchWebpage(url) {
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  checkCompliance,
};
