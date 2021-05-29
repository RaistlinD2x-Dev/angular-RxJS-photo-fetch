import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service'

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  photoShowUrl: string;

  constructor(private photosService: PhotosService) {
    this.fetchPhoto()
   }

  onClick() {
    this.fetchPhoto()
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe((response) => {
      this.photoShowUrl = response.urls.regular
    });
  }

  ngOnInit(): void {

  }

}
