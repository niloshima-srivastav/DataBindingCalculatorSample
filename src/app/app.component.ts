import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'DataBinding Calculator Demo';
  FirstValue :number  ;
  Operator ='';
  SecondValue :number ;
  Result : number ;

  OnClick(value){
    if(value === 'Add')
    {
      this.Result = +this.FirstValue + +this.SecondValue ;
      this.Operator = '+'
    }
    else if (value === 'Subtract')
    {
      this.Result = this.FirstValue - this.SecondValue;
      this.Operator = '-';


    }
    else if (value === 'Multiply')
    {
      this.Result = this.FirstValue * this.SecondValue;
      this.Operator = '*';

    }
    else if (value === 'Divide')
    {
      this.Result = this.FirstValue / this.SecondValue;
      this.Operator = '/';
    }    
  }

  Clear()
  {
    this.FirstValue = '';
    this.SecondValue = '';
    this.Result = '';
    this.Operator = '';
  }
}
