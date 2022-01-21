import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from '@app/modules/article/pages';

const routes: Routes = [
  {path:'article',component:ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AricleRoutingModule { }
