/// <reference types="Cypress" />

describe ('My first Test Suite', function()
{
 it ('My First Test case', function(){

cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
cy.get('input.search-keyword').type('ca')
cy.get('div.product:visible').should('have.length',4)
cy.get('.products').find('.product').should('have.length',4)
cy.get('.products').find('.product').as("VegProdcut")  // Created a alias 
cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click().then(function(){   
    console.log("Printing inside the then function")  // As this java Script function not a cypress function we need handle the promise by ourself by adding then and then print inside
})
cy.get('@VegProdcut').eq(1).contains('ADD TO CART').click() // Using the alias here

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

})



})