import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoaderService } from './_services/loader.service';
import { LoaderInterceptorService } from './_services/loader-interceptor.service';
import { LoaderComponentComponent } from './_components/shared/loader-component/loader-component.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { HomeComponent } from './_components/dashboard/home/home.component';
import { GalleryComponent } from './_components/dashboard/gallery/gallery.component';
import { CatalogueComponent } from './_components/dashboard/catalogue/catalogue.component';
import { ContactComponent } from './_components/dashboard/contact/contact.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    CatalogueComponent,
    ContactComponent,
    LoaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
