import { Component, inject } from '@angular/core';
import { TecflixApiService } from '../../service/tecflix-api.service';
import { Course } from '../../model/course';
import { ActivatedRoute } from '@angular/router';
import { HeaderVersionOneComponent } from '../../shared/header-version-one/header-version-one.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Rating } from '../../model/rating';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [HeaderVersionOneComponent, FooterComponent, CurrencyPipe],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {
  #tecflixApiService = inject(TecflixApiService);
  #route = inject(ActivatedRoute);
  
  public urlParamsId: string | null = '';
  public course: Course[] = [];
  public displayAllClasses: boolean = false;
  public displayClasses: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getCourse();
  }

  private getCourse() {
    this.#route.paramMap.subscribe(params => this.urlParamsId = params.get('id'))
    if (this.urlParamsId) {
      this.course = this.#tecflixApiService.getCourse(this.urlParamsId);
    }
    console.log(this.course)
  }

  public averageRating(ratings: Rating[]): number {
    let sumRating: number = 0;
    for (let rating of ratings) {
        sumRating += rating.nota;
    }
    return sumRating / ratings.length;
  }

  public toggleAllClassesVisibility() {
    this.displayAllClasses = !this.displayAllClasses;
  }

  public toggleClassesVisibility(id: string) {
    const hasTheId: string | undefined = this.displayClasses.find(value => value === id); 
    
    if (hasTheId) {
      this.displayClasses = this.displayClasses.filter(value => value !== id)
    } else {
      this.displayClasses.push(id);
    }
  }

  public hasTheId(moduleId: string): boolean {
    const index = this.displayClasses.indexOf(moduleId);
    if (index != -1) return true;
    return false;
  }
}
