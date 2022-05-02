import { AbstractControl } from "@angular/forms";

export function addressValidator(control: AbstractControl) {
    const isValid = control.value instanceof Object;
    return isValid ? null : { isNotAddressObject: true };
}
