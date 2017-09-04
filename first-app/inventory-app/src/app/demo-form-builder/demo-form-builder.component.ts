import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
@Component({
  selector: 'app-demo-form-builder',
  templateUrl: './demo-form-builder.component.html',
  styleUrls: ['./demo-form-builder.component.css']
})
export class DemoFormBuilderComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['1234', Validators.compose([Validators.required, skuValidator])],
      produceName: ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe((value: string) => {
      console.log(value);
    });
    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form is changed', form);
    });
  }

  onSubmit(value: any) {
    console.log(value);
  }

  ngOnInit() {
  }

}

function skuValidator(f: FormControl): { [s: string]: boolean } {
  if (!f.value.match(/^123/)) {
    return { 'invalidSku': true };
  }

}

