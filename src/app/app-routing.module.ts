import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewtaskComponent } from './page/newtask/newtask.component';


const routes: Routes = [
    {
        path: '',
        component: NewtaskComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule { }
