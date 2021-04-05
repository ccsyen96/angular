import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MiningService } from '../mining.service';


@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css']
})
export class MiningComponent implements OnInit {

  constructor(        
    // Inject your HTTP Client Service here
    private httpClient: HttpClient,

    // Inject your Mining Service Here
    private miningService: MiningService  ) {}

  ngOnInit(): void {
    // onInit and Constructor difference
    // https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit#:~:text=The%20main%20difference%20between%20constructor,how%20the%20code%20is%20structured.

    // initialize by call the component method here. 
  }

  mining: string = 'mining world';
  
    // related to mining component exercise 
    // Method with response data subscription and assign mining variable with response data
    // Get Method without Service
    public getBasicMiningSubscribe(): any {
      this.httpClient.get(`http://localhost:8091/covid/mining/my`, { responseType: 'text' })
        .subscribe((data: any) => 
                    {
                      // assign HTTP response with local variable
                      this.mining = data;
                    }
                  );   
    }
}
