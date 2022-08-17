import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [ReactiveFormComponent],
})
export class Assign7Module {}
