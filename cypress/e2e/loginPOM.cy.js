import Login from '../pages/login'


describe('template spec', () => {
    it('passes', () => {
      //cy.visit('http://localhost:8000/')
      cy.visit('https://uat-ehaj.oss.net.bd')
      Login.clickHeaderLogin();
      cy.wait(5000)
      Login.clickHeaderSocialGuideLogin();
      cy.wait(5000)
      Login.setMobileNo('01609149406')
      cy.wait(5000)
      Login.setPassword('640087@m')
      cy.wait(5000)
      Login.clickSignIn()
      cy.wait(5000)
      cy.url().should('include', '/my-desk')
      
      
  })
})