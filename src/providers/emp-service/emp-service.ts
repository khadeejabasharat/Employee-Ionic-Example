import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from '../../emp'
@Injectable()
export class EmpServiceProvider {

  checkEdit:boolean
  emps:Emp[]=[ { id:1, name: 'Mr. Nice' }];
  currentEmp:Emp;
  constructor() {
  }
  addEmployee (tempEmp:Emp):void{
    this.emps.push(tempEmp);
  }
  getAllEmployees():Emp[]{
    return this.emps.slice();
  }
  deleteEmployee (tempEmp: Emp): void {
    this.emps = this.emps.filter(h => h !== tempEmp);
  }

}
