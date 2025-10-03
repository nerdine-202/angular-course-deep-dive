import {Component, input, Input, OnInit} from '@angular/core';

@Component({
  selector: 'course-image',
  standalone: false,
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent implements OnInit
{
  @Input('srcInput')
  imgUrl: string;

  name = input<string>('differentName');


  ngOnInit() {

      console.log('the different Name is:' + this.name() );

  }
}
