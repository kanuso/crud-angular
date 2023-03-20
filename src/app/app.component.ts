import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ESCUELA001';

  employees =[
    { 'name' : 'Ramiro', Position: 'Manager'},
    { 'name' : 'Juan', Position: 'Designer'},
    { 'name' : 'Pedro', Position: 'Programmer'},
  ];
  model:any = {};
  addEmployee(): void {
    this.employees.push(this.model);
  }
  editEmployee(): void {

  }
  deleteEmployee(): void {

  }
  updateEmployee(): void {

  }
}
