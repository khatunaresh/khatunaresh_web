import { AfterContentInit, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: '[app-testimonials]',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
        dirn:any = 'right';
        swipeRight(){
            document.querySelector<any>('.testimonials').scrollTo(document.querySelector<any>('.testimonials').scrollLeft+300,0)
        }
        swipeLeft(){
            document.querySelector<any>('.testimonials').scrollTo(document.querySelector<any>('.testimonials').scrollLeft-300,0)
        }

        // scrollInterval = setInterval(() => {this.scrollFunction();}, 2000);
        // scrollFunction(){
        //     if(document.querySelector<any>('.testimonials').scrollLeft == document.querySelector<any>('.testimonials').scrollWidth-1429){
        //         this.dirn = 'left';
        //     }else if(document.querySelector<any>('.testimonials').scrollLeft == 12){
        //         this.dirn = 'right';
        //     }
        //     if(this.dirn == 'right'){
        //         this.swipeRight();
        //     }else if(this.dirn == 'left'){
        //         this.swipeLeft();
        //     }
        // }


        reviews:any=[
            {name:'Mr Mishra',title:'Extremely happy with the support provided',content:'I am extremely happy with my  experience with NoBroker movers and packers team. Being a senior citizen while shift from Hyderabad to Ranchi I was worried about the entire shifting process. But thanks to Nobroker and their team for making the entire process smooth and easy'},
            {name:'Rahul Kumar',title:'Happy with the service',content:'Khatu Naresh Packers and Movers are great when it comes to relocation. They are prompt, right from the survey of goods to packing, loading-unloading, moving, and re-arranging of goods in your new home.'},
            {name:'Vishnu Prakash',title:'Good Facility',content:'Khatu Naresh Packers and Movers are great when it comes to relocation. They are prompt, right from the survey of goods to packing, loading-unloading, moving, and re-arranging of goods in your new home.'},
            {name:'RK Sehgal',title:'Exceptional customer support & hassle free movement!',content:'Extraordinary services and customer support provider by Khatu Naresh Packers and Movers for my shifting from Faridabad to Lucknow. Extremely happy with the customer care and service provided by their team. Miles to go. Kudos Team.'},
            {name:'Shyam Kumar',title:'Convenience guaranteed by Khatu Naresh Packers and Movers',content:'I m very happy with the quality of services provided by Khatu Naresh Packers and Movers. A designated movement manager is assigned to each customer which makes the entire shifting process very convenient.'},
            {name:'Aliya Singh',title:'Recommended for everyone looking for best-in-class services!',content:'Professionalism with quality services is what you get with Khatu Naresh Packers and Movers. Their entire team including their Movement manager made my shifting from Delhi to Gurgaon hassle  free. I would recommend their services to every one who is looking for best in class packers and movers services.'},
            {name:'Vivek Sharma',title:'Superbly satisfied with service',content:'The service was superbly managed by the employees of the company. The employees are highly trained, and they use good quality boxes to pack our stuff. The stuff was delivered safely on the promised date. I am really very satisfied with their bench-mark services'},
            {name:'Vishal Pandey',title:'Good provided service',content:'Khatu Naresh Packers and Movers shifting process is very simple you just need to call them and then it’s their responsibility to shift your goods with care and perfection at your desired location without any hazel.'},
            {name:'Arvind Bhatti',title:'Took care of our things',content:'We are emotionally attached to our things at home. So we maintain some extra precaution while selecting a packers movers company. We have chooses professionals who know how to pack, move, and unpack your goods with complete safety as suggested by friends and i will say our choice was right.'},
            {name:'Vineeta Kapoor',title:'Availablity 24x7',content:'I use their house shifting service. The best thing I found was their 24x7 helpine number which gives maximum detail about my goods whenever I needed'},
            {name:'Guest Client',title:'',content:'Hay Khatu Naresh Packers and Movers Gurgaon Id a great knowledge with your consumer service team . They did a excellent job of keeping me current about my shifted status. I did not need to go pursuit anyone for any updates. It was a totally hassle-free service. Thank you Gati Packers and Movers Gurgaon team  for the supports'},
            {name:'Vishal Prajapati',title:'Great job Done',content:'They are doing very good and nice service. They are doing an excellent job.They dont give a chance for complain.While I shift my house they done great job.Not a thing broken or scratch on any thing I have so many glass product but not a product broken. If you want to move your house please go ahead and call them they are the best.'}
        ]


}
