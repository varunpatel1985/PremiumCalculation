import { Directive, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Directive({
  selector: '[appAlphabetOnlyValidation]'
})
export class AlphabetOnlyValidationDirective {
  key:any;
  constructor(private toastr: ToastrService) { }


  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    console.log(this.key);
    if ((this.key >= 15 && this.key <= 64) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
      event.preventDefault();
      this.toastr.error("Numbers are not allowed !!");
    }
  }

}
