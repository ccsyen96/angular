import { Component, OnInit } from '@angular/core';
import { CovidComponent } from 'src/app/covid/covid.component';
import { CovidApiService } from 'src/app/covidapi.service';

@Component({
  selector: 'app-covid-delete',
  templateUrl: './share.component.html',
  styleUrls: ['../../../app/share/css/share.component.css']
})
export class ShareComponent implements OnInit {
  public newDesc: any;

  constructor(
    
    public covidApiService: CovidApiService,
    public covidComponent: CovidComponent,

  ) { }

  ngOnInit(): void {}
  
  deletePost() {

    this.covidApiService.deletePost(this.newDesc).then(
      resolve => {  
        this.covidComponent.getCovidDesc();
      }); 
  }
  remove() {

    this.covidApiService.remove().then(
      resolve => {
        this.covidComponent.getCovidDesc();
      }); 
  }

}
