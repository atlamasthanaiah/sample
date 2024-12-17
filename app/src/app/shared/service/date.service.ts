import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class DateService extends NativeDateAdapter {

  // Override format method to display date in dd-MM-yyyy format
  override format(date: Date, displayFormat: Object): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // Parse user input in dd-MM-yyyy format
  override parse(value: string): Date | null {
    if (!value) return null;
    const parts = value.split('-');
    const day = +parts[0];
    const month = +parts[1] - 1; // Months are zero-indexed
    const year = +parts[2];
    return new Date(year, month, day);
  }
}
