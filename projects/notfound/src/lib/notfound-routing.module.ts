import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound.component';

const routes: Routes = [
    { path: '', redirectTo: '/notfound', pathMatch: 'full' },
    { path: 'notfound', component: NotfoundComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class NotfoundRoutingModule { }
