import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculatorForm: FormGroup ;
  bsConfig: Partial<BsDatepickerConfig>;
 
  calculatedPremium = 0;

  occupationList: any = ['Cleaner', 'Doctor', 'Author', 'Farmer','Mechanic','Florist']
 


  constructor(private fb: FormBuilder) { 
    this.bsConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: 'DD MMMM YYYY'
    }

    this.calculatorForm = this.fb.group({
      name: ['',Validators.required,Validators.pattern('^[a-zA-Z \-\']+')],
      age: ['',Validators.required],    
      dateOfBirth: ['',Validators.required],
      occupation: ['',Validators.required],
      deathSumInsured: ['',Validators.required]
  

    })
  }

  ngOnInit(): void {
  
  }




   calculatePremium()
   {
     let occupationRatingFactor

     switch (this.calculatorForm.get('occupation')?.value) {
       
         case "Cleaner":
          case "Florist":
              occupationRatingFactor = 1.50;
              break;
          case "Doctor":
              occupationRatingFactor = 1.00;
              break;
          case "Author":
              occupationRatingFactor = 1.25;
              break;
          case "Farmer":
          case "Mechanic":
              occupationRatingFactor = 1.75;
              break;

          default:
              occupationRatingFactor = 0.00;
              break;
     }

     this.calculatedPremium = (this.calculatorForm.get('deathSumInsured')?.value * occupationRatingFactor * this.calculatorForm.get('age')?.value) / 1000 * 12;

   }

reset()
{
  this.calculatorForm.reset();
  this.calculatedPremium = 0;
}


}
