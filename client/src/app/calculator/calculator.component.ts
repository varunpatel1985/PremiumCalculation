import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';

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
 


  constructor(private fb: FormBuilder,private toastr: ToastrService) { 
    this.bsConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: 'DD MMMM YYYY'
    }

    this.calculatorForm = this.fb.group({
      name: ['',Validators.required],
      age: [null,Validators.required],    
      dateOfBirth: ['',Validators.required],
      occupation: ['',Validators.required],
      deathSumInsured: ['',Validators.required]
  

    })
  }

  ngOnInit(): void {
    
  }


  getAge(event:any)
  {
    let selectedDate  = new Date(this.calculatorForm.get('dateOfBirth')?.value);
    let selectedYear = selectedDate.getUTCFullYear();
    let currentDate = new Date();
    let currentYear = currentDate.getUTCFullYear();
    
    
    let age = currentYear - selectedYear;
    if(age >0)
    {
      this.calculatorForm.controls['age'].setValue(age);
    }    
    else
    {
      this.toastr.error("Please select greater than  1 year")
    }
    
  }

   calculatePremium(occupation?: string, insuredsum?: number, age?: number)
   {
     let occupationRatingFactor
     occupation = this.calculatorForm.get('occupation')?.value =="" ?occupation : this.calculatorForm.get('occupation')?.value;
     insuredsum =this.calculatorForm.get('deathSumInsured')?.value  == 0 ? insuredsum : this.calculatorForm.get('deathSumInsured')?.value;
     age= this.calculatorForm.get('age')?.value == null ? age : this.calculatorForm.get('age')?.value ;

     switch (occupation) {
       
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

     if(insuredsum != undefined && age != undefined)
     this.calculatedPremium = ( insuredsum * occupationRatingFactor * age) / 1000 * 12;
     this.toastr.success("Premium calculated successfully!!");
   }

reset()
{
  this.calculatorForm.reset();
  this.calculatedPremium = 0;
  this.calculatorForm.controls['age'].setValue(null);
  this.toastr.success("Form resets complete !!");
}


}
