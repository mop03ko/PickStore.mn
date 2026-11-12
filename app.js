'use strict';
const photo = (id, width = 600) => 'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=' + width + '&q=80';
const products = [
 {id:1,name:'MacBook Air 13″',brand:'Apple',category:'Work',description:'Хөнгөн загвар. Том санаанд зориулав.',price:3890000,old:4290000,image:photo('photo-1517336714731-489689fd1ca8'),tag:'PICK OF THE DAY',isNew:false,details:'Ажил, хичээл, бүтээлч санаанд зориулсан зөөврийн компьютерийн жишээ сонголт. Бодит худалдаанд шилжихэд чип, санах ой, багтаамж болон өнгөний хувилбарыг бүртгэнэ.'},
 {id:2,name:'Wireless Headphones',brand:'Sony',category:'Lifestyle',description:'Өөрийн ертөнцдөө уус.',price:899000,old:1099000,image:photo('photo-1546435770-a3e426bf472b'),tag:'ОНЦЛОХ',isNew:false,details:'Хөгжим, ажил, аялалд зориулсан утасгүй чихэвчийн жишээ сонголт. Зураг нь төлөөлүүлсэн бөгөөд загварын дугаар, техникийн үзүүлэлтийг баталгаажуулсны дараа шинэчилнэ.'},
 {id:3,name:'Creator Camera',brand:'DJI',category:'Hobby',description:'Таны түүх, таны харах өнцөг.',price:1799000,old:0,image:photo('photo-1516035069371-29a1b244cc32'),tag:'ШИНЭ',isNew:true,details:'Контент бүтээгчдэд зориулсан камерын цуглуулгын жишээ. Зургийг төлөөлүүлсэн; бодит бүтээгдэхүүний нэр, иж бүрдэл болон үзүүлэлтүүдийг каталог холбох үед оруулна.'},
 {id:4,name:'Wireless Controller',brand:'Proove',category:'Gaming',description:'Тоглоомоо өөрийнхөөрөө удирд.',price:189000,old:239000,image:photo('photo-1606318801954-d46d46d3360a'),tag:'−21%',isNew:false,details:'Тоглоомын удирдлагын жишээ сонголт. Бодит барааны холболт, платформын нийцэл болон үзүүлэлтүүдийг баталгаажуулж оруулна.'},
 {id:5,name:'Galaxy Smartphone',brand:'Samsung',category:'Lifestyle',description:'Өдөр тутмын ухаалаг хамтрагч.',price:2499000,old:0,image:photo('photo-1511707171634-5f897ff02aa9'),tag:'ШИНЭ',isNew:true,details:'Ухаалаг утасны цуглуулгын жишээ. Зураг, үнэ нь жишээ өгөгдөл; загварын дугаар, багтаамж, өнгө болон баталгааг бодит каталогоос холбох шаардлагатай.'},
 {id:6,name:'Compact Drone',brand:'DJI',category:'Hobby',description:'Шинэ өндөрлөгөөс нээж хар.',price:1499000,old:1699000,image:photo('photo-1506947411487-a56738267384'),tag:'ОНЦЛОХ',isNew:false,details:'Аялал, бүтээлч зураг авалтад зориулсан дроны жишээ сонголт. Бодит загварын нислэгийн хугацаа, камер болон иж бүрдлийг дараа нь баталгаажуулна.'},
 {id:7,name:'Mechanical Keyboard',brand:'Logitech',category:'Gaming',description:'Товшилт бүр илүү мэдрэмжтэй.',price:329000,old:399000,image:photo('photo-1587829741301-dc798b83add3'),tag:'ОНЦЛОХ',isNew:false,details:'Тоглоом болон өдөр тутмын хэрэглээнд зориулсан гарын жишээ. Свитч, холболт, хэмжээ болон үсгийн байрлалыг бодит бүтээгдэхүүний мэдээллээр шинэчилнэ.'},
 {id:8,name:'Workspace Laptop',brand:'Samsung',category:'Work',description:'Төвлөр. Бүтээ. Урагшил.',price:2799000,old:0,image:photo('photo-1496181133206-80ce9b88a853'),tag:'ШИНЭ',isNew:true,details:'Ажлын зориулалттай зөөврийн компьютерийн жишээ сонголт. Техникийн үзүүлэлт, үйлдлийн систем болон баталгааны мэдээллийг бодит бараанд тохируулна.'},
 {id:9,name:'Everyday Audio',brand:'Proove',category:'Lifestyle',description:'Дуртай хэмнэлээ хаана ч.',price:159000,old:199000,image:photo('photo-1484704849700-f032a568e944'),tag:'ОНЦЛОХ',isNew:false,details:'Өдөр тутмын аудио хэрэгслийн жишээ сонголт. Загвар болон техникийн үзүүлэлтүүд баталгаажаагүй. Зургийг төлөөлүүлэн ашиглав.'},
 {id:10,name:'Studio Camera',brand:'Sony',category:'Hobby',description:'Дурсамжийг бүтээл болго.',price:3299000,old:0,image:photo('photo-1516035069371-29a1b244cc32'),tag:'ШИНЭ',isNew:true,details:'Фото, видео бүтээлд зориулсан камерын цуглуулгын жишээ. Бодит загвар, линз, иж бүрдэл болон техникийн үзүүлэлтийг баталгаажуулж оруулна.'},
 {id:11,name:'Gaming Essentials',brand:'Logitech',category:'Gaming',description:'Таны дараагийн тоглолтод.',price:459000,old:599000,image:photo('photo-1612287230202-1ff1d85d1bdf'),tag:'ОНЦЛОХ',isNew:false,details:'Тоглоомын хэрэгслийн цуглуулгын жишээ. Багцын бүрэлдэхүүн, бодит үнэ болон барааны үлдэгдлийг худалдааны систем холбох үед оруулна.'},
 {id:12,name:'Creative Workspace',brand:'Apple',category:'Work',description:'Ажлын шинэ хэмнэлийг эхлүүл.',price:4599000,old:0,image:photo('photo-1517336714731-489689fd1ca8'),tag:'ШИНЭ',isNew:true,details:'Бүтээлч ажилд зориулсан компьютерийн жишээ сонголт. Бодит барааны загвар болон техникийн үзүүлэлтүүдийг баталгаажуулсны дараа нийтэлнэ.'}
];
const $ = s => document.querySelector(s);
const money = n => new Intl.NumberFormat('mn-MN').format(n) + ' ₮';
const state = {category:'all',query:'',brand:'',mode:'all',sort:'featured'};
function readStored(key, fallback) {
 try {return JSON.parse(localStorage.getItem(key)) ?? fallback;} catch {return fallback;}
}
const known = id => products.some(p => p.id === id);
const initialSaved = readStored('pick-saved-v1', []);
let saved = new Set(Array.isArray(initialSaved) ? initialSaved.filter(id => Number.isInteger(id) && known(id)) : []);
const initialCart = readStored('pick-cart-v1', []);
let cart = Array.isArray(initialCart) ? initialCart.filter(x => x && Number.isInteger(x.id) && known(x.id) && Number.isInteger(x.qty) && x.qty > 0 && x.qty <= 99).reduce((a,x) => {const existing=a.find(y=>y.id===x.id);if(existing)existing.qty=Math.min(99,existing.qty+x.qty);else a.push({id:x.id,qty:x.qty});return a;},[]) : [];
let toastTimer;
function toast(message) {const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2700);}
function persist() {try {localStorage.setItem('pick-cart-v1',JSON.stringify(cart));localStorage.setItem('pick-saved-v1',JSON.stringify([...saved]));} catch {toast('Хөтөч хадгалах боломжгүй байна. Сонголт энэ хуудсанд хадгалагдана.');} updateCounts();}
function updateCounts() {$('#cart-count').textContent=cart.reduce((n,p)=>n+p.qty,0);$('#saved-count').textContent=saved.size;$('#saved-count').hidden=!saved.size;$('#saved-button').setAttribute('aria-label','Хадгалсан бүтээгдэхүүн: '+saved.size);}
function imageMarkup(p, lazy=true) {return '<img src="'+p.image+'" alt="'+p.name+' — төлөөлүүлсэн зураг" '+(lazy?'loading="lazy"':'')+'>'; }
function productMarkup(p) {
 return '<article class="product-card"><div class="product-image"><button data-product="'+p.id+'" aria-label="'+p.name+' дэлгэрэнгүй">'+imageMarkup(p)+'</button><span class="product-tag '+(p.isNew?'dark':'')+'">'+p.tag+'</span><button class="save-product '+(saved.has(p.id)?'saved':'')+'" data-save="'+p.id+'" aria-label="'+p.name+(saved.has(p.id)?' хадгалснаас хасах':' хадгалах')+'" aria-pressed="'+saved.has(p.id)+'"><svg><use href="#i-heart"/></svg></button></div><div class="product-body"><div class="product-meta"><span>'+p.brand.toUpperCase()+'</span><span>'+p.category+'</span></div><button class="product-name" data-product="'+p.id+'">'+p.name+'</button><p class="product-description">'+p.description+'</p><div class="price-line"><span class="price">'+money(p.price)+'</span>'+(p.old?'<span class="old-price">'+money(p.old)+'</span>':'')+'</div><div class="product-actions"><span>Жишээ бүтээгдэхүүн</span><button class="add-button" data-add="'+p.id+'"><svg><use href="#i-bag"/></svg>Сагслах</button></div></div></article>';
}
function filteredProducts() {
 const query=state.query.toLocaleLowerCase().trim();
 let items=products.filter(p=>(state.category==='all'||p.category===state.category)&&(!state.brand||p.brand===state.brand)&&(state.mode!=='saved'||saved.has(p.id))&&(state.mode!=='deals'||p.old>p.price)&&(state.mode!=='new'||p.isNew)&&(!query||(p.name+' '+p.brand+' '+p.category+' '+p.description+' '+p.details).toLocaleLowerCase().includes(query)));
 if(state.sort==='price-asc')items.sort((a,b)=>a.price-b.price);
 if(state.sort==='price-desc')items.sort((a,b)=>b.price-a.price);
 if(state.sort==='name')items.sort((a,b)=>a.name.localeCompare(b.name));
 return items;
}
function render() {
 const items=filteredProducts();$('#product-grid').innerHTML=items.map(productMarkup).join('');$('#empty-state').hidden=items.length>0;$('#result-count').textContent=items.length+' сонголт';
 const titles={saved:'Таны хадгалсан сонголтууд',deals:'Онцлох үнийн саналууд',new:'Шинэ ирсэн сонголтууд'};
 $('#catalog-title').textContent=state.query?'Хайлтын үр дүн':state.brand?state.brand+' сонголтууд':titles[state.mode]||(state.category==='all'?'Танд санал болгох сонголтууд':state.category+' цуглуулга');
 $('#catalog-kicker').textContent=state.mode==='saved'?'SAVED FOR LATER':'CURATED FOR YOU';
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===state.category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 const filters=[state.query?'Хайлт: “'+state.query+'”':'',state.brand,state.category!=='all'?state.category:'',state.mode==='saved'?'Хадгалсан':state.mode==='deals'?'Онцлох санал':state.mode==='new'?'Шинэ ирсэн':''].filter(Boolean);
 $('#filter-description').textContent=filters.join(' / ');$('#active-filters').hidden=!filters.length;
 if(!items.length){$('#empty-state h3').textContent=state.mode==='saved'?'Хадгалсан бүтээгдэхүүн алга':'Сонголт олдсонгүй';$('#empty-state p').textContent=state.mode==='saved'?'Бүтээгдэхүүний зүрхэн дээр дарж дуртайгаа хадгалаарай.':'Өөр нэрээр хайх эсвэл шүүлтүүрээ арилгаарай.';}
}
function scrollCatalog() {$('#catalog').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}
function closeMenu() {$('#mega-menu').hidden=true;$('#menu-toggle').setAttribute('aria-expanded','false');}
function resetState() {Object.assign(state,{category:'all',query:'',brand:'',mode:'all',sort:'featured'});$('#search').value='';$('#sort').value='featured';}
function selectCategory(category) {resetState();state.category=category;closeMenu();render();scrollCatalog();}
function addToCart(id) {const item=cart.find(p=>p.id===id);if(item&&item.qty>=99){toast('Нэг бүтээгдэхүүнээс хамгийн ихдээ 99 ширхэг сонгоно.');return;}if(item)item.qty++;else cart.push({id,qty:1});persist();if($('#cart-dialog').open)renderCart();toast('Сагсанд нэмэгдлээ');}
function showProduct(id) {
 const p=products.find(p=>p.id===id);if(!p)return;
 $('#product-detail').innerHTML='<div class="detail-grid"><div>'+imageMarkup(p,false).replace('<img ','<img class="detail-image" ')+'</div><div class="detail-copy"><span class="detail-category">'+p.brand.toUpperCase()+' / '+p.category.toUpperCase()+'</span><h2>'+p.name+'</h2><p>'+p.details+'</p><div class="price-line"><span class="price">'+money(p.price)+'</span>'+(p.old?'<span class="old-price">'+money(p.old)+'</span>':'')+'</div><p>Жишээ үнэ · Зургийг төлөөлүүлсэн</p><button class="button red-button" data-add="'+p.id+'">Сагсанд нэмэх <svg><use href="#i-bag"/></svg></button></div></div>';$('#product-dialog').showModal();
}
function renderCart() {
 if(!cart.length){$('#cart-content').innerHTML='<div class="empty-cart"><svg><use href="#i-bag"/></svg><h3>Таны сагс хоосон байна.</h3><p>Дуртай сонголтуудаа нэмээрэй.</p><button class="button red-button" data-shop>Сонголтоо олох</button></div>';return;}
 let total=0;
 $('#cart-content').innerHTML=cart.map(item=>{const p=products.find(p=>p.id===item.id);total+=p.price*item.qty;return '<div class="cart-item">'+imageMarkup(p,false)+'<div><h3>'+p.name+'</h3><span class="price">'+money(p.price)+'</span><div class="quantity-row"><div class="quantity"><button data-quantity="'+p.id+'" data-delta="-1" aria-label="'+p.name+' тоог багасгах">−</button><span aria-label="Тоо хэмжээ">'+item.qty+'</span><button data-quantity="'+p.id+'" data-delta="1" '+(item.qty>=99?'disabled':'')+' aria-label="'+p.name+' тоог нэмэх">+</button></div><button class="remove-item" data-remove="'+p.id+'">Устгах</button></div></div></div>';}).join('')+'<div class="cart-total"><span>Нийт</span><span>'+money(total)+'</span></div><button class="button red-button cart-checkout" data-checkout>Захиалгын мэдээлэл <span>→</span></button><p class="cart-note">Танилцуулгын загвар. Бодит захиалга болон төлбөр хийгдэхгүй. Хүргэлтийн төлбөр тооцоогүй.</p>';
}
const info = {
 about:['Pick Store-ийн тухай','Pick Store бол сонирхол, өдөр тутмын амьдрал, тоглоом болон ажлын хэрэгцээг нэг дор нэгтгэх дэлгүүрийн концепц юм.','Hobby, Lifestyle, Gaming, Work — өөрийн хэмнэлд тохирох технологио сонгоорой.'],
 delivery:['Хүргэлт ба төлбөр','Энэ нь Pick Store-ийн танилцуулгын веб загвар. Бодит захиалга, хүргэлт болон төлбөрийн үйлчилгээ одоогоор холбогдоогүй.','Үнэ, хямдрал, бүтээгдэхүүнүүд нь жишээ мэдээлэл бөгөөд худалдааны санал биш.'],
 privacy:['Мэдээллийн нууцлал','Сагс болон хадгалсан бүтээгдэхүүнүүд зөвхөн таны хөтчийн localStorage-д хадгалагдана. Нэр, утас, төлбөрийн мэдээлэл цуглуулахгүй.','Хөтчийн сайтын өгөгдлийг цэвэрлэхэд хадгалсан сонголтууд устна. Зураг болон фонт ачаалахад Unsplash, Google Fonts үйлчилгээтэй холбогдоно.'],
 contact:['Холбоо барих','Pick Store · Улаанбаатар, Монгол.','Салбарын хаяг, утас болон албан ёсны холбоо барих мэдээллийг баталгаажуулсны дараа энд байршуулна.']
};
function showInfo(title, paragraphs) {$('#info-title').textContent=title;$('#info-content').replaceChildren(...paragraphs.map(t=>{const p=document.createElement('p');p.textContent=t;return p;}));$('#info-dialog').showModal();}
document.addEventListener('click',e=>{
 const button=e.target.closest('button');if(!button)return;
 if(button.hasAttribute('data-category'))selectCategory(button.dataset.category);
 else if(button.hasAttribute('data-filter')){state.category=button.dataset.filter;render();}
 else if(button.hasAttribute('data-mode')){resetState();state.mode=button.dataset.mode;render();scrollCatalog();}
 else if(button.hasAttribute('data-brand')){resetState();state.brand=button.dataset.brand;render();scrollCatalog();}
 else if(button.hasAttribute('data-product'))showProduct(Number(button.dataset.product));
 else if(button.hasAttribute('data-add'))addToCart(Number(button.dataset.add));
 else if(button.hasAttribute('data-save')){const id=Number(button.dataset.save);const didSave=!saved.has(id);if(didSave)saved.add(id);else saved.delete(id);persist();render();toast(didSave?'Хадгалсан сонголтод нэмэгдлээ':'Хадгалсан сонголтоос хаслаа');const target=document.querySelector('[data-save="'+id+'"]');if(target)target.focus({preventScroll:true});}
 else if(button.hasAttribute('data-close'))button.closest('dialog').close();
 else if(button.hasAttribute('data-quantity')){const item=cart.find(x=>x.id===Number(button.dataset.quantity));if(!item)return;item.qty+=Number(button.dataset.delta);cart=cart.filter(x=>x.qty>0);persist();renderCart();}
 else if(button.hasAttribute('data-remove')){cart=cart.filter(x=>x.id!==Number(button.dataset.remove));persist();renderCart();}
 else if(button.hasAttribute('data-shop')){$('#cart-dialog').close();selectCategory('all');}
 else if(button.hasAttribute('data-checkout')){const count=cart.reduce((n,x)=>n+x.qty,0);const total=cart.reduce((n,x)=>n+products.find(p=>p.id===x.id).price*x.qty,0);$('#cart-dialog').close();showInfo('Таны сонголтын хураангуй',[count+' ширхэг бүтээгдэхүүн · Жишээ нийт үнэ '+money(total),'Энэ нь танилцуулгын загвар тул захиалга илгээгдэхгүй, төлбөр төлөгдөхгүй. Таны сонголтууд сагсанд хадгалагдсан хэвээр байна.']);}
 else if(button.hasAttribute('data-info')){const [title,...paragraphs]=info[button.dataset.info];showInfo(title,paragraphs);}
});
$('#search-form').addEventListener('submit',e=>{e.preventDefault();resetSearch();scrollCatalog();});
function resetSearch(){const value=$('#search').value.trim().slice(0,160);resetState();state.query=value;$('#search').value=value;render();closeMenu();}
$('#search').addEventListener('search',()=>{if(!$('#search').value){state.query='';render();}});
$('#sort').addEventListener('change',e=>{state.sort=e.target.value;render();});
$('#clear-filters').addEventListener('click',()=>{resetState();render();});
$('#empty-reset').addEventListener('click',()=>{resetState();render();});
$('#saved-button').addEventListener('click',()=>{resetState();state.mode='saved';closeMenu();render();scrollCatalog();});
$('#cart-button').addEventListener('click',()=>{closeMenu();renderCart();$('#cart-dialog').showModal();});
$('#menu-toggle').addEventListener('click',()=>{const opening=$('#mega-menu').hidden;$('#mega-menu').hidden=!opening;$('#menu-toggle').setAttribute('aria-expanded',String(opening));});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#mega-menu').hidden){closeMenu();$('#menu-toggle').focus();}});
document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close();}}));
document.addEventListener('error',e=>{const img=e.target;if(img.tagName==='IMG'&&!img.dataset.fallback){img.dataset.fallback='true';img.src='assets/pick-store.svg';img.classList.add('image-fallback');}},true);
updateCounts();render();
