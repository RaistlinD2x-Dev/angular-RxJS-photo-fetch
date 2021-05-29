import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface PhotoApi {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<PhotoApi>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID MSihX20m6ERRMx3v7O4CG0t6WG4uTzCK8E7NGc37j9I'
      }
    })
  }

}
