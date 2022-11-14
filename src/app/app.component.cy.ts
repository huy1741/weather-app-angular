import { AppComponent } from './app.component'
import { AppModule } from './app.module'
import { ClockComponent } from './Components/clock/clock.component'
import { HeaderComponent } from './Components/header/header.component'
import { ListComponent } from './Components/list/list.component'
import { SearchBarComponent } from './Components/search-bar/search-bar.component'
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component'
import { AppService } from './services/app.service'
import { LocalStorageService } from './services/localstorage.service'

describe('AppComponent', () => {
  it('mounts', () => {
    cy.mount(AppComponent, {
      providers:[AppService, LocalStorageService],
      imports: [AppModule],
      declarations: [WeatherWidgetMainComponent, ClockComponent, HeaderComponent, SearchBarComponent, ListComponent]
    })
  })
})