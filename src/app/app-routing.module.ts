import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//  Angular 16 project is created using 'npx -p @angular/cli@16 ng new NgFileStorageProjectWithoutNGXBootstrap' command. Guide Link- https://www.youtube.com/watch?v=LYNG3kcKRQ8  


//  BootStrap-5 Installation Guide Link- https://www.youtube.com/watch?v=TIGy3VYsG5g  
//  1. npm i bootstrap command is run to install bootstrap
//  2. npm i @popperjs/core command is run to install bootstrap
//  3. npm i bootstrap-icons command is run to install bootstrap



//  Redirect problem solution is in this Link- https://www.youtube.com/watch?v=ZUEfQgPwDXI 
//  _redirects File is added in src folder. And Its path is added in angular.json file 



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
