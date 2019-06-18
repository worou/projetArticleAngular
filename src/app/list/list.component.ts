import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  articles;
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
      console.log(data);
    });
    this.remove();
  }

  remove() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.deleteArticle(id).subscribe(() => {
      this.router.navigate(['/articles']);
    });
  }
}
