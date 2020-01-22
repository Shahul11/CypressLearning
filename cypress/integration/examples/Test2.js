/// <reference types="Cypress" />

describe ('My first Second Suite', function()
{
 it ('My Second Test case', function(){

cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
cy.get('input.search-keyword').type('ca')
// cy.get('.products').find('.product').as("VegProdcut")  // Created a alias 
// cy.get('@VegProdcut').eq(1).contains('ADD TO CART').click() // Using the alias here

cy.get('.products').find('.product') .each(($eachElement,  Icangiveanyindecx, $IcantotalElements) => {

    const vegetableName=$eachElement.find('h4.product-name').text()
    if(vegetableName.includes('Cashews'))
    {
        $eachElement.find('button').click()
    }
  
})

cy.get('.brand').should('have.text','GREENKART')

cy.get('.brand').then(function(logoElement)
{
    cy.log(logoElement.text())

})

cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()


})


})