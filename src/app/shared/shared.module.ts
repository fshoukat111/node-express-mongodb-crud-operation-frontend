import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '@app/shared/modules/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { ArticleModule } from '@app/modules/article/article.module';
import { DialogComponent } from './components/dialog/dialog.component';


const SHARED_COMPONENT = [
  DialogComponent
]

const SHARED_MODULES = [
  CommonModule,
  PrimeNgModule,
  FormsModule,
  ArticleModule,
  
]

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENT],
  declarations: [...SHARED_COMPONENT],

})
export class SharedModule { }
