import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @HostBinding("attr.class") cssClass = "row";
  // Definition of variables
  votes: number;
  title: string;
  link: string;

  // Constructor of class
  constructor() {
    this.title = "Angular";
    this.link = "http://angular.io";
    this.votes = 10;
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }
}
