import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-version-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header-version-one.component.html',
  styleUrl: './header-version-one.component.scss'
})
export class HeaderVersionOneComponent {
  items: MegaMenuItem[] | undefined;
  public searchText: string = "";
  public displaySideMenu: boolean = false;
  
  @ViewChild('parentButton', { static: true }) parentButton!: ElementRef;
  @ViewChild('parentMenu', { static: true }) parentMenu!: ElementRef;

  constructor(private router:Router) { }

  public search() { }

  public navigate(path: string): void {
    this.router.navigate([path])
  }
  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    let element: HTMLElement = event.target as HTMLElement;
    if (
      !this.parentButton.nativeElement.contains(element)
      && !this.parentMenu.nativeElement.contains(element)
      && element.classList.toString() != "pi pi-bars"
      && element.classList.toString() != "pi pi-times"
      && this.displaySideMenu
    ) {
      this.changeDisplaySideMenu();
    }
  }

  public changeDisplaySideMenu(): void {
    this.displaySideMenu = !this.displaySideMenu;
  }
}
