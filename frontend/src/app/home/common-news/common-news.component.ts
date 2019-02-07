import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news.service';
import { News, Image } from 'src/app/models';
import { ImageApiService } from 'src/app/services/image.service';

@Component({
  selector: 'app-common-news',
  templateUrl: './common-news.component.html',
  styleUrls: ['./common-news.component.scss']
})
export class CommonNewsComponent implements OnInit {
  public newsData: News[];
  public imageData: Image[];

  constructor(
    private newsApiService: NewsApiService,
    private imageApiService: ImageApiService,
    ) { }

  ngOnInit() {
    this.initMainNews();
  }

  initMainNews() {
    this.newsApiService.getMainNews().subscribe(
      (data: News[]) => {
        this.newsData = data;
        this.initImage(1); // todo
        console.log(data);
        console.log(this.imageData);
      },
      err => console.log(err),
      () => console.log('News component completed')
    );
  }

  initImage(id: number) {
    this.imageApiService.getImageById(id).subscribe(
      (data: Image[]) => {
        this.imageData = data;
      }
    );
  }
}
