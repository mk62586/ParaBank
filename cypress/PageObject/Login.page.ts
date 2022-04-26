const customerName ="[type='text']"
const customerPassword='[type="password"]'
const submitButton = "[type='submit']"

class login{
    customerUserName(){
         return cy.get(customerName)
    }
    customerUserPassword(){
        return cy.get(customerPassword)
   }
   loginButton(){
       return cy.get(submitButton)
   }
}
export default new login