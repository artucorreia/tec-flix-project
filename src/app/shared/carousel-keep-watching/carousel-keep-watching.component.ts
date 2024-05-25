import { Component, inject } from '@angular/core';
import { TecflixApiService } from '../../service/tecflix-api.service';

@Component({
  selector: 'app-carousel-keep-watching',
  standalone: true,
  imports: [],
  templateUrl: './carousel-keep-watching.component.html',
  styleUrl: './carousel-keep-watching.component.scss'
})
export class CarouselKeepWatchingComponent {
  #tecflixApiService = inject(TecflixApiService);

  ngOnInit() {
    console.log(this.#tecflixApiService.getUserCouses('104'));
  }
}
