import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthService } from './services/auth.service';
import { MemberidComponent } from './pages/club-members/memberid/memberid.component';
import { ConnectComponent } from './pages/club-members/connect/connect.component';
import { QrCodeComponent } from './pages/login/qr-code/qr-code.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: '/club-members',
    pathMatch: 'full',

  }, {
    path: 'club-members/:name/:id/info',
    component: MemberidComponent
  }, {
    path: 'club-members/:name/:id/connect',
    component: ConnectComponent
  },{
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthService],
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
      
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
