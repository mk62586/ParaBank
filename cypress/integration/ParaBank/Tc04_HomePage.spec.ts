///<reference types="Cypress"/>
import home from "../../PageObject/Home.page"
describe("Customer visit homePage",()=>{
    var m:any
    beforeEach("fixture",()=>{
        cy.fixture("example").then((user)=>{
        m=user
        })
    })
    beforeEach("visit the ParaBank and go to the admin page",()=>{
        cy.visit(m.url)
    })
    it('Validate the title of the page',()=>{
        home.titlePage().then(txt=>{
            expect(txt).to.eql('ParaBank | Welcome | Online Banking')
        })
    })
    it("Customer will click the homePage,Service,about us 3",()=>{
        home.homeMenu() 
        home.Service() 
        home.aboutUs().should('be.visible')   
    })
    it.skip("user will send mail to customerCare sucessfully",()=>{
        home.mail().should('be.visible')
        home.emailName(m.firstName)
        home.emailEmail(m.email)
        home.emailPhone(m.phone)
        home.emailMessage("Hello submit the request")
        home.emailButton()
        home.verfiyResult().should("be.visible")
    })
})