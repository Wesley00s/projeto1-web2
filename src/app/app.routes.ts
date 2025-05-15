import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        loadComponent: () => 
            import('./features/home/home.feature').then((m) => m.HomeFeature)
    },
    {
        path: 'list-courses/:idCategory',
        loadComponent: () => 
            import('./features/list-courses/list.courses.feature').then((m) => m.ListCourses)
    },
    {
        path: 'details-course/:idCourse',
        loadComponent: () => 
            import('./features/details-course/details.course.feature').then((m) => m.DetailsCourse)
    }
];
