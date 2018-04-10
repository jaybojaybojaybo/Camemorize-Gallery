import { Component, OnInit, OnChanges } from '@angular/core';
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
  private imageUrl: '';
  private title: string = '';
  private description: string = '';

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute) { }

  getImageUrl(key: string){
    this.imageService.getImage(key)
      .then(image => this.imageUrl = image.url);
  }

  getImageTitle(key: string) {
    this.imageService.getImage(key)
    .then(title => this.title = title.title)
  }
  getImageDescription(key: string) {
    this.imageService.getImage(key)
    .then(description => this.description = description.description)
  }

  ngOnInit() {
    this.getImageUrl(this.route.snapshot.params['id']);
    return this.imageService.getImage(this.imageUrl)
  }

}
