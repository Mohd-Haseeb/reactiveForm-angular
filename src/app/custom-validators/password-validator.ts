import {FormGroup} from "@angular/forms";


// export class PasswordValidator extends FormGroup(){} -> This is a class method


// functional method
export function PasswordValidator(controlName:string,compareControlName:string) {
    return (formGroup:FormGroup) => {
        const password = formGroup.controls[controlName];
        const confirmPassword = formGroup.controls[compareControlName];

        if(password.value !== confirmPassword.value){
            confirmPassword.setErrors({mustMatch : true});
        }else{
            confirmPassword.setErrors(null);
        }

    }
}