import {AfterViewInit, Component, ElementRef, QueryList, viewChild, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit{

  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];
  allCourses = [...COURSES];

  //schlechte Praxis lieber Eventemitter verwenden
  @ViewChild('card')courseCard: CourseCardComponent;

  //es wird immer der erste Treffer angezeigt/gespeichert, falls man mehrere CardComponents hat wird nur das erste Element hier in card gespeichert
  @ViewChild('cardRef')
  card: CourseCardComponent;

  @ViewChild('container')
  containerDiv: ElementRef

  @ViewChild('cardRefElementCourseCard', {read: ElementRef})
  cardRefElementCourseCard: ElementRef

  @ViewChildren(CourseCardComponent)
  cards : QueryList<CourseCardComponent>;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cardsDOMElements : QueryList<CourseCardComponent>;


  showAppComponent() {
    console.log('App component clicked');
  }

  fromChildToParent($event: Course) {
    console.log('From child to parent', $event);
  }

  viewChildCardComponent(course:Course) {
    console.log(this.card);
    console.log(this.containerDiv)
    console.log(this.cardRefElementCourseCard)
  }

  ngAfterViewInit(): void {

    this.cards.changes.subscribe(cards => {
      console.log(cards)
    })
    console.log(this.card);
    console.log("cardsDOMElements", this.cardsDOMElements)
    //this will cause an Error ERROR RuntimeError: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    //this.allCourses[0].description = 'UPDATED';
  }

  onCoursesEdited() {
    this.allCourses.push(
      {
        id: this.allCourses.length + 1,
        description: 'Angular Testing Course',
        iconUrl: 'https://angular.io/generated/images/logos/angular/angular.png',
        longDescription: 'Learn all about unit and end to end testing in Angular',
        category: 'BEGINNER',
        lessonsCount: 10
      }
    )
  }

}
