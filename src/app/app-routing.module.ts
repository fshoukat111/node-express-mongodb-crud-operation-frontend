import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'article',
    pathMatch: 'full'
  },
  {path: '',loadChildren: () => import('@app/modules/article/article.module').then(m => m.ArticleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
