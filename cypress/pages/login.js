class Login{

    headerLogin = 'header>nav>div>div>ul>li>a';
    headerSocialGuideLogin = 'div#kc-social-providers ul>a';
    mobileNoLogin = 'div#login_form_body div.login-panel-body div>input[type=text][name=mobile_no]';
    passwordLogin = 'div#login_form_body div.login-panel-body div>input[type=password][name=password]';
    signIn = 'div#login_form_body div.login-panel-body div>button#next_btn';

    clickHeaderLogin(){
        cy.get(this.headerLogin).contains('লগইন').click()
    }

    clickHeaderSocialGuideLogin(){
        cy.get(this.headerSocialGuideLogin).contains('হজযাত্রী/ গাইড লগইন').click();
    }

    setMobileNo(mobileNo){
        cy.get(this.mobileNoLogin).type(mobileNo)
    }

    setPassword(password){
        cy.get(this.passwordLogin).type(password)
    }

    clickSignIn(){
        cy.get(this.signIn).contains('Sign in').click();
    }
   
}

module.exports = new Login();