import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  constructor(private httpClient: HttpClient, private confirmationDialogService: ConfirmationDialogService) { }

  public getBonusDesc(): any {
    return this.httpClient.get(`http://localhost:8081/covid/get/bonus`);
  }

  public deleteDesc(id: number): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.delete(`http://localhost:8081/bonus/delete?id=` + id).subscribe((data: any) => {
        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        }
      )
    });
  }

  public addDesc(bonus: string): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.get(`http://localhost:8081/bonus/add?bonus=` + bonus).subscribe((data: any) => {

        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        })

    });
  }


  public putDesc(body : any): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.put(`http://localhost:8081/bonus/put`, body).subscribe((data: any) => {

        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        })

    });
  }

  public addPost(body: any): Promise<any> {

    return new Promise((resolve) => {
    return this.httpClient.post(`http://localhost:8081/bonus/post`, body).subscribe((data: any) => {

      console.log(data);
      resolve(data);

    }
      ,
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })

    });
  }
  public deletePost(bonus: string): Promise<any> {

    return new Promise((resolve) => {
    return this.httpClient.delete(`http://localhost:8081/bonus/delete/soap?bonus=`+ bonus).subscribe((data: any) => {

      console.log(data);
      resolve(data);

    }
      ,
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })

    });
  }
}
