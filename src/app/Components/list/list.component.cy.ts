// import { ListComponent } from "./list.component"
// import { createOutputSpy } from 'cypress/angular'
// const itemList = [{id: 2643743, name: "London", coord: {lat: 51.5085, lon: -0.1257}},
// {id: 6058560, name: "London", coord: {lat: 42.9834, lon: -81.233}, sys: {country: "GB"}},
// {id: 4517009, name: "London", coord: {lat: 39.8865, lon: -83.4483}, sys: {country: "GB"}},
// {id: 4298960, name: "London", coord: {lat: 37.129, lon: -84.0833}, sys: {country: "GB"}}
// ]
// describe('ListComponent', () => {
//   it('does not render if the array is empty', () => {
//     cy.mount(ListComponent, {
//       componentProperties: {
//         arrayOfCities: itemList,
//       },
//     })
//     cy.get('.wrapper', { timeout: 10000 }).should('be.visible')
//   }),
//   it('clicking + fires a change event to unit', () => {
//     cy.mount(ListComponent, {
//       componentProperties: {
//         resetArray: createOutputSpy('changeArray'),
//         handleChangeCoords: createOutputSpy('changeCoords'),
//       },
//     })
//     cy.get('button').click()
//     cy.get('@changeArray').should('have.callCount', 1)
//     cy.get('@changeCoords').should('have.callCount', 1)
//     cy.get('ul', { timeout: 10000 }).should('have.length', 4)
//     cy.get('p').should('have.text', 'There are 4 results with the same name. Please choose the closest coords.')
//   })
// })

//I keep running in error even though the syntax looks alright. Correct me around this part.
