import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpServiceProvider } from '../../providers/emp-service/emp-service'
import { Emp } from '../../emp'
@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {
 checkEdit=false;
  emp:Emp={id:1,name:"Khadeeja"};
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  private empService: EmpServiceProvider) {
  }

  ngOnInit(){
    this.checkEdit=this.empService.checkEdit;
    if (this.checkEdit)
    {
      this.emp=this.empService.currentEmp;      
    }
  }

  addEmp( data:any ):void{
   this.emp.id = parseInt(data.id);
   this.emp.name = data.name;
   this.empService.addEmployee(this.emp);
   this.navCtrl.pop();
  }
  editEmp( data:any ):void{
    this.emp.id = parseInt(data.id);
    this.emp.name = data.name;
    this.empService.addEmployee(this.emp);
    this.navCtrl.pop();
   }

}
