import { Injectable } from '@angular/core';
import { RequestService } from '@app/core';
import { ApiUrl } from '@app/shared/constants/resource-refrances';
import { Article } from '@app/shared/models/aricle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private requestService: RequestService) { }

  getArticlesList(): Observable<Article[]> {
    return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.article}`)
  }

  postArticle(article: Article): Observable<Article> {
    return this.requestService.post(`${ApiUrl.backendUrl}/${ApiUrl.article}/${ApiUrl.create}`, article)
  }

  deleteArticle(id: string): Observable<Article[]> {
    return this.requestService.delete(`${ApiUrl.backendUrl}/${ApiUrl.article}/${id}`)
  }

  updateArticle(id: string, article: Article): Observable<Article> {
    return this.requestService.put(`${ApiUrl.backendUrl}/${ApiUrl.article}/${id}/`, article)
  }
}
