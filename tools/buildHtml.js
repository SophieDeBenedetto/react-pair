import fs from 'fs';  
import cheerio from 'cheerio';  
import colors from 'colors';

/*eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {  
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);
  $('head').prepend('');

  fs.writeFile('public/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /public'.green);
  });
});