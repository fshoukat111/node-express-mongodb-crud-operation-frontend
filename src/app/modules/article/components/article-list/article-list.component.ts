import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '@app/shared/models/aricle.model';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass']
})
export class ArticleListComponent implements OnInit {

  @Input() articleList: Article[] = [];

  @Output() deleteArticleEvent = new EventEmitter<string>();
  @Output() editArticleEvent = new EventEmitter<Article>();

  constructor() { }

  ngOnInit(): void {}

  /**
   * delete single article 
   * @param _id 
   */
  public deleteArticle(_id: string) {
    this.deleteArticleEvent.emit(_id)
  }

  /**
  * edit Article
  * @param article 
 */
  public editArticle(article: Article) {
    this.editArticleEvent.emit(article)
  }

}
