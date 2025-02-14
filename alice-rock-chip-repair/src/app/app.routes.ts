import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AppointmentComponent } from './appointment/appointment.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {   path: 'services', 
        component: ServicesComponent 
    },
    {   path: 'appointment', 
        component: AppointmentComponent 
    }
];
