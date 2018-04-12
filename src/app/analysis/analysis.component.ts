import { Component, OnInit, Input } from '@angular/core';
import { GalleryImage } from '../models/galleryImage.model';
import { HttpModule, Headers } from '@angular/http';
import * as $ from 'jquery';
import { AnalysisService } from '../services/analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  @Input() image: GalleryImage;

  constructor(private analysisService: AnalysisService){}

  detectFace(image) {
    this.analysisService.detectFace(image)
    console.log(image)
  }

}
