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
    login.customerUserName().type(m.username)
    login.customerUserPassword().type(m.password)
    login.loginButton().click()
  })
  it("visual test case of login",()=>{
    cy.document().toMatchImageSnapshot();
})
})