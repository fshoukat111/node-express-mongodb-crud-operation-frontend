import { Component, OnInit } from '@angular/core';
import { CrudService } from '@app/core/services/crud/crud.service';
import { Article } from '@app/shared/models/aricle.model';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {
  
  public id: string;
  public editArticle: Article;

  constructor(
    public config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private crudService: CrudService,) 
    {
    this.editArticle = this.config.data;
    this.id = this.config.data.id;
  }

  ngOnInit(): void { }

  public updateArticle() {
    this.crudService.updateArticle(this.id, this.editArticle).subscribe((res => {
      console.log('res', res)
      this.ref.close(res)
    }))
  }
}
