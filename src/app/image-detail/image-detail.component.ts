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
  public anger: string = '';
  public joy: string = '';
  public sorrow: string = '';
  public surprise: string = '';
  public headwear: string = '';

  analysis;
  responses: any[] = null;

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
        this.analysis = response.json().responses[0].faceAnnotations[0];
        console.log(this.analysis);
        console.log(this.analysis.joyLikelihood);
        this.anger = this.analysis.angerLikelihood;
        this.joy = this.analysis.joyLikelihood;
        this.sorrow = this.analysis.sorrowLikelihood;
        this.surprise = this.analysis.surpriseLikelihood;
        this.headwear = this.analysis.headwearLikelihood;
    })
  }

}
