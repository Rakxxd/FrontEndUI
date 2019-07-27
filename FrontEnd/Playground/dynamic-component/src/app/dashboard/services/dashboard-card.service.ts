import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {DashboardCard} from '../cards/dashboard-card';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'


const baseUrl = 'http://localhost:3000/DashboardCard';

@Injectable()
export class DashboardCardsService {

  private _cards: BehaviorSubject<DashboardCard[]> = new BehaviorSubject<DashboardCard[]>([]);
  cardsArray: DashboardCard[]=[];

  
  
  constructor(private httpservice : HttpClient) {
    this.httpservice.get(baseUrl).subscribe(resp => console.log(resp));
  }

  

  addCard(card: any): void {
    const bodyo = JSON.stringify(card);
    console.log(bodyo);
    this.httpservice.post(baseUrl, card) 
      .subscribe(resp => console.log(resp));
  }

  get cards(): BehaviorSubject<DashboardCard[]> {
    return this._cards;
  }

  deleteCard(): Observable<Array<any>>{
    console.log();
    
    return this.httpservice.get(baseUrl).map(resp => resp as Array<any>)
    .do(rply => console.log(rply));
    
    //.map(resp => console.log(resp));
    //.map(resp => resp as Array<Contact>);
  }

  
  getAllCards(): Observable<Array<DashboardCard>>{
    return new Observable(
        observer => {
          observer.next(this.cardsArray)              
        }
    );
}

lll(name:string){
  console.log(name);
  this.cardsArray.forEach((casrd)=> {
    console.log(name);
    if(casrd.input.name.value == name)
      console.log("Matched ${name}")
  });
}



//   deleteCard(data: any) {
//     let roomArr = this._cards.getValue();
//     console.log(this._cards);
//     console.log(this.cards);
//     console.log(this._cards.getValue());

//     // roomArr.forEach((item, index) => {
//     //     if(item === data) { roomArr.splice(index, 1); }
//     // });
//     // this._cards.next(roomArr);
// }


}
