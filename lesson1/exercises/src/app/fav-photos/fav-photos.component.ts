import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My favourite places';
  image1 = 'https://live.staticflickr.com/7837/46519476835_7f9c820124_b.jpg';
  image2 = 'https://chrisnelson.ca/photos/var/albums/Ballooning%20Cappadocia%20Turkey/Cappadocia%20Ballooning%20Panorama1.jpg?m=1424924004';
  image3 = 'https://d12dkjq56sjcos.cloudfront.net/pub/media/wysiwyg/istanbul/17-download-app-banner/BBT-App-download-Istanbul-Panoramic-View.jpg';

  constructor() { }

  ngOnInit() {
  }

}
