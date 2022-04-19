///<reference types="Cypress"/>
import login from "../../PageObject/Login.page"

describe("login",()=>{
  var m:any
  it("fixture",()=>{
    cy.fixture("example").then((user)=>{
      m=user
    })
  })
  it("login",()=>{
    cy.visit(m.url)
    login.customerUserName(m.username)
    login.customerUserPassword(m.password)
    login.loginButton()
  })
})