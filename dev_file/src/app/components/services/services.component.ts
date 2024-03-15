import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: '[app-services]',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  torun(index: any){
    let more: any = document.querySelectorAll('.more');
    more[index].parentNode.classList.toggle('active');
  }
  servicesContent:any = [
    {
      img:"../../../assets/courier_Services.jpg",
      title:'Courier Services',
      content:`Khatu Naresh Packers and Movers is the Best & trusted Courier Services in UP, Noida operating its Headquarters. Offers Affordable Parcel Delivery at your doorstep or office with maintaining Client Satisfaction. Gurgaon is a city located in the northern Indian state of Haryana which is now officially known as a Gurugram.`,
    },
    {
      img:"../../../assets/international_Courier_Service.jpg",
      title:'International Courier Service',
      content:`Khatu Naresh Packers and Movers International provides its expertise in conveying the easiest, fast, affordable, Trustworthy, and Time- definite delivery of parcels to many countries like the USA, Australia, Canada, UK, Singapore, Hong Kong, Thailand, New Zealand, UAE, Germany, Denmark, etc. We are functioning with the top global distribution partners like FedEx, DHL, Blue Dart, TNT, Aramex, SPOTON, RIVIGO to ensure the highest quality and meet your deadlines.`,
    },
    {
      img:"../../../assets/medicine_Delivery_Service.jpg",
      title:'Medicine Delivery Service',
      content:`Khatu Naresh Packers and Movers International provides its expertise in conveying the easiest, fast, affordable, Trustworthy, and Time- definite delivery of parcels to many countries like the USA, Australia, Canada, UK, Singapore, Hong Kong, Thailand, New Zealand, UAE, Germany, Denmark, etc. We are functioning with the top global distribution partners like FedEx, DHL, Blue Dart, TNT, Aramex, SPOTON, RIVIGO to ensure the highest quality and meet your deadlines.`,
    },
    {
      img:"../../../assets/rail_Cargo_Service.jpg",
      title:'Rail Cargo Service',
      content:`Khatu Naresh Packers and Movers International provides its expertise in conveying the easiest, fast, affordable, Trustworthy, and Time- definite delivery of parcels to many countries like the USA, Australia, Canada, UK, Singapore, Hong Kong, Thailand, New Zealand, UAE, Germany, Denmark, etc. We are functioning with the top global distribution partners like FedEx, DHL, Blue Dart, TNT, Aramex, SPOTON, RIVIGO to ensure the highest quality and meet your deadlines.`,
    },
    {
      img:"../../../assets/household_Moving.jpg",
      title:'Household Moving',
      content:`Our quality of packing and moving process, assurance of safety of belongings and other important things are of a greatest concern to the customer. Our packing and moving team always takes extra care while packing and moving household goods as it’s their own. The staff that is involved in delivering of goods from one place to another is very well aware of locations all over India.`,
    },
    {
      img:"../../../assets/air_Cargo_Services.jpg",
      title:'Air Cargo Services',
      content:`Khatu Naresh Packers and Movers International provides its expertise in conveying the easiest, fast, affordable, Trustworthy, and Time- definite delivery of parcels to many countries like the USA, Australia, Canada, UK, Singapore, Hong Kong, Thailand, New Zealand, UAE, Germany, Denmark, etc. We are functioning with the top global distribution partners like FedEx, DHL, Blue Dart, TNT, Aramex, SPOTON, RIVIGO to ensure the highest quality and meet your deadlines.`,
    },
    {
      img:"../../../assets/packers_Movers.jpg",
      title:'Packers & Movers',
      content:`Our quality of packing and moving process, assurance of safety of belongings and other important things are of a greatest concern to the customer. Our packing and moving team always takes extra care while packing and moving household goods as it’s their own. The staff that is involved in delivering of goods from one place to another is very well aware of locations all over India.`,
    },
    {
      img:"../../../assets/documents_Parcel_Services.jpg",
      title:'Documents & Parcel Services',
      content:`Khatu Naresh Packers and Movers International provides its expertise in conveying the easiest, fast, affordable, Trustworthy, and Time- definite delivery of parcels to many countries like the USA, Australia, Canada, UK, Singapore, Hong Kong, Thailand, New Zealand, UAE, Germany, Denmark, etc. We are functioning with the top global distribution partners like FedEx, DHL, Blue Dart, TNT, Aramex, SPOTON, RIVIGO to ensure the highest quality and meet your deadlines.`,
    }
  ]


}
