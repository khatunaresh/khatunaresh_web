import { Component ,ElementRef,HostListener, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern('([a-z0-9_\._]+)@([a-z0-9])+.([a-z]+)(.[a-z]+)')]),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    message: new FormControl('',[])
  });

  isSticky: boolean = false; // Variable to determine if second navbar is sticky

  constructor() {}

  toggleSpeechBubble(event: MouseEvent) {
    // Prevent default behavior of the button when Bootstrap modal attributes are present
    const target = event.target as HTMLElement;
    if (target.getAttribute('data-bs-toggle') === 'modal') {
        event.preventDefault();
    }

    // Your existing code for toggling the speech bubble
    var speechBubble = document.getElementById("speechBubble");
    if (speechBubble) {
        speechBubble.style.display = (speechBubble.style.display === "none") ? "block" : "none";
    }
}



  ngOnInit(): void {
    // let element: HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
    // setTimeout(() => element.click(), 5000);
  }

  scroll(id: any) {
    let element = document.getElementById(id);
    if(element)
      element.scrollIntoView({ behavior: "smooth" });
  }

  onSubmit(e: Event){
    if(this.contactForm.valid){
      emailjs.init("WcOVGz57SpQ7G7NIF");
      emailjs.send("service_lawp46j","template_nq7by3e", {
        to_name: "Khatu Naresh Packers and Movers",
        from_name: this.contactForm.value.email,
        message: `
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

  // Host listener to handle scrolling and determine if second navbar should be sticky
  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event) {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 100) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
