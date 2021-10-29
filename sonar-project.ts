const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
  serverUrl: 'http://172.20.3.114:9000',
  options : {
    'sonar.projectKey':'demo_project',
    'sonar.projectName':'Demo Project',
    'sonar.projectVersion':'1.0',
    'sonar.sourceEncoding':'UTF-8',
    'sonar.sources': 'src',
    'sonar.tests':  'test',
    'sonar.language': 'ts',
    'sonar.login': 'admin',
    'sonar.password': 'Test@986#',
    'sonar.eslint.eslintconfigpath': 'tsconfig.json',
    'sonar.exclusions':"node_modules/*,src/config/*,src/middleware/*,src/models/*",
    'sonar.javascript.lcov.reportPaths':'src/coverage/lcov.info'
  }
}, () => {});


