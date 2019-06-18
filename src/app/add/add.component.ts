import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  constructor(private router: Router, 
    private articleService: ArticleService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      titre: ['', Validators.required],
      contenu: ['', Validators.required],
      auteur: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  create() {
    console.log(this.form.value);
    this.articleService.saveArticle(this.form.value).subscribe(()=>{
      this.router.navigate(['/articles']);
    });

  }
}
