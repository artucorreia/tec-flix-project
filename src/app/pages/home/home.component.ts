import { Component } from '@angular/core';
import { HeaderVersionOneComponent } from '../../shared/header-version-one/header-version-one.component';
import { CarouselAdsComponent } from '../../shared/carousel-ads/carousel-ads.component';
import { CarouselKeepWatchingComponent } from '../../shared/carousel-keep-watching/carousel-keep-watching.component';
import { CarouselCircular } from '../../shared/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderVersionOneComponent, CarouselAdsComponent, CarouselKeepWatchingComponent, CarouselCircular],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }