import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherlogsComponent } from './weatherlogs/weatherlogs.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'logs' },
  { path: 'logs', component: WeatherlogsComponent },
];



@NgModule({
  declarations: [
    WeatherlogsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule

  ]
})
export class WeatherModule { }
