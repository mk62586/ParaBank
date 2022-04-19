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
        admin.adminPage()
    })
    it.only('Validate the title of the page',()=>{
      admin.titlePage().then(txt=>{
          expect(txt).to.eql('ParaBank | Administration')
      })
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
     admin.aapSetting().should("be.visible")
    })
    it.skip("Customer will fill application setting and click clean",()=>{
      admin.cleanAapSetting().should("be.visible")
    })
    it("When customer will save data in SOAP mode",()=>{
      admin.modeSoap()
      admin.aapSetting().should("be.visible")
    })
    it("When customer will save data in rest mode",()=>{
      admin.modeRest()
      admin.aapSetting().should("be.visible")
    })
    it("When customer will save data in json mode",()=>{
      admin.modeRestJson()
      admin.aapSetting().should("be.visible")
    })
    it("When customer will save data in jdbc mode",()=>{
      admin.modeJDBC()
      admin.aapSetting().should("be.visible")
    }) 
 })
