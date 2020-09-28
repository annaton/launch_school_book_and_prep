function extractRegion(locale) {
  return locale.substring(3,5);
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
