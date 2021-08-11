import { TestBed } from "@angular/core/testing"
import { PremiumCalService } from "../_services/premium-cal.service";
import { CalculatorApiComponent } from "./calculator-api.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";




describe('Calculator API Component', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          ToastrModule.forRoot({
            positionClass:'toast-bottom-right'
          })
        ],
        declarations: [
            CalculatorApiComponent
        ],
      }).compileComponents();
    });

  

    it('api should calculate premium',(done)=>{
        const fixture = TestBed.createComponent(CalculatorApiComponent);
        let app = fixture.debugElement.componentInstance;
        let calculatorService = fixture.debugElement.injector.get(PremiumCalService)
        fixture.detectChanges();
        let apiResult:number;
        calculatorService.getPremiumCal("Doctor",100000,50).subscribe(response=> {
            apiResult=response;
            console.log("test api response",apiResult);
        },(error)=> {console.log(error)},()=>{
            expect(apiResult).toEqual(60000);
            done();
        });
       
    })
})