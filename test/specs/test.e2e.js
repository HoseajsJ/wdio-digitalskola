import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('SauceDemo E2E Test', () => {
    it('should login successfully', async () => {
        // Navigasi ke website
        await browser.url('https://www.saucedemo.com/');
        
        // Input username dan password
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        
        // Klik tombol login
        await $('#login-button').click();
        
        // Validasi user berada di dashboard (cek URL atau elemen dashboard)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect($('.title')).toHaveText('Products');
    });

    it('should add item to cart successfully', async () => {
        // Tambahkan item pertama ke dalam cart
        await $('.inventory_item button').click();
        
        // Validasi item ditambahkan ke cart
        const cartBadge = $('.shopping_cart_badge');
        await expect(cartBadge).toBeDisplayed();
        await expect(cartBadge).toHaveText('1');
    });
});

