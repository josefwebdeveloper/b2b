import { FormGroup } from '@angular/forms';

export type FormGroupTyped<T> = FormGroup & { value: T, rawValue: T };
