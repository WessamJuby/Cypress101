/// <reference types="Cypress" />

it('Task2',()=>{
    cy.visit('/');
    cy.viewport('samsung-note9');

    cy.xpath(`//A[@href='https://www.lambdatest.com/selenium-playground/input-form-demo']`).click();
    cy.injectAxe();
    cy.checkA11y(null,null,null,true);
    cy.get('#name').type('Wessam Juby')
    cy.get('#inputEmail4').type('wessamjuby1@gmail.com')
    cy.get('#inputPassword4').type('P@ssw0rdTest')
    cy.get('#company').type('Fake Company')
    cy.get('#websitename').type('lambdatest.com')
    cy.get('[name="country"]').select('SY')
    cy.get('#inputCity').type('Damascus')
    cy.get('#inputAddress1').type('TetsAddress1')
    cy.get('#inputAddress2').type('TetsAddress2')
    cy.get('#inputState').type('StateTest1')
    cy.get('#inputZip').type('00000')
    cy.get('#seleniumform').submit();
    cy.intercept('POST','**/collect').as('res')
    cy.wait('@res',{timeout:10000}).its('response.statusCode').should('eq', 204)
    cy.lighthouse({
        performance: 50,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
      });
    cy.contains('Thanks for contacting us, we will get back to you shortly.').should('be.visible')
    
    cy.window().then((win) => {
        win.sessionStorage.clear()
        win.close();
      })

})
it('Task1',()=>{
    /*
    I have tried diffrent ways and diffrent plugins(still imported)
    and many triggers and actions/events and i could't done it but i have tried 
    here is a soulution that would work usually in similar situations
    (there is better faster solutions but i couldnt implement all of them here )
    */
    // cy.visit('/')
    // cy.get('a').contains('Drag & Drop Sliders').click();
    //  cy.get('input').eq(2).invoke('val','95').trigger("change").click({force:true});
    //  cy.get('#rangeSuccess').trigger('change').trigger('reset')
     //.then($el => {
    //     cy.get('#rangeSuccess').invoke('text').then(txtNum => {
    //     let counter = Number(txtNum);
    //     while(counter < 95)
    //     {
    //         cy.wrap($el)
    //         .trigger('mouseover',{ which: 1,force:true })
    //         .trigger('pointerenter',{ which: 1,force:true })
    //         .trigger('mousedown',{ which: 1,force:true })
    //         .trigger('touchstart',0,0)
    //         .trigger('touchmove',counter,0)
    //         .trigger('pointerdown',{ which: 1,force:true })
    //         .trigger('mousemove',counter,0,{ which: 1,force:true })
    //         .trigger('pointermove',counter,0,{ which: 1,force:true })
    //         .trigger('mouseup',{ which: 1,force:true })
    //         .trigger('pointerup',{ which: 1,force:true })
    //         counter++
    //     }
    //     })
        //cy.get('#rangeSuccess').should('eq','95')
   // })
})

