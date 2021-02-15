import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/dashboard/home/home.component';
import { GalleryComponent } from './_components/dashboard/gallery/gallery.component';
import { CatalogueComponent } from './_components/dashboard/catalogue/catalogue.component';
import { ContactComponent } from './_components/dashboard/contact/contact.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'catalogue', component: CatalogueComponent
  },
  {
    path: 'contact', component: ContactComponent,
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
