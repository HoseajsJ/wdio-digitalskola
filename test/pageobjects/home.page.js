import Page from "/page";
import { $ } from "@wdio/globals"


class HomePage extends Page{
   
    get cartIcon () {
        return $("#shopiing_cart_container")
    }
    get addToCartIcon () {
        return $("#add-to-cart-sauce-labs-backpack")
    }
    get productImage () {
        return $("#item_0_img_link")
    }
    open() {
        return super.open("inventory.html")
    }
}

export default new HomePage ();