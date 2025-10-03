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
  standalone: false,
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

  @ContentChildren('courseImage')
  image;

  @ContentChildren(CourseImageComponent)
  images;

  @Input() count: number = 0;

  @Output('cardEvent')
  cardEmitter = new EventEmitter<Course>();
  someWords = "Hello Course Card Component World";

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  imagesElementRef: QueryList<ElementRef>;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  //  console.log('Image After View Init: ', this.image)
   // console.log(this.image)
  //  console.log('Image After View Init images: ', this.images)
  }

  ngAfterContentInit(): void {
  //  console.log('Image After ContentInit: ', this.image)
    //console.log('Image After ContentInit images: ', this.images)
  }

  cardButtonClicked(){
    console.log('Card button clicked', this.course);
    this.cardEmitter.emit(this.course);
    console.log('Image After Button clicked images: ', this.images)
    console.log('Image After Button clicked image: ', this.image)
    console.log('Image After Button clicked imagesElementRef: ', this.imagesElementRef)
  }

  cardClasses() {
        if(this.course.category == 'BEGINNER'){
          return 'beginner';
        }
   }
}
