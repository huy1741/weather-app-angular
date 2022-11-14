import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Coords } from 'src/app/services/service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() handleChangeCoords: EventEmitter<Coords> = new EventEmitter();
  @Output() resetArray: EventEmitter<any> = new EventEmitter();
  @Input() arrayOfCities: any[];

  constructor() { }

  ngOnInit(): void {
    this.arrayOfCities = []
  }

  handleChangeCity(data): void{
    this.handleChangeCoords.emit({lat: data['coord']['lat'], long: data['coord']['lon']})
    this.resetArray.emit()
  }

}
