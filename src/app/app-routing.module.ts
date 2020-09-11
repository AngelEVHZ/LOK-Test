import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "@components/login/login.component";
import {HomeComponent} from "@components/home/home.component";
import {AlbumComponent} from "@components/album/album.component";
import { NoAuthenticatedGuard } from './config/no-authenticated.guard';
import { AuthenticatedGuard } from './config/authenticated.guard';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[NoAuthenticatedGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'album',
    component: AlbumComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
