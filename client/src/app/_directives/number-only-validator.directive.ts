import { Directive, ElementRef, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Directive({
  selector: '[appNumberOnlyValidator]'
})
export class NumberOnlyValidatorDirective {

  constructor(private _el: ElementRef,private toastr: ToastrService) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
      this.toastr.error("Alphabets not allowed !!");
    }
  }

}
