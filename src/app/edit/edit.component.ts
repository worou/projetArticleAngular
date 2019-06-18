import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;

  constructor(private articleService: ArticleService, private router: Router, 
    private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      id: [''],
      titre: ['', Validators.required],
      contenu: ['', Validators.required],
      auteur: ['', Validators.required],
      url: ['', Validators.required],
      parution: ['']
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.editArticle(id).subscribe(data => {
      this.form.setValue(data);
     });
  }

  update() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.articleService.updateArticle(this.form.value).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    }
  }

  }


