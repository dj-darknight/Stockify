import { NgModule, reflectComponentType } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [

  {
    path: '',
    component : AuthComponent,
    children: [
      {
        path: 'login',
        component : LoginComponent,
      },
      {
        path: '',
        redirectTo : 'login',
        pathMatch : 'full'
      },
      {
        path:'forgot-password',
        component : ForgotPasswordComponent,
      },
      {
        path:'register',
        component : RegisterComponent,
      },
      {
        path:'subscription',
        component : SubscriptionComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
