import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { AuthenticationGuard } from './services/authenticationGuard.service';

export const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuard]},
  { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]},
  { path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuard]},
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'login', component: LoginComponent}
];
