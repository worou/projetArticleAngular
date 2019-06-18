import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { from } from 'rxjs';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';


const routes: Routes = [
  { path: 'articles', component: ListComponent, canActivate: [AuthGaurdService] },
  { path: 'add', component: AddComponent, canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
  { path: 'article/:id', component: EditComponent, canActivate: [AuthGaurdService] },
  { path: 'articles/:id', component: ListComponent, canActivate: [AuthGaurdService] },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGaurdService] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
