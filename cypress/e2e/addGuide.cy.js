import AddGuide from "../pages/addGuide";

describe('Add Guide Spec', () => {
    it('fills out the guide application form', () => {
     
      // guide login
      cy.guideLogin('01609149406', '640087@m')
      
      // add guide
      AddGuide.clickHajjGuideList()
      cy.wait(1000)
      AddGuide.clickHajjGuideNewApplication()
      cy.wait(1000)
      AddGuide.setHajjGuideYesExperience()
      cy.wait(1000)
      AddGuide.setGuideExperienceTrackingNo('H175DD3B2B')
      cy.wait(1000)
      AddGuide.clickGuideExperienceNext()
      cy.wait(1000)
      AddGuide.setBirthDate('1998', 'Oct', '15');
      cy.wait(1000)
      AddGuide.setNationalNo(4329870922)
      cy.wait(1000)
      AddGuide.setBirthPlace('দিনাজপুর')
      cy.wait(1000)
      AddGuide.setGender('female')
      cy.wait(1000)
      AddGuide.setUserphoto('C:/Users/User/Downloads/66d008082d9a1.jpeg')
      cy.wait(1000)
      AddGuide.setPermanentPostcode('2345')
      cy.wait(1000)
      AddGuide.setPermanentDivision(7)
      cy.wait(1000)
      AddGuide.setPermanentDistrict('ফরিদপুর')
      cy.wait(1000)
      AddGuide.setPermanentThana('ভাংগা')
      cy.wait(1000)
      AddGuide.setPermanentAddress('Sonakhola') 
      cy.wait(1000)
      AddGuide.clickSameAddress()
      cy.wait(1000)
      //AddGuide.setJobHolder('No')
      AddGuide.setJobHolder('Yes', 'GOVT. SERVICE', 'Engineer', 'murdy office', 'murdy address')
      cy.wait(1000)
      AddGuide.clickUserRegTerm()
      cy.wait(1000);
      AddGuide.saveAsDraft();

      
  })
})