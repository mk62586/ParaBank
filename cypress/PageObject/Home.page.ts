
const home = '.home'
const rightPanel = '#rightPanel'
const aboutUs = '.aboutus'
const Mail = '.contact'
const name = '#name'
const email = '#email'
const phone = '#phone'
const message = '#message'
const button = "[value='Send to Customer Care']"
class Home{
    homeMenu(){
        return cy.get(home).click()
    }
    titlePage(){
        return cy.title()
    }
    Service(){
        return cy.get(rightPanel).contains("ATM Services"),
               cy.get(rightPanel).contains("Online Services")
    }
   aboutUs(){
        return cy.get(aboutUs).click(),
        cy.get(rightPanel).contains("ParaSoft Demo Website")
   }
   mail(){
       return cy.get(Mail).click(),
       cy.get(rightPanel).contains('Customer Care')
   }
   emailName(value:any){
       return cy.get(name).type(value)
   }
   emailEmail(value:any){
    return cy.get(email).type(value)
  }
  emailPhone(value:any){
    return cy.get(phone).type(value)
  }
  emailMessage(value:any){
    return cy.get(message).type(value)
  }
  emailButton(){
    return cy.get(button).click()
  }
  verfiyResult(){
      return cy.get(rightPanel).contains("A Customer Care Representative will be contacting you")
  }
}
export default new Home