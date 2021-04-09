import { FormControl } from "@angular/forms";

export function EmailValidator(control: FormControl) {
    let email = control.value;
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (email != "" && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
        return {
            validateEmail: {
                valid: false
            }
        }
    }

}
