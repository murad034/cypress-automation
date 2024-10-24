describe('template spec', () => {
  it('passes', () => {
    //cy.visit('http://localhost:8000/')
    cy.visit('https://uat-ehaj.oss.net.bd/')
    // cy.wait(5000)
    cy.get('header>nav>div>div>ul>li>a').contains('লগইন').click()
    // cy.wait(5000)
    cy.get('div#kc-social-providers ul>a').contains('হজযাত্রী/ গাইড লগইন').click();
    // cy.get(5000)
    cy.get('div#login_form_body div.login-panel-body div>input[type=text][name=mobile_no]').type('01609149406')
    // cy.wait(5000)
    cy.get('div#login_form_body div.login-panel-body div>input[type=password][name=password]').type('640087@m')
    // cy.wait(5000)
    cy.get('div#login_form_body div.login-panel-body div>button#next_btn').contains('Sign in').click();
    // cy.wait(5000)
    cy.url().should('include', '/my-desk')
    // cy.wait(5000)
    //cy.visit('https://uat-ehaj.oss.net.bd/guides/index#/guide-application-list')
    cy.get('div.hajj-dashboard-container>aside>div>div>a>span.dm-text').contains('হজ গাইড').click()
    // cy.wait(5000)
    cy.get('div#newApplicationBtn>div>span.list-btn-text').contains('নতুন আবেদন').click()
    //cy.wait(5000)
    cy.get('input[type=radio][name=prev_hajj_experience][value="yes"]').click({force: true})
    //cy.wait(5000)
    cy.get('input[type=text][placeholder="সর্বশেষ ট্রাকিং নম্বর লিখুন"]').type('H175DD3B2B')
    //cy.wait(5000)
    cy.get('div.bd-card-footer>div>button>span').contains('Next').click()
    cy.wait(5000)
    cy.get('div#birthPlace>div>span>span>span>span#select2--container').click()
    cy.get('span>input.select2-search__field').type('দিনাজপুর{enter}')
    cy.get('select.hajj-select2[data-v-0dc85e4d]').select('female')

  })
})