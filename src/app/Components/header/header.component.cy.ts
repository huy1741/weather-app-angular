import { HeaderComponent } from "./header.component"
import { createOutputSpy } from 'cypress/angular'

describe('HeaderComponent', () => {
  it('mounts', () => {
    cy.mount(HeaderComponent, {})
  })
})

it('clicking + fires a change event to unit', () => {
  cy.mount(HeaderComponent, {
    componentProperties: {
      changeUnit: createOutputSpy('changeSpy'),
    },
  })
  cy.get('button').click()
  cy.get('@changeSpy').should('have.callCount', 1)
})