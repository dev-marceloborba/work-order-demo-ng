import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-group">
      <label
        [htmlFor]="name"
        class="block text-gray-700 text-sm font-bold mb-2"
        >{{ label }}</label
      >
      <input
        [name]="name"
        [type]="type"
        [(ngModel)]="value"
        (ngModelChange)="handleChange($event)"
        (focus)="handleFocus()"
        (blur)="handleBlur()"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      />
      <p *ngIf="error.length > 0" class="text-red-500 text-xs italic">
        {{ error }}
      </p>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input()
  label = '';

  @Input()
  name = '';

  @Input()
  error = '';

  @Input()
  type = 'text';

  value = '';
  isFocused = false;
  private onTouched!: Function;
  private onChanged!: Function;

  handleChange(value: any) {
    this.onChanged(value);
    this.onTouched();
  }

  handleFocus(): void {
    this.isFocused = true;
  }

  handleBlur(): void {
    this.isFocused = false;
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
}
