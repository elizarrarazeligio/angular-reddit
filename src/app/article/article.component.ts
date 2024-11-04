import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  // CSS class applied to the host of component
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

  voteUp(): boolean {
    this.votes += 1;
    // Evita que la página se recargue por default
    return false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }
}
