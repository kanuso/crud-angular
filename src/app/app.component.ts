import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Crud';

  employees =[
    { 'name' : 'Ramiro', Position: 'Manager'},
    { 'name' : 'Juan', Position: 'Designer'},
    { 'name' : 'Pedro', Position: 'Programmer'},
  ];
  model:any = {};
  addEmployee(): void {

  }
  editEmployee(): void {

  }
  deleteEmployee(): void {

  }
  updateEmployee(): void {

  }
}
