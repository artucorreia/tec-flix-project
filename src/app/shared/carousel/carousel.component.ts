import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TecflixApiService } from '../../service/tecflix-api/tecflix-api.service';
import { Course } from '../../model/course';
import { Rating } from '../../model/rating';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, RouterModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class CarouselCircular {
    cursos: Course[] = [];

    responsiveOptions: any[] | undefined;

    constructor(private tecflixApiService: TecflixApiService) {}

    ngOnInit() {
        this.cursos = this.tecflixApiService.getAllCourses();
        this.responsiveOptions = [
            {
                breakpoint: '1050px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(nota: number) {
        if (nota >= 4) {
            return 'success';
        } else if (nota >= 2) {
            return 'warning';
        } else {
            return 'danger';
        }
    }

    public averageRating(ratings: Rating[]): number {
        let sumRating: number = 0;
        for (let rating of ratings) {
            sumRating += rating.nota;
        }
        return sumRating / ratings.length;
    }

    
}
