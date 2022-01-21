import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TooltipModule} from 'primeng/tooltip';


const modules = [
  TableModule,
  ButtonModule,
  DynamicDialogModule,
  InputTextModule,
  InputTextareaModule,
  TooltipModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [DialogService],
})
export class PrimeNgModule { }
