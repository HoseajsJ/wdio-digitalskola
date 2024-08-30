import Page from "/page";

class ChekoutPage extends Page {

    get checkoutButton () {}
    get continueShoppingButton () {}

    open() {
        return super.open("cart.html")
    }

}

export default new ChekoutPage ();