import { Routes } from '@angular/router';
import { AuthenComponent } from './component/authen/authen.component';
import { UserComponent } from './component/user/user.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: AuthenComponent },
    {path:'user',component: UserComponent}
  ];