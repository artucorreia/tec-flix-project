import { Component, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { TecflixApiService } from '../../service/tecflix-api/tecflix-api.service';
import { Course } from '../../model/course';
import { Rating } from '../../model/rating';
import { Professor } from '../../model/professor';
import { User } from '../../model/user';
import { forkJoin } from 'rxjs';

interface CoursesAndProfessorAndUser {
    course: Course;
    professor: Professor;
    user: User;
    ratings: Rating[];
    averageRating: number;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, RouterModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class Carousel {
    #tecflixApiService = inject(TecflixApiService);
    
    private courses: Course[] = [];
    private professors: Professor[] = [];
    private users: User[] = [];
    private ratings: Rating[] = [];

    public allData: CoursesAndProfessorAndUser[] = [];

    responsiveOptions: any[] | undefined;

    constructor() {}

    ngOnInit() {
        this.loadAllData();
        this.mapData();

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

    private loadAllData() {
        forkJoin({
            courses: this.#tecflixApiService.getAllCourses(),
            professors: this.#tecflixApiService.getAllProfessors(),
            users: this.#tecflixApiService.getAllUsers(),
            ratings: this.#tecflixApiService.getAllRatings(),
        }).subscribe({
            next: ({courses, professors, users, ratings}) => {
                this.courses = courses;
                this.professors = professors;
                this.users = users;
                this.ratings = ratings;
                this.mapData();
            },
            error: error => console.error(error)
        });
    }

    private mapData() {
        this.allData = []

        this.courses.forEach(element => {
            const professor: Professor | undefined = 
                this.professors.find(prof => prof.id === element.professor_id);
            const user: User | undefined = 
                this.users.find(usr => usr.id === professor?.user_id);
            const courseRatings: Rating[] = 
                this.ratings.filter(rating => rating.course_id == element.id);
            
            if (!professor) return;
            if (!user) return;

            this.allData.push({
                course: element,
                professor: professor,
                user: user,
                ratings: courseRatings,
                averageRating: this.averageRating(courseRatings)
            });
        })
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
            sumRating += rating.grade;
        }
        return sumRating / ratings.length;
    }

    
}
