import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source=fs.readFileSync('app.js','utf8');
new vm.Script(source);
const names=['index','products','categories','category','product','wishlist','cart','checkout','profile','addresses','orders','order','help','about','contact','privacy'];
for(const name of names){
 const html=fs.readFileSync(name+'.html','utf8');
 assert.match(html,/<html lang="mn">/);
 assert(html.includes('data-page="'+(name==='index'?'home':name)+'"'));
 assert(html.includes('id="search-form"'));
 assert(html.includes('href="profile.html"'));
 assert(html.includes('href="cart.html"'));
 assert(html.includes('id="i-user"'));
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
 assert.equal(ids.length,new Set(ids).size,'Duplicate id in '+name);
 for(const [,href]of html.matchAll(/href="([^"]+\.html)(?:[?#][^"]*)?"/g)){assert(fs.existsSync(href),'Missing local page '+href);}
}
const data=source.slice(0,source.indexOf('const $='));
const context=vm.createContext({});
vm.runInContext(data,context);
assert.equal(vm.runInContext('products.length',context),12);
assert.equal(vm.runInContext('new Set(products.map(p=>p.category)).size',context),4);
assert.equal(vm.runInContext('new Set(products.map(p=>p.id)).size',context),12);
assert(vm.runInContext('products.every(p=>Number.isFinite(p.price)&&p.price>0)',context));
console.log('PASS: syntax, all 16 page shells, unique IDs, internal page links and catalog integrity.');
