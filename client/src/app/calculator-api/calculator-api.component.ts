import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
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



  constructor(private fb: FormBuilder, private calculatorService: PremiumCalService) {
    this.bsConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: 'DD MMMM YYYY'
    }

    this.calculatorForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      occupation: ['', Validators.required],
      deathSumInsured: ['', Validators.required]


    })
  }

  ngOnInit(): void {
  }

  calculatePremiumFromApi() {
    this.calculatorService.getPremiumCal(this.calculatorForm.get('occupation')?.value, this.calculatorForm.get('deathSumInsured')?.value, this.calculatorForm.get('age')?.value).subscribe(response => {
      console.log("response", response);
      this.calculatedPremium = response;
    })

  }

  reset() {
    this.calculatorForm.reset();
    this.calculatedPremium = 0;
  }


}
