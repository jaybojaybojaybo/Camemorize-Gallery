import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { GalleryImage } from '../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  private imageUrl: string = '';

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  getImageUrl(key: string){
    this.imageService.getImages(key)
      .then(imageUrl => this.imageUrl = imageUrl.url);
  }

  ngOnInit() {
    this.getImageUrl(this.route.snapshot.params['id']);
  }

}
