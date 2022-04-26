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
  return cy.get(adminLink).contains("Admin Page")
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
  return  cy.get(soap)
} 
modeRest(){
  return  cy.get(restXml)
} 
modeRestJson(){
 return  cy.get(restJSON)
} 
modeJDBC(){
 return  cy.get(jdbc)
 } 
  initBal(){
 return cy.get(initBal)
  }
  minBal(){
       return cy.get(minBal)
  }
  loan(){
       return cy.get(loan)
  }
  downPayment(){
       return cy.get(loanProc)
  }
  threehold(){
       return cy.get(threehold)
  }
  submit(){
      return  cy.get(submit)
  }
  rightPanel(){
     return   cy.get(rightPanel).contains("Settings saved successfully.")
  }
  clean(){
    return  cy.get(clearp)
  }
}
export default new Admin