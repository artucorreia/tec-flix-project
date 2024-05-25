import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => 
            import('./pages/home/home.component').then(p => p.HomeComponent),
        pathMatch: 'full'
    },
    {
        path: 'course/:id',
        loadComponent: () => 
            import('./pages/course-details/course-details.component').then(p => p.CourseDetailsComponent),
    },
    {
        path: 'join',
        children: [
            {
                path: 'login',
                loadComponent: () => 
                    import('./pages/sing-in/sing-in.component').then(p => p.SingInComponent)
            },
            {
                path: 'singup',
                loadComponent: () => 
                    import('./pages/sing-up/sing-up.component').then(p => p.SingUpComponent)
            }
        ]
    },
];
