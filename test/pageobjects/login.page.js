import Page from "./page";
import {$} from "@wdio/globals"

/**
 * sub page containing specific selectors and methods for a specific p>
 */
class LoginPage extends Page {
    
    get usernameTextBox() {
        return $("#user-name")
    }
    get passwordTextBox() {
        return $("#password")
    }
    get loginTextBox() {
        return $('#//input[@type="submit"]')
    }



    open() {
        return super.open("")
    } 
}

export default new LoginPage ()