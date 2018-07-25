const fs = require("fs");

if (fs.existsSync('./src/styles')) {
  fs.mkdirSync('./build/styles');
  fs.readdirSync('./src/styles').forEach(file => {
    fs.copyFileSync('./src/styles/' + file, './build/styles/' + file);
  });
}