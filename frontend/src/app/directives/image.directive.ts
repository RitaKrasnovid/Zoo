// import { Directive, OnInit, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BROWSER_SANITIZATION_PROVIDERS, DomSanitizationService } from '@angular/platform-browser';

// @Directive({
//   selector: '[appImage]',
//   providers: [BROWSER_SANITIZATION_PROVIDERS]
// })
// export class ImageDirective implements OnInit {
//   imageData: any;
//   sanitizedImageData: any;
//   @Input() profileId: number;

//   constructor(
//     private http: HttpClient,
//     private sanitizer: DomSanitizationService
//   ) { }

//   ngOnInit() {
//     this.http.get('http://localhost:4200/api/image/' + this.profileId)
//       .map(image => image.text())
//       .subscribe(
//         data => {
//           this.imageData = 'data:image/png;base64,' + data;
//           this.sanitizedImageData = this.sanitizer.bypassSecurityTrustUrl(this.imageData);
//         }
//       );
//   }
// }
