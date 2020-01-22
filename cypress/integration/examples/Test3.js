describe ('Web UI Contros', function(){


// it('Checkboxes', function(){

//     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//     cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value','option1')
//     cy.get('input#checkBoxOption1').uncheck().should('not.be.checked')
//     cy.get('input[type="checkbox"]').check(['option1','option3'])

//     cy.get('[type="checkbox"]').check()

// })


// it('Static DropDowns', function(){

//     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//     cy.get('select').select('option1').should('have.value','option1')

// })



// it('Dynamic DropDowns', function(){

//     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//     cy.get('input#autocomplete').type('India')
//     cy.get('#ui-id-1 li').each(($el, index, $list) => {

//         if($el.text()=='India')
//         {
//             $el.click()
//         }
//     })
   

// })


// it('Visiblity Of Textbox', function(){

//     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//     cy.get('input#autocomplete').type('India')
//     cy.get('input#displayed-text').should('be.visible')
//     cy.get('input#hide-textbox').click()
//     cy.get('input#displayed-text').should('not.be.visible')

   

// })


// it('AlertBoxes', function(){

//     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//     cy.get('input#alertbtn').click()
//     cy.get('input#confirmbtn').click()
// // In Cypress the alrets are automatically accepted and closed , in case if you want to  verify the alert text 
// // Window Alert , Cypress has the capablity of firing the event for a browser, So we use window Alert to fire it explicitly and verify the text , Window alert will return a string

// cy.on('window:alert',(str)=>{
// expect(str).to.equal('Hello , share this practice page and share your knowledge')
// })

// cy.on('window:confirm',(str)=>{
//     expect(str).to.equal('Hello , Are you sure you want to confirm?')
//     })
// //Since cypress does not suppor child tab/opening new tab, Hence we have work-around by removing the html attribute resposnible for opening new tab , it is done by using jquery  removeAttr
//     cy.get('#opentab').invoke('removeAttr','target')

// })

// For Navigating in the browser
it('forward and backward pages', function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').invoke('removeAttr','target')
    cy.go('back')

})


})