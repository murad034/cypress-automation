class AddGuide{
    hajjGuideList = 'div.hajj-dashboard-container>aside>div>div>a>span.dm-text';
    hajjGuideNewApplication = 'div#newApplicationBtn>div>span.list-btn-text';
    hajjGuideExperienceYes = 'input[type=radio][name=prev_hajj_experience][value="yes"]';
    hajjGuideExperienceNo = 'input[type=radio][name=prev_hajj_experience][value="no"]';
    guideExperienceTrackingNo = 'input[type=text][placeholder="সর্বশেষ ট্রাকিং নম্বর লিখুন"]';
    guideExperienceNext = 'div.bd-card-footer>div>button>span';
    selectBirthDate = 'div>input.dp__input_reg[placeholder="Select Date"]';
    openBirthYear = 'div.dp__month_year_select[aria-label="Open years overlay"]';
    selectBirthYearOrMonth = 'div.dp__overlay';
    openBirthMonth = 'div.dp__month_year_select[aria-label="Open months overlay"]';
    selectBirthDay = 'div.dp__cell_inner';
    nationalNo = 'div>input[type="number"][placeholder="জাতীয় পরিচয় নম্বর"]';
    openBirthPlace = 'div#birthPlace>div>span>span>span>span#select2--container';
    selectBirthPlace = "span>input.select2-search__field";
    gender = '#guideRegistration > div > div.guide-reg-content > div > div.bd-card-content > div:nth-child(2) > div:nth-child(9) > div > select';
    userPhoto = 'div.upload-user-photo>div>div>div>input[type="file"]#uploadBtn';
    permanentPostcode = 'div.user-guide-address>div>input[type="text"][placeholder="পোষ্ট কোড"]';
    selectPermanentDivision = 'div.user-guide-address>div>select';
    clickPermanentDistrict = 'div#permanentDistrict>div>span>span>span>span#select2--container';
    selectInputSearch = 'span>input[type="search"].select2-search__field';
    clickPermanentThana = 'div#permanentThana>div>span>span>span>span#select2--container';
    permanentAddress = 'div.user-guide-address>div>input[type="text"][placeholder="ঠিকানা"]';
    sameAddressToPresent = 'div>input[type="checkbox"]#same_address';
    jobHolder = 'div>input[type="radio"][name="hajj_guide_job_holder"]';
    userRegTerm = 'div>input[type="checkbox"]#user_reg_terms';
    saveDraftBtn = 'div>button[type="submit"]>span';


    clickHajjGuideList(){
        cy.get(this.hajjGuideList).contains('হজ গাইড').click()
    }

    clickHajjGuideNewApplication(){
        cy.get(this.hajjGuideNewApplication).contains('নতুন আবেদন').click()
    }
    
    setHajjGuideYesExperience(){
        cy.get(this.hajjGuideExperienceYes).click({force: true})
    }

    setHajjGuideNoExperience(){
        cy.get(this.hajjGuideExperienceNo).click({force: true})
    }

    setGuideExperienceTrackingNo(trackingNo){
        cy.get(this.guideExperienceTrackingNo).type(trackingNo)
    }

    clickGuideExperienceNext(){
        cy.get(this.guideExperienceNext).contains('Next').click()
    }

    setBirthDate(year, month, day){
        cy.get(this.selectBirthDate).click()
        cy.get(this.openBirthYear).click()
        cy.get(this.selectBirthYearOrMonth).contains(year).click()
        cy.get(this.openBirthMonth).click()
        cy.get(this.selectBirthYearOrMonth).contains(month).click()
        cy.get(this.selectBirthDay).contains(day).click()
    }

    setNationalNo(nid){
        cy.get(this.nationalNo).type(nid)
    }

    setBirthPlace(bPlace){
        cy.get(this.openBirthPlace).click()
        cy.get(this.selectBirthPlace).type(bPlace+'{enter}')
    }
    
    setGender(gender){
        cy.get(this.gender).select(gender)
    }
  
    setUserphoto(path){
        cy.get(this.userPhoto).selectFile(path, { action:  'drag-drop'})
    }

    setPermanentPostcode(postcode){
        cy.get(this.permanentPostcode).eq(0).type(postcode)
    }
 
    setPermanentDivision(divisionId){
        cy.get(this.selectPermanentDivision).eq(0).select(divisionId)
    }

    setPermanentDistrict(value){
        cy.get(this.clickPermanentDistrict).click()
        cy.get(this.selectInputSearch).type(value+'{enter}')
    }

    setPermanentThana(value){
        cy.get(this.clickPermanentThana).click()
        cy.get(this.selectInputSearch).type(value+'{enter}')
    }

    setPermanentAddress(value){
        cy.get(this.permanentAddress).eq(0).type(value)
    }
   
    clickSameAddress(){
        cy.get(this.sameAddressToPresent).click()
    }

    setJobHolder(value){
        cy.get(this.jobHolder+'[value="'+value+'"]').click({force: true})
    }
    
    clickUserRegTerm(){
        cy.get(this.userRegTerm).click()
    }

    saveAsDraft(){
        cy.get(this.saveDraftBtn).contains('Save as Draft').click()
    }

}

module.exports = new AddGuide();