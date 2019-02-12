import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NewsApiService } from 'src/app/services/news.service';
import { News } from 'src/app/models';


@Component({
  selector: 'app-common-news',
  templateUrl: './common-news.component.html',
  styleUrls: ['./common-news.component.scss']
})
export class CommonNewsComponent implements OnInit {
  public newsData: News[];

  constructor(
    private newsApiService: NewsApiService,
  ) { }

  ngOnInit() {
    this.initMainNews();
  }

  initMainNews() {
    this.newsApiService.getMainNews()
      .subscribe(
        (data: News[]) => {
          this.newsData = data;
        },
        err => console.log(err),
        () => console.log('News component completed')
      );
  }

}
