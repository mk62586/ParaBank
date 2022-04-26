///<reference types="Cypress"/>
import paraBank from "../../PageObject/Registration.page"
  describe("Registration in ParaBank",()=>{
     var m:any
     before("fixture",()=>{
       cy.fixture("example").then((users)=>{
         m=users
       })
   })
     beforeEach ("Visit the paraBank and Click on Register Link",()=>{
      cy.visit(m.url)
        paraBank.Register().click().should("be.visible")
       })
       it.only("visual test case of login",()=>{
        cy.document().toMatchImageSnapshot();
    })
       it.skip("Fill the registration filed",()=>{
           paraBank.FirstName().type(m.firstName)
           paraBank.LastName().type(m.lastName)
           paraBank.Addresss().type(m.address)
           paraBank.City().type(m.city)
           paraBank.State().type(m.state)
           paraBank.Zip().type(m.zip)
           paraBank.Phone().type(m.phone)
           paraBank.Ssn().type(m.ssn)
           paraBank.UserName().type(m.username)
           paraBank.Password().type(m.password)
           paraBank.confirmPass().type(m.password)
           paraBank.RegButton().click()
           paraBank.Sucess().should("be.visible")
      })
    it.skip("When user will registration with same userName but different firstName",()=>{
        paraBank.FirstName().type(m.firstName1)
        paraBank.LastName().type(m.lastName)
        paraBank.Addresss().type(m.address)
        paraBank.City().type(m.address)
        paraBank.State().type(m.state)
        paraBank.Zip().type(m.zip)
        paraBank.Phone().type(m.phone)
        paraBank.Ssn().type(m.ssn)
        paraBank.UserName().type(m.username)
        paraBank.Password().type(m.password)
        paraBank.confirmPass().type(m.password)
        paraBank.RegButton().click()
        paraBank.userNameCheck().should("be.visible")
      })
      it.skip("User will register without enter any field should register",()=>{
        paraBank.RegButton().click
        cy.get('.form2').should("eq","First name is required.")
      })
      it.skip("If user will enter same password in Registration",()=>{
        paraBank.FirstName().type(m.firstName)
        paraBank.LastName().type(m.lastName)
        paraBank.Addresss().type(m.address)
        paraBank.City().type(m.city)
        paraBank.State().type(m.state)
        paraBank.Zip().type(m.zip)
        paraBank.Phone().type(m.phone)
        paraBank.Ssn().type(m.ssn)
        paraBank.UserName().type(m.username)
        paraBank.Password().type(m.password1)
        paraBank.confirmPass().type(m.password)
        paraBank.RegButton().click()
        paraBank.differentPassword().should("be.visible")
      })
      it.only("User will Registration without phone number sucessfully",()=>{
        paraBank.FirstName().type(m.firstName)
        paraBank.LastName().type(m.lastName)
        paraBank.Addresss().type(m.address)
        paraBank.City().type(m.city)
        paraBank.State().type(m.state)
        paraBank.Zip().type(m.zip)
        paraBank.Ssn().type(m.ssn)
        paraBank.UserName().type(m.username)
        paraBank.Password().type(m.password)
        paraBank.confirmPass().type(m.password)
        paraBank.RegButton().click()
        paraBank.Sucess().should("be.visible")
      })
  })
  