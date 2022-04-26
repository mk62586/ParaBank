///<reference types="Cypress"/>
import admin from "../../PageObject/Admin.page"
describe("Admin Page",()=>{
    var m:any
    before("fixture",()=>{
        cy.fixture("example").then((user)=>{
        m=user
        })
    })
    beforeEach("visit the ParaBank and go to the admin page",()=>{
        cy.visit(m.url)
        admin.adminPage().click()
    })
    it.only('Validate the title of the page',()=>{
      admin.titlePage().then(txt=>{
          expect(txt).to.eql('ParaBank | Administration')
      })
    })
    it.only("visual test case of login",()=>{
      cy.document().toMatchImageSnapshot();
  })
    it("Verfiy that Database,Data Access Mode,Web Service,Application Settings is visible",()=>{
       admin.administration().should("be.visible")
    })
    it.skip("Validate the access mode",()=>{
      admin.modeSoap()
      admin.modeRest()
      admin.modeRestJson()
      admin.modeJDBC()
    })
    it("Customer will fill application setting and submit",()=>{
      admin.initBal().clear().type("10000",{delay:100})
      admin.minBal().clear().type("100",{delay:100})
      admin.loan().select("Web Service")
      admin.downPayment().select("Down Payment")
      admin.threehold().clear().type("60",{delay:100})
      admin.submit().click()
      admin.rightPanel().should("be.visible")
    })
    it.skip("Customer will fill application setting and click clean",()=>{
      admin.modeRestJson().click()
      admin.initBal().clear().type("10000",{delay:100})
      admin.minBal().clear().type("100",{delay:100})
      admin.loan().select("Web Service")
      admin.downPayment().select("Down Payment")
      admin.threehold().clear().type("60",{delay:100})
      admin.clean().click()
    })
    it("When customer will save data in SOAP mode",()=>{
      admin.modeSoap().click()
      admin.initBal().clear().type("10000",{delay:100})
      admin.minBal().clear().type("100",{delay:100})
      admin.loan().select("Web Service")
      admin.downPayment().select("Down Payment")
      admin.threehold().clear().type("60",{delay:100})
      admin.submit().click()
      admin.rightPanel().should("be.visible")
    })
    it("When customer will save data in rest mode",()=>{
      admin.modeRest().click()
      admin.initBal().clear().type("10000",{delay:100})
      admin.minBal().clear().type("100",{delay:100})
      admin.loan().select("Web Service")
      admin.downPayment().select("Down Payment")
      admin.threehold().clear().type("60",{delay:100})
      admin.submit().click()
      admin.rightPanel().should("be.visible")
    })
    it("When customer will save data in json mode",()=>{
      admin.modeRestJson().click()
      admin.initBal().clear().type("10000",{delay:100})
      admin.minBal().clear().type("100",{delay:100})
      admin.loan().select("Web Service")
      admin.downPayment().select("Down Payment")
      admin.threehold().clear().type("60",{delay:100})
      admin.submit().click()
      admin.rightPanel().should("be.visible")
    })
    it("When customer will save data in jdbc mode",()=>{
      admin.modeJDBC().click()
      admin.initBal().clear().type("10000",{delay:100})
      admin.minBal().clear().type("100",{delay:100})
      admin.loan().select("Web Service")
      admin.downPayment().select("Down Payment")
      admin.threehold().clear().type("60",{delay:100})
      admin.submit().click()
      admin.rightPanel().should("be.visible")
    }) 
 })
