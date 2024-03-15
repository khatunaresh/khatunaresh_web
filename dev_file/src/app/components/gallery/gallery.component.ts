import { Component } from '@angular/core';

@Component({
  selector: '[app-gallery]',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images:any=[
    {image:"../../../assets/gallery1.jpeg"},
    {image:"../../../assets/gallery2.jpeg"},
    {image:"../../../assets/gallery3.jpeg"},
    {image:"../../../assets/gallery4.jpeg"},
    {image:"../../../assets/gallery5.jpeg"},
    {image:"../../../assets/gallery9.jpeg"},
    {image:"../../../assets/gallery7.jpeg"},
    {image:"../../../assets/gallery8.jpeg"},
    {image:"../../../assets/gallery6.jpeg"},
  ]

}
