import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AlbumComponent } from './components/album/album.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { BusyComponent } from "./shared/busy/busy.component";
import { FormsModule } from '@angular/forms';
import { HttpClientInterceptor } from './config/http.interceptor';
import { HeaderComponent } from './shared/header/header.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { AsideBarComponent } from './shared/aside-bar/aside-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { MosaicComponent } from './shared/mosaic/mosaic.component';
import { CarouselComponent } from './shared/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlbumComponent,
    BusyComponent,
    HeaderComponent,
    ProfileComponent,
    AsideBarComponent,
    FooterComponent,
    PaginationComponent,
    MosaicComponent,
    CarouselComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
