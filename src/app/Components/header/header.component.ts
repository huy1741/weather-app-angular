import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { appConfig, apiConfig } from '../../config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() currentUnitSystem: string;
  @Output() changeUnit: EventEmitter<string> = new EventEmitter();

  isUnitSwitcherChecked = false;

  ngOnInit() {
    this.isUnitSwitcherChecked = this.currentUnitSystem === appConfig.defaultUnit;
  }

  onChangeUnitSwitcher() {
    const unitSystems = apiConfig.measurementUnits;
    const unitIndex = this.isUnitSwitcherChecked ? 1 : 0;
    console.log(unitSystems[unitIndex])
    this.changeUnit.emit(unitSystems[unitIndex]);
  }
}
