class AddGuide{
    hajjGuideList = 'div.hajj-dashboard-container>aside>div>div>a>span.dm-text';
    hajjGuideNewApplication = 'div#newApplicationBtn>div>span.list-btn-text';
    hajjGuideExperienceYes = 'input[type=radio][name=prev_hajj_experience][value="yes"]';
    hajjGuideExperienceNo = 'input[type=radio][name=prev_hajj_experience][value="yes"]';
    guideExperienceTrackingNo = 'input[type=text][placeholder="সর্বশেষ ট্রাকিং নম্বর লিখুন"]';
    guideExperienceNext = 'div.bd-card-footer>div>button>span';
    selectBirthDate = 'div>input.dp__input_reg[placeholder="Select Date"]';
    openBirthYear = 'div.dp__month_year_select[aria-label="Open years overlay"]';
    selectBirthYear = 'div.dp__overlay_year';
    selectBirthMonth = 'div.dp__overlay_month';
    selectBirthDay = 'div.dp__cell_inner';
    nationalNo = 'div>input[type="number"][placeholder="জাতীয় পরিচয় নম্বর"]';

    clickHajjGuideList(){
        cy.get(this.hajjGuideList).contains('হজ গাইড').click()
    }

    clickHajjGuideNewApplication(){
        cy.get(this.hajjGuideNewApplication).contains('নতুন আবেদন').click()
    }
    
    setHajjGuideExperience(){
        cy.get(this.hajjGuideExperienceYes).click({force: true})
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
        cy.get(this.selectBirthYear).contains(year).click()
        cy.get(this.selectBirthMonth).contains(month).click()
        cy.get(this.selectBirthMonth).contains(day).click()
    }

    setNationalNo(nid){
        cy.get().type(4329870922)
    }

}

module.exports = new AddGuide();