import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news.service';
import { News } from 'src/app/models';


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
  ) { }

  ngOnInit() {
    this.initMainNews();
  }

  initMainNews() {
    this.newsApiService.getMainNews()
      .subscribe(
        (data: News[]) => {
          this.newsData = data;
          this.imageData = this.newsData.map(n => n.images[0].data);
        },
        err => console.log(err),
        () => console.log('News component completed')
      );
  }

  // for convert images

  // createImageFromBlob(image: Blob) {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => {
  //     this.urlBase64 = reader.result;
  //   }, false);

  //   if (image) {
  //     const blob = new Blob([image], {type: 'image/jpg'});
  //     reader.readAsDataURL(blob);
  //   }
  // }

  // getImageFromService() {
  //   this.isImageLoading = true;
  //   this.imageApiService.getImageById(1).subscribe(data => {
  //     this.createImageFromBlob(data);
  //     this.isImageLoading = false;
  //   }, error => {
  //     this.isImageLoading = false;
  //     console.log(error);
  //   });
  // }
}
