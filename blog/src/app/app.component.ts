import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name="Bunny";
  employeeName="Ajay";
  currentVal="";
  disabledValue=true;
  show="no";
  color="green";
  weekName="sunday";
  showData: any;
  showData1: any;
  showData2: any;
  showData3: boolean;
  getName(){
    return "Ajay";
  }
  obj={
    "name":"Akhil",
    "Age":20
  }
  array=["Hyd","Vij","Pune"];
  siteUrl=window.location.href;
  getEmployee(name){
    alert(name);
  }
  myEvent(evt){
    console.warn(evt);

  }
  getVal(val){
console.warn(val);
this.currentVal=val;
  }
  enableBox(){
this.disabledValue=false;

  }
  getEvents(){
this.showData=true;
this.showData1=false;
this.showData2=false;
this.showData3=false;

  }
  getProperty(){
    this.showData1=true;
    this.showData=false;
    this.showData2=false;
    this.showData3=false;

  }
  getConditions(){
    this.showData2=true;
    this.showData=false;
    this.showData1=false;
    this.showData3=false;

  }
  getSwitchStmts(){
    this.showData3=true;
    this.showData2=false;
    this.showData=false;
    this.showData1=false;
  }

}
