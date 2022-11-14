import { WeatherWidgetMainComponent } from './weather-widget-main.component'

describe('WeatherWidgetMainComponent', () => {
  it('mounts', () => {
    cy.mount(WeatherWidgetMainComponent, {})
  })
})

it('gets data and shows weather info', () => {
  cy.mount(WeatherWidgetMainComponent, {
    componentProperties: {
      currentCoords: {lat: '60', long: '16'},
      currentUnitSystem: 'metric'
    },
  })
  cy.get('[data-cy=name]').should('contain.text', 'Norberg')
  cy.get('[data-cy=tempMaxMin]').should('contain.text', '°C')
  cy.get('[data-cy=feels]').should('contain.text', '°C')
  cy.get('[data-cy=error]').should('not.exist')
  cy.get('.loaderContainer').should('not.exist')
})

it('doesnt get data and not showing weather info', () => {
  cy.mount(WeatherWidgetMainComponent, {
    componentProperties: {
      currentCity: 'not a real one',
      currentUnitSystem: 'metric'
    },
  })
  cy.get('[data-cy=name]').should('contain.text', '')
  cy.get('[data-cy=tempMaxMin]').should('not.contain.text', 'C')
  cy.get('[data-cy=feels]').should('not.contain.text', 'C')
  cy.get('[data-cy=error]').should('exist')
  cy.get('.loaderContainer').should('exist')
})