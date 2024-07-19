import { ValidatorFn, FormGroup } from '@angular/forms';

export function dateLessThan(firstDateField: string, secondDateField: string): ValidatorFn {
  return (form: FormGroup): { [key: string]: boolean } | null => {
    const firstDateValue = form.get(firstDateField).value;
    const secondDateValue = form.get(secondDateField).value;

    if (!firstDateValue || !secondDateValue) {
      return { missing: true };
    }

    const firstDate = new Date(firstDateValue);
    const secondDate = new Date(secondDateValue);

    if (firstDate.getTime() >= secondDate.getTime()) {
      const err = { dateLessThan: true };
      form.get(firstDateField).setErrors(err);
      return err;
    } else {
      // Clear error if previously set
      const dateLessError = form.get(firstDateField).hasError('dateLessThan');
      if (dateLessError) {
        form.get(firstDateField).setErrors(null);
      }
    }

    return null; // Return null if validation passes
  };
}
