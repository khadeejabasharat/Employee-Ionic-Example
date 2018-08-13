import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmployeePage }  from '../employee/employee';
import { EmpServiceProvider } from '../../providers/emp-service/emp-service';
import { Emp } from '../../emp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  emps:Emp[]=[];

  constructor(public navCtrl: NavController,
  private empService:EmpServiceProvider) {
  }
  ionViewWillEnter()
  {
      this.emps=this.empService.getAllEmployees();
  }
  onAddClick():void{
    this.empService.checkEdit=false;
    this.navCtrl.push(EmployeePage);
  }
  onEdit(tempEmp:Emp):void{
    this.empService.checkEdit=true;
    this.empService.currentEmp=tempEmp;;
    this.navCtrl.push(EmployeePage);
  }
  onDelete(tempEmp:Emp):void{
    this.empService.deleteEmployee(tempEmp);
    this.emps=this.empService.getAllEmployees();
  }


}
