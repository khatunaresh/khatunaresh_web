import { Component } from '@angular/core';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  popup:boolean=false;
  mobile:any = "+91 9726340381";
  email:any= "ppack2go@gmail.com"
  website:any = "www.pack2gopackersmovers.com"
  togglePopUp(){
    if(this.popup){
      this.popup=false;
    }
    else{
      this.popup=true;
    }
  }

  delhiContacts: any = [
    {
      location: "Shalimar Bagh",
      address: "Shop no 102, Block BH, Ram Bagh, Shalimar Bagh, New Delhi, Delhi 110088"
    },
    {
      location: "Ashok Vihar",
      address: "85/2, Vir Nagar Jain Colony, Block C, Rana Pratap Bagh, Ashok Vihar, New Delhi, Delhi 110007"
    }
  ]

  gurugramContacts: any = [
    {
      location: "Gandhi Colony",
      address: "65, Feroz Gandhi Colony, Sector 9, Gurugram, Haryana 122001"
    },
    {
      location: "Rajiv Nagar",
      address: "H no 5, near Shiv Mandir Chowk, Rajiv Nagar, Sector 13, Gurugram, Haryana 122001"
    }
  ]
  noidaContacts: any = [
    {
      location: "Malviya Nagar",
      address: "7, Pratapgarh-Burja Tiraha Rd, Mayur Vihar, Malviya Nagar, Noida, Uttar Pradesh 201310"
    },
    {
      location: "Noida Sec-147",
      address: "FF36+HJ2, Sector 154, Noida, Uttar Pradesh 201310"
    }
  ]
}
