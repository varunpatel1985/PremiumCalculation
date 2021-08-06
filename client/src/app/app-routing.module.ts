import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorApiComponent } from './calculator-api/calculator-api.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path:'', component:CalculatorComponent},
  {path:'calculatorApi', component:CalculatorApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
