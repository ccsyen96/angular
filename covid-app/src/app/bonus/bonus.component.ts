import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BonusService } from '../bonus.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';

@Component({
  
  selector: 'app-bonus',
  styleUrls: ['./bonus.component.css'],
  templateUrl: './bonus.component.html',

})
export class BonusComponent implements OnInit {
  public data: any;

  public bonusTotalDesc: any[] = [];

  public bonus: any;

  public bonusObject: any;

  public newBonus: any;

  public updateBonus: any;

  public postBonus: any;

  constructor(
    private httpClient: HttpClient,
    public bonusService: BonusService,
    private confirmationDialogService: ConfirmationDialogService

  ) { }

  ngOnInit():void{
    
    this.bonusObject = {};
    this.updateBonus = {};
    this.postBonus = {};
    this.bonusObject = this.data;
    this.getBonusDesc();

    console.log("Bonus Component Inited");  
   
  }

  getBonusDesc(): any {
    this.bonusService.getBonusDesc().subscribe((data: any) => {
      console.log(data);
      this.bonusTotalDesc = data;
      console.log("Total of Description Column Row ---> " + this.bonusTotalDesc.length);
    });

    return this.bonusTotalDesc;
  }

  onSelectDesc(desc: any) {

    console.log("desc-->" + this.bonus);
    if (this.bonus[0]) {
      this.bonusObject = this.bonus[0];
      console.log("bonus id-->" + this.bonusObject.id);
      console.log("bonus description-->" + this.bonusObject.description);
    }
  }

  deleteDesc() {

    console.log("bonusTotalDesc length-->" + this.bonusTotalDesc.length);

    if (this.bonusTotalDesc.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "List is Empty");
    }
    else {
      this.bonusService.deleteDesc(this.bonusObject.id).then(
        resolve => {
          this.getBonusDesc();
        });
    }
  }

  addDesc() {

    this.bonusService.addDesc(this.newBonus).then(
      resolve => {
        this.getBonusDesc();
      });
  }

  onSelectUpdateDesc(desc: any) {

    console.log("updateBonus--> " + this.updateBonus);
    if (this.bonus[0]) {
    
      let clonedDesc = Object.assign({}, this.bonus[0]);
      // use a new cloned Object to prevent pass by reference value in the class
      this.updateBonus = clonedDesc;
      console.log("updateBonus id--> " + this.updateBonus.id);
      console.log("updateBonus description--> " + this.updateBonus.description);
    }
  }
  
  putDesc() {

    this.bonusService.putDesc(this.updateBonus).then(
      resolve => {
        this.getBonusDesc();
      });
  }

  addPost() {

    this.bonusService.addPost(this.postBonus).then(
      resolve => {
        // if the method below being called using async way, then the table desc wont be updated accordingly after data added
        this.getBonusDesc();
      }); 
  }
  deletePost() {

    this.bonusService.deletePost(this.newBonus).then(
      resolve => {
        this.getBonusDesc();
      }); 
  }
}
