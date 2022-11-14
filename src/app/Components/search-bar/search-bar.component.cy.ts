import { createOutputSpy } from 'cypress/angular'
import { SearchBarComponent } from './search-bar.component'

describe('SearchBarComponent', () => {
  it('mounts', () => {
    cy.mount(SearchBarComponent, {})
  })
})

it('clicking + fires a change event to city', () => {
  cy.mount(SearchBarComponent, {
    componentProperties: {
      changeCity: createOutputSpy('cityChange'),
      searchText: 'Helsinki'
    },
  })
  cy.get('button').click()
  cy.get('@cityChange').should('be.calledOnceWith', 'Helsinki')
  cy.get('input')
})

it('typing + enter fires a change event to city', () => {
  cy.mount(SearchBarComponent, {
    componentProperties: {
      changeCity: createOutputSpy('cityChange')
    },
  })
  cy.get('input').type('Helsinki').type('{enter}')
  cy.get('@cityChange').should('be.calledOnceWith', 'Helsinki')
})