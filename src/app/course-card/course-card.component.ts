import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, QueryList,
  ViewChild
} from '@angular/core';
import {Course} from '../model/course';
import {NgClass} from '@angular/common';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  imports: [
    NgClass
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit{

  @Input({
    required: true
  })
  course: Course;

  @Input({
  })
  index:number;

  @ContentChild('courseImage')
  image;

  @ViewChild(CourseImageComponent)
  image2;

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;


  @Input() count: number = 0;

  @Output('cardEvent')
  cardEmitter = new EventEmitter<Course>();
  someWords = "Hello Course Card Component World";

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    console.log('Image After View Init: ' + this.image)
    console.log('Image After View Init image2: ' + this.image2)
  }

  ngAfterContentInit(): void {
    console.log('Image After ContentInit: ' + this.image)
    console.log('Image After ContentInit image2: ' + this.image2)
    console.log('Image After ContentInit images: ' + this.images)
  }

  cardComponentClicked(){
    console.log('Card component clicked', this.course);
    this.cardEmitter.emit(this.course);
  }

  cardClasses() {
        if(this.course.category == 'BEGINNER'){
          return 'beginner';
        }
   }
}
