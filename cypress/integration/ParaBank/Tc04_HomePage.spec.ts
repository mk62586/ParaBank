///<reference types="Cypress"/>
import home from "../../PageObject/Home.page"
describe("Customer visit homePage",()=>{
    var m:any
    before("fixture",()=>{
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
    it("visual test case of login",()=>{
        cy.document().toMatchImageSnapshot();
    })
    it("Customer will click the homePage,Service,about us 3",()=>{
        home.homeMenu().click()
        home.Service() 
        home.aboutUs().click().should('be.visible')   
    })
    it.skip("user will send mail to customerCare sucessfully",()=>{
        home.mail().click().should('be.visible')
        home.emailName().type(m.firstName)
        home.emailEmail().type(m.email)
        home.emailPhone().type(m.phone)
        home.emailMessage().type("Hello submit the request")
        home.emailButton().click()
        home.verfiyResult().should("be.visible")
    })
})