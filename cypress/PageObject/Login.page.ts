const customerName ="[type='text']"
const customerPassword='[type="password"]'
const submitButton = "[type='submit']"

class login{
    customerUserName(value:any){
         return cy.get(customerName).type(value)
    }
    customerUserPassword(value:any){
        return cy.get(customerPassword).type(value)
   }
   loginButton(){
       return cy.get(submitButton).click()
   }
}
export default new login