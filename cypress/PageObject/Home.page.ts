
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
        return cy.get(home)
    }
    titlePage(){
        return cy.title()
    }
    Service(){
        return cy.get(rightPanel).contains("ATM Services"),
               cy.get(rightPanel).contains("Online Services")
    }
   aboutUs(){
        return cy.get(aboutUs),
        cy.get(rightPanel).contains("ParaSoft Demo Website")
   }
   mail(){
       return cy.get(Mail),
       cy.get(rightPanel).contains('Customer Care')
   }
   emailName(){
       return cy.get(name)
   }
   emailEmail(){
    return cy.get(email)
  }
  emailPhone(){
    return cy.get(phone)
  }
  emailMessage(){
    return cy.get(message)
  }
  emailButton(){
    return cy.get(button)
  }
  verfiyResult(){
      return cy.get(rightPanel).contains("A Customer Care Representative will be contacting you")
  }
}
export default new Home