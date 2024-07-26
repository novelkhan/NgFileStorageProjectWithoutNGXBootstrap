import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/shared/components/errors/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorizationGuard } from './modules/shared/guards/authorization.guard';


//  Angular 16 project is created using 'npx -p @angular/cli@16 ng new NgFileStorageProjectWithoutNGXBootstrap' command. Guide Link- https://www.youtube.com/watch?v=LYNG3kcKRQ8  


//  BootStrap-5 Installation Guide Link- https://www.youtube.com/watch?v=TIGy3VYsG5g  
//  1. npm i bootstrap command is run to install bootstrap
//  2. npm i @popperjs/core command is run to install bootstrap
//  3. npm i bootstrap-icons command is run to install bootstrap 



//  Redirect problem solution is in this Link- https://www.youtube.com/watch?v=ZUEfQgPwDXI 
//  _redirects File is added in src folder. And Its path is added in angular.json file 



const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthorizationGuard],
    children: [
      { path: 'user', component: UserComponent },
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule) },
    ]
  },
  // Implenting lazy loading by the following format
  { path: 'account', loadChildren: () => import('./modules/account/account.module').then(module => module.AccountModule) },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
