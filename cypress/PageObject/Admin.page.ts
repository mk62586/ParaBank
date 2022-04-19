///<reference types="Cypress"/>

import { delay } from "cypress/types/lodash"

const adminLink= '#headerPanel'
const rightPanel = "#rightPanel"
const soap = '#accessMode1'
const restXml = '#accessMode2'
const restJSON = '#accessMode3'
const jdbc = '#accessMode4'
const initBal ='#initialBalance'
const minBal='#minimumBalance'
const loan = '#loanProvider'
const loanProc = '#loanProcessor'
const threehold= '#loanProcessorThreshold'
const submit = '[value="Submit"]'
const clearp = '[value="CLEAN"]'
const provider :String[] = ["JMS","Local","Web Service"]


class Admin{
adminPage(){
  return cy.get(adminLink).contains("Admin Page").click()
 }
 titlePage(){
  return cy.title()
}
administration(){
  return cy.get(rightPanel).contains("Database"),
   cy.get(rightPanel).contains("Data Access Mode"),
   cy.get(rightPanel).contains("Web Service")
 }
modeSoap(){
  return  cy.get(soap).click()
} 
modeRest(){
  return  cy.get(restXml).click()
} 
modeRestJson(){
 return  cy.get(restJSON).click()
} 
modeJDBC(){
 return  cy.get(jdbc).click()
 } 
aapSetting(){
 return cy.get(initBal).clear().type("10000",{delay:100}),
        cy.get(minBal).clear().type("100",{delay:100}),
        cy.get(loan).select("Web Service"),
        cy.get(loanProc).select("Down Payment"),
        cy.get(threehold).clear().type("60",{delay:100}),
        cy.get(submit).click(),
        cy.get(rightPanel).contains("Settings saved successfully.")
  }
cleanAapSetting(){
  return cy.get(initBal).clear().type("10000",{delay:100}),
         cy.get(minBal).clear().type("100",{delay:100}),
         cy.get(loan).select("Web Service"),
         cy.get(loanProc).select("Down Payment"),
         cy.get(threehold).clear().type("60",{delay:100}),
         cy.get(clearp).click()
  }
}
export default new Admin