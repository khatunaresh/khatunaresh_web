import { Component } from '@angular/core';

@Component({
  selector: '[app-videos]',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

  videos:any=[
    {content:"../../../assets/video1.mp4"},
    {content:"../../../assets/video2.mp4"},
    {content:"../../../assets/video3.mp4"},
    {content:"../../../assets/video4.mp4"},
    {content:"../../../assets/video5.mp4"},
    {content:"../../../assets/video6.mp4"},
  ]
}
