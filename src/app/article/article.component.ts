import { Component, HostBinding } from '@angular/core';
import { Article } from './article.model';

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

  // Instancia de clase Article
  article: Article;

  // Constructor of class
  constructor() {
    this.article = new Article(
      "Angular",
      "http://angular.io",
      10
    );
  }

  voteUp(): boolean {
    this.article.votes += 1;
    // Evita que la página se recargue por default
    return false;
  }

  voteDown(): boolean {
    this.article.votes -= 1;
    return false;
  }
}
