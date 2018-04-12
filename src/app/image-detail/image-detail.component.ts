import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { GalleryImage } from '../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';
import { AnalysisService } from '../services/analysis.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  private imageUrl: '';
  private title: string = '';
  private description: string = '';

  analysis: any[] = null;
  joy;


  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private analysisService: AnalysisService
  ) { }

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

  detectFace() {
    this.analysisService.detectFace(this.imageUrl)
      .subscribe(response => {
        this.analysis = response.json();
        console.log(this.analysis);
        // console.log("You mad, bro?" + " " + this.analysis.responses[0].faceAnnotations[0].angerLikelihood);
    })
  }

}
