import { Component } from '@angular/core';
import { CrudService } from './core/services/crud/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frontend';

  articleList = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    // this.getList();
  }

  getList() {
    this.crudService.getArticlesList().subscribe((articleList) => {

        this.articleList = articleList;
        console.log(articleList)
      
    })
  }
}
