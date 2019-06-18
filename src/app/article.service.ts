import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Article } from './model/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  api = 'http://localhost:8080/articleApi/articles/';

  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }
  saveArticle(article: Article) {
    return this.http.post(this.api, JSON.stringify(article), this.httpOptions);
  }

  editArticle(id: number) {
    return this.http.get(this.api + id);
  }

  updateArticle(article: Article) {
    return this.http.put(this.api, JSON.stringify(article), this.httpOptions);
  }

  deleteArticle(id: number) {
    return this.http.delete(this.api + id);
  }
}
