# Pick Store

Mongolian ecommerce frontend with the supplied Pick Store SVG identity. Static HTML/CSS/JavaScript, published via GitHub Pages.

## Pages

- index.html — Home
- products.html — All products, search, brand/category/price filtering and sorting
- categories.html — Four departments
- category.html?category=Work — Category collection
- product.html?id=1 — Product detail, quantity and related products
- wishlist.html — Saved products
- cart.html — Cart quantities, removal and totals
- checkout.html — Validated demo checkout
- order.html?id=... — Demo order confirmation/detail
- profile.html — Browser-local profile
- addresses.html — Browser-local delivery address
- orders.html — Browser-local demo order history
- help.html — FAQ
- about.html — Brand story
- contact.html — Contact information placeholder
- privacy.html — Current demo data handling

## Data and limitations

Products, images, prices and promotions are demo data. Profile, address, wishlist, cart and demo orders are stored only in localStorage on the current browser. No authentication, payment, server submission or inventory system is connected. Checkout prominently explains that no merchant order or payment is created. Do not enter real personal information on shared devices. No passwords/card details are collected.

## Run and validate

Serve this directory using a static server. No build is required.

- `node --check app.js`
- `node tests/validate.mjs`
- Install Playwright and Chromium, then `node tests/browser.mjs`

CI verifies all page shells and internal links, real Chromium navigation, filtering, local persistence, checkout validation, order history, and responsive layouts at 1440, 390 and 320 px. It saves desktop/mobile screenshots and publishes root HTML pages with shared assets.
