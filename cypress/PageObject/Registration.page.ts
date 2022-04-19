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
    return  cy.get(regesterLink).contains("Register").click()
}
  FirstName(value:any){
      return cy.get(Firstname).type(value)
 }
  LastName(value:any){
      return cy.get(lastname).type(value)
}
  Addresss(value:any){
      return cy.get(address).type(value)
}
  City(value:any){
    return cy.get(city).type(value)
}
State(value:any){
    return cy.get(state).type(value)
}
Zip(value:any){
    return cy.get(zip).type(value)
}
Phone(value:any){
    return cy.get(phone).type(value)
}
Ssn(value:any){
    return cy.get(ssn).type(value)
}
UserName(value:any){
    return cy.get(username).type(value)
}
Password(value:any){
    return cy.get(password).type(value)
}
confirmPass(value:any){
    return cy.get(confirmPass).type(value)
}
RegButton(){
    return cy.get(regButton).contains("Register").click()
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