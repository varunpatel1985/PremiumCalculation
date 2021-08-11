import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { ToastrService } from 'ngx-toastr';
import { PremiumCalService } from '../_services/premium-cal.service';

@Component({
  selector: 'app-calculator-api',
  templateUrl: './calculator-api.component.html',
  styleUrls: ['./calculator-api.component.css']
})
export class CalculatorApiComponent implements OnInit {

  calculatorForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  calculatedPremium = 0;

  occupationList: any = ['Cleaner', 'Doctor', 'Author', 'Farmer', 'Mechanic', 'Florist']



  constructor(private fb: FormBuilder, private calculatorService: PremiumCalService, private toastr: ToastrService) {
    this.bsConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: 'DD MMMM YYYY'
    }

    this.calculatorForm = this.fb.group({
      name: ['', Validators.required],
      age: [null, Validators.required],
      dateOfBirth: ['', Validators.required],
      occupation: ['', Validators.required],
      deathSumInsured: ['', Validators.required]


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

  calculatePremiumFromApi() {
    this.calculatorService.getPremiumCal(this.calculatorForm.get('occupation')?.value, this.calculatorForm.get('deathSumInsured')?.value, this.calculatorForm.get('age')?.value).subscribe(response => {
      console.log("response", response);
      this.calculatedPremium = response;
    },(error)=>{console.log(error)},()=>{this.toastr.success("Premium calculated successfully!!");})

  }

  reset() {
    this.calculatorForm.reset();
    this.calculatedPremium = 0;
    this.toastr.success("Form resets complete !!");
  }


}
