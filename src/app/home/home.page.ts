import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  posts: object[] = [];
  // posts;
  // articles;
  constructor(private router: Router, private apiService: ApiService) {}
  // constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe((Response: any) => {
      // console.log(Response.data.children);
      this.posts = Response.data.children;
    });
  }

  gotToDetail() {
    this.router.navigate(['/detail']);
  }
  // ionViewDidEnter() {
  //   this.apiService.getPosts().subscribe(data => {
  //     console.log(data);
  //     this.posts = data['posts'];
  //     // this.articles = data['articles'];
  //   });
  // }
}
