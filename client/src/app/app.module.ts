import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CalculatorApiComponent } from './calculator-api/calculator-api.component';
import { PremiumCalService } from './_services/premium-cal.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlphabetOnlyValidationDirective } from './_directives/alphabet-only-validation.directive';
import { NumberOnlyValidatorDirective } from './_directives/number-only-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CalculatorComponent,
    CalculatorApiComponent,
    AlphabetOnlyValidationDirective,
    NumberOnlyValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    AccordionModule.forRoot() ,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
