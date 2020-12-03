// vi har brugt npm i puppeteer til at installere puppeteer
// her importere vi det så vi kan bruge det.
const puppeteer = require('puppeteer');

// we skal få fat i POST body data, til dette bruger vi en util function vi har laver i utils.js
const  { getPostData } = require('./utils')

// da vi arbejde med ting som kan tage tid så bruger vi async function her
async function scraperPage(req, res){
    try {
        
        const body = await getPostData(req)
    
        const { url } = JSON.parse(body)
    
    
        // vi starter puppeteer og en ny side og så går vi til den url som vi har fået
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
    
        const [el] = await page.$x('/html/head/title');
        const txt = await el.getProperty('textContent');
        const rawTxt = await txt.jsonValue();
        
    
    
        let result = {
            title: rawTxt
        }
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(result))
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    scraperPage
}
