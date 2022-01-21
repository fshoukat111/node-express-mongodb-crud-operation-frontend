import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Article } from '@app/shared/models/aricle.model';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.sass']
})
export class CreateArticleComponent implements OnInit {

  @Output() postArticle = new EventEmitter<Article>();

  public article : Article = new Article();

  constructor() { }

  ngOnInit(): void {}

  public createArticle(){
    this.postArticle.emit(this.article);
  }
}
