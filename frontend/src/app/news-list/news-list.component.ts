import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NewsApiService } from '../services/news.service';
import { News } from '../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-news',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent implements OnInit {
  public news$: Observable<News[]>;

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {
    this.news$ = this.newsApiService.getNews();
  }

}
