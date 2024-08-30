import Page from "./page";
import {$} from "@wdio/globals"

/**
 * sub page containing specific selectors and methods for a specific p>
 */
class InventoryPage {
    get inventoryList() { return $('.inventory_list') }
    get addToCartButton() { return $('button[name="add-to-cart-sauce-labs-backpack"]') }
    get cartBadge() { return $('.shopping_cart_badge') }
    get sortDropdown() { return $('.product_sort_container') }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async sortItems(sortOption) {
        await this.sortDropdown.selectByVisibleText(sortOption);
    }

    async getItemPrices() {
        const prices = await $$('div.inventory_item_price');
        return Promise.all(prices.map(async (price) => {
            const text = await price.getText();
            return parseFloat(text.replace('$', ''));
        }));
    }
}

module.exports = new InventoryPage();


export default new InventoryPage ()