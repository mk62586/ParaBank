import { any } from "cypress/types/bluebird"

const regesterLink = '#loginPanel'
const Firstname    = '[id="customer.firstName"]'
const lastname     = '[id="customer.lastName"]'
const address      = '[id="customer.address.street"]'
const city         = '[id="customer.address.city"]'
const state        ='[id="customer.address.state"]'
const zip          = '[id="customer.address.zipCode"]'
const phone        ='[id="customer.phoneNumber"]'
const ssn          ='[id="customer.ssn"]'
const username     ='[id="customer.username"]'
const password     ='[id="customer.password"]'
const confirmPass  ='#repeatedPassword'
const regButton    = '.form2'
const successfully ='#rightPanel'

class ParaBank{
 Register(){
    return  cy.get(regesterLink).contains("Register")
}
  FirstName(){
      return cy.get(Firstname)
 }
  LastName(){
      return cy.get(lastname)
}
  Addresss(){
      return cy.get(address)
}
  City(){
    return cy.get(city)
}
State(){
    return cy.get(state)
}
Zip(){
    return cy.get(zip)
}
Phone(){
    return cy.get(phone)
}
Ssn(){
    return cy.get(ssn)
}
UserName(){
    return cy.get(username)
}
Password(){
    return cy.get(password)
}
confirmPass(){
    return cy.get(confirmPass)
}
RegButton(){
    return cy.get(regButton).contains("Register")
 }
Sucess(){
    return cy.get(successfully).contains("alex1238")
}
 userNameCheck(){
    return cy.contains("This username already exists.")
}
differentPassword(){
    return cy.contains("Passwords did not match.")
 }
}
export default new ParaBank 