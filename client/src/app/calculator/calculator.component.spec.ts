import { TestBed } from "@angular/core/testing"
import { CalculatorComponent } from "./calculator.component"
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from "ngx-toastr";



describe('Calculator Component', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          ReactiveFormsModule,
          ToastrModule.forRoot({
            positionClass:'toast-bottom-right'
          })
        ],
        declarations: [
            CalculatorComponent
        ],
      }).compileComponents();
    });

    it('Client should calculate premium',()=>{
        const fixture = TestBed.createComponent(CalculatorComponent);
        let app = fixture.debugElement.componentInstance;
       let clientResult =  app.calculatePremium("Florist",100000,50);
       fixture.detectChanges();
       let calMontlyPremium = app.calculatedPremium;
        expect(calMontlyPremium).toEqual(90000);
       
    })

    
})