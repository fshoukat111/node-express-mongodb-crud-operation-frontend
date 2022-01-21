import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AricleRoutingModule } from './article-routing.module';
import { PrimeNgModule } from '@app/shared/modules/prime-ng/prime-ng.module';
import { CreateArticleComponent,ArticleListComponent } from '@app/modules/article/components';
import { ArticlesComponent } from './pages/articles/articles.component';


@NgModule({
  declarations: [
    ArticleListComponent,
    CreateArticleComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    AricleRoutingModule,
    PrimeNgModule,
    FormsModule,
  ]
})
export class ArticleModule { }
