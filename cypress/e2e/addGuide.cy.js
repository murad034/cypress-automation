import AddGuide from "../pages/addGuide";
import Login from "../pages/login";


describe('template spec', () => {
    it('passes', () => {
      //cy.visit('http://localhost:8000')
      cy.visit('https://uat-ehaj.oss.net.bd')
      Login.clickHeaderLogin();
      //cy.wait(5000)
      Login.clickHeaderSocialGuideLogin();
      //cy.wait(5000)
      Login.setMobileNo('01609149406')
      //cy.wait(5000)
      Login.setPassword('640087@m')
      //cy.wait(5000)
      Login.clickSignIn()
      //cy.wait(5000)
      cy.url().should('include', '/my-desk')
      
      // add guide
      AddGuide.clickHajjGuideList()
      cy.wait(5000)
      AddGuide.clickHajjGuideNewApplication()
      cy.wait(5000)
      AddGuide.setHajjGuideYesExperience()
      cy.wait(5000)
      AddGuide.setGuideExperienceTrackingNo('H175DD3B2B')
      cy.wait(5000)
      AddGuide.clickGuideExperienceNext()
      cy.wait(5000)
      AddGuide.setBirthDate('1998', 'Oct', '15');
      cy.wait(5000)
      AddGuide.setNationalNo(4329870922)
      cy.wait(5000)
      AddGuide.setBirthPlace('দিনাজপুর')
      cy.wait(5000)
      AddGuide.setGender('female')
      cy.wait(5000)
      AddGuide.setUserphoto('C:/Users/User/Downloads/66d008082d9a1.jpeg')
      cy.wait(5000)
      AddGuide.setPermanentPostcode('2345')
      cy.wait(5000)
      AddGuide.setPermanentDivision(7)
      cy.wait(5000)
      AddGuide.setPermanentDistrict('ফরিদপুর')
      cy.wait(5000)
      AddGuide.setPermanentThana('ভাংগা')
      cy.wait(5000)
      AddGuide.setPermanentAddress('Sonakhola') 
      cy.wait(5000)
      AddGuide.clickSameAddress()
      cy.wait(5000)
      AddGuide.setJobHolder('No')
      cy.wait(5000)
      AddGuide.clickUserRegTerm()
      cy.wait(5000);
      AddGuide.saveAsDraft();


      
  })
})