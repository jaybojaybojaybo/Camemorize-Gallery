import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs/Observable';
import { GalleryImage } from '../models/galleryImage.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Observable<GalleryImage[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

}
