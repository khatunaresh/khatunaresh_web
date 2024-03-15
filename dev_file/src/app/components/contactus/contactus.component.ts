import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: '[app-contactus]',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {

  contactForm = new FormGroup({
    fullname: new FormControl('',[Validators.required]),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.pattern('([a-z0-9_\._]+)@([a-z0-9])+.([a-z]+)(.[a-z]+)')]),
    message: new FormControl('',[]),
  });

  constructor() {}

  onSubmit(e: Event){
    if(this.contactForm.valid){
      emailjs.init("WcOVGz57SpQ7G7NIF");
      emailjs.send("service_lawp46j","template_nq7by3e", {
        to_name: "Khatu Naresh Packers and Movers",
        from_name: this.contactForm.value.email,
        message: `
          Fullname: ${this.contactForm.value.fullname}
          Email: ${this.contactForm.value.email}
          Mobile: ${this.contactForm.value.mobile}
          Message: ${this.contactForm.value.message}`
      }).then((result: EmailJSResponseStatus) => {
          alert("Your query has been send successfully")
        }, (error) => {
          alert("There is some error from backend")
        });
    }
  }
}
