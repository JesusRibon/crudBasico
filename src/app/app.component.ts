import { Component } from '@angular/core';
import { Employee } from './models/employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [];

  selectedEmployee: Employee = new Employee();

  

  addOredit(){

    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);

    }

    
    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }

  delete(){
    if(confirm('Estas seguro de elimarlo ')){
      this.employeeArray = this.employeeArray.filter(x => x!= this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }



  
}
