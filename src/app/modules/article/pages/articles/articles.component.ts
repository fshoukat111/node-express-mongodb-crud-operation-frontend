import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '@app/shared/models/aricle.model';
import { CrudService } from '@app/core/services/crud/crud.service';
import { DialogComponent } from '@app/shared/components/dialog/dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticlesComponent implements OnInit, OnDestroy {

  public articleList: Article[] = [];
  private subscriptions$: Subscription[] = [];

  constructor(
    private crudService: CrudService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getArticleList();
  }

  /**
   * Get Article List
  */
  public getArticleList() {
    this.subscriptions$.push(
      this.crudService.getArticlesList().subscribe((articleList) => {
        this.articleList = articleList;
      })
    );
  }

  public postArticle(article: Article) {
    this.crudService.postArticle(article).subscribe((res) => {
      this.getArticleList()
    });
  }

  /**
   * edit Article from article list
   * @param article 
  */
  public editArticle(article: Article) {
    const ref = this.dialogService.open(DialogComponent, {
      header: 'Edit Form',
      width: '25%',
      data: {
        id: article._id,
        title: article.title,
        articleDescription: article.articleDescription,
      },
    });

    ref.onClose.subscribe(() => {
      this.getArticleList();
    });
  }

  /**
   * delete single article  from articlelist
   * @param _id 
   */
  public deleteArticle(_id: string) {
    this.crudService.deleteArticle(_id).subscribe(() => {
      this.articleList = this.articleList.filter(art => art._id !== _id);
    })
  }

/**
`* Destroy Categories Services
*/
  ngOnDestroy() {
    this.subscriptions$.forEach(subscribe => {
      if (subscribe) {
        subscribe.unsubscribe();
      }
    });
  }
}
