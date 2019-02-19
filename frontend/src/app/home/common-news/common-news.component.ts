import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news.service';
import { News, Image } from 'src/app/models';
import { ImageApiService } from '../../services/image.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-common-news',
  templateUrl: './common-news.component.html',
  styleUrls: ['./common-news.component.scss']
})
export class CommonNewsComponent implements OnInit {
  public newsData: News[];
  public imageData;
  public urlBase64;
  public isImageLoading: boolean;

  constructor(
    private newsApiService: NewsApiService,
    private imageApiService: ImageApiService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.initMainNews();
  }

  initMainNews() {
    this.newsApiService.getMainNews()
      .subscribe(
        (data: News[]) => {
          this.newsData = data;
          this.imageData = this.newsData.map(n => n.images[0]); // todo undefind
          console.log(this.imageData);
          this.readBlob(this.imageData);
        },
        err => console.log(err),
        () => console.log('News component completed')
      );
  }


  readBlob(data) {
    data.map((image: Image) => {
      this.imageApiService.getImageById(image.id)
        .subscribe(im => {
          const blob = new Blob([im], {
            type: 'img/jpg'
          });
          const urlCreator = window.URL;
          console.log(blob);
          this.urlBase64 = URL.createObjectURL(blob);
          console.log(this.urlBase64);
        });
    });
  }
}

