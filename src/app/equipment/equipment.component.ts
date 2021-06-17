import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ['Habitat Dome', 'Drones', 'Food Containers', 'Oxygen Tanks']

  constructor() { }

  ngOnInit() {
  }
  addEquipment(item: string):void{
    this.equipment.push(item);
  }
  removeEquipment(item: string): void {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

}
