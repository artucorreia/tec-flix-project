import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-header-version-one',
  standalone: true,
  imports: [MegaMenuModule, FormsModule],
  templateUrl: './header-version-one.component.html',
  styleUrl: './header-version-one.component.scss'
})
export class HeaderVersionOneComponent {
  items: MegaMenuItem[] | undefined;
  public searchText: string = "";

  constructor(private router:Router) { }

    ngOnInit() {
        this.items = [
          {
            label: 'Categorias',
            items: [
                [
                  {
                    label: 'Desenvolvimento',
                    items: [
                      {
                        label: 'Login', 
                        command: () => {
                          this.router.navigate(['/join/login'])
                        }
                      }
                      ,{ 
                        label: 'Sing up',
                        command: () => {
                          this.router.navigate(['/join/singup'])
                        }
                      
                      }
                  ]
                  }
                ]
            ]
          }   
        ]
    }

    public search(event: Event) {
      // console.log(event)
    }

    public navigate(path: string): void {
      this.router.navigate([`/join/${path}`])
    }
}
