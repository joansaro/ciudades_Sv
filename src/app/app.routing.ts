import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { CitiesComponent } from './component/cities/cities.component';
import { CreateComponent } from './component/create/create.component';
import { ErrorComponent } from './component/error/error.component';
import { DetailComponent } from './component/detail/detail.component';
import { EditComponent } from './component/edit/edit.component';


const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'cities', component: CitiesComponent},
    { path: 'create', component: CreateComponent},
    { path: 'citie/:id', component: DetailComponent},
    { path: 'edit-citie/:id', component: EditComponent},
    { path: '**', component: ErrorComponent}
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);