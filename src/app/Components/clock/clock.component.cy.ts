import { ClockComponent } from "./clock.component"
const now = new Date()
const withPmAm = now.toLocaleTimeString('en-US', {
  // en-US can be set to 'default' to use user's browser settings
  hour: '2-digit',
  minute: '2-digit',
}); 
describe('ClockComponent', () => {
  it('mounts', () => {
    cy.mount(ClockComponent, {})
    cy.get('div').should('contain.text', withPmAm)
  })
})