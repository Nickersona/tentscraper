import fetch from 'node-fetch';
import cheerio from 'cheerio';
import fs from 'fs';

const filePath = "./data/prices.json";
export default async function scrape() {
  const url = 'https://www.altitude-sports.com/products/big-agnes-copper-spur-hv-ul3-tent-llll-bag-thvcso320#?style=Orange';

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.5'
  };

  const response = await fetch(url, { headers });
  const html = await response.text();

  const $ = cheerio.load(html);

  const [_, price] = $('.current_price').text().trim().split('$')
  const date = new Date().toISOString();


  const file = await fs.readFileSync(filePath, "utf8");
  const dataObj = JSON.parse(file);
  dataObj.data.push({price, date})
   fs.writeFileSync(filePath, JSON.stringify(dataObj));
}

scrape();
