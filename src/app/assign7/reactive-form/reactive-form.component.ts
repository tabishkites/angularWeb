import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.css'],
})
export class ReactiveFormComponent implements OnInit {
  checkoutForm: FormGroup;
  personCout: Number;
  persons: any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private service: UserService
  ) {
    // this.checkoutForm = formBuilder.group({
    //   fname : new FormControl(),
    //   lname : new FormControl(),
    //   gender : new FormControl(),
    //   terms : new FormControl()
    // })
    this.checkoutForm = formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
      address: formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    this.getPersonsData();
    this.checkoutForm.controls.firstname.valueChanges.subscribe((data) => {
      // console.log(data);
    });
  }
  getPersonsData() {
    this.service.getPersonsData().subscribe((res) => {
      this.persons = res;
      this.personCout = this.persons.length;
    });
  }
  postData() {
    console.log(this.checkoutForm.value);
    var dataResult = {
      firstname: this.checkoutForm.value.firstname,
      lastname: this.checkoutForm.value.lastname,
      gender: this.checkoutForm.value.gender,
      street: this.checkoutForm.value.address.street,
      city: this.checkoutForm.value.address.city,
      state: this.checkoutForm.value.address.state,
    };
    this.http
      .post('http://localhost:9010/person/createperson', dataResult)
      .subscribe((res) => {
        this.getPersonsData();
        this.resetForms();
      });
  }
  get dataControls() {
    return this.checkoutForm.controls;
  }
  resetForms() {
    this.checkoutForm.reset();
  }
  updateData(person: any) {
    this.checkoutForm.setValue({
      firstname: person.firstName,
      lastname: person.lastName,
      gender: person.gender,
      terms: true,
      address: {
        street: person.street,
        city: person.city,
        state: person.state,
      },
    });
  }
}
