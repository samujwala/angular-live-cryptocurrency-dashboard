import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoCurrencyService {
  cryptocurrencyList: [{}] = [{}];
  apiUrl:string = 'https://api.coincap.io/v2/assets';
  constructor(private http: HttpClient) {
}

  /*function will return all the currency list*/
  getList(): any {
    return (this.http.get(this.apiUrl));
  }

  /*function will set the response data of assets to cryptocurrencyList */
  setCryptoCurrencyList(response): void{
    this.cryptocurrencyList = response;
  }

  /*function will remove item from currency list*/
  removeItem(name: string): void {
    for (let obj = 0; obj < this.cryptocurrencyList.length; obj++){
      // @ts-ignore
      if ((this.cryptocurrencyList)[obj].name === name){
        this.cryptocurrencyList.splice(obj,1);
      }else {
        console.log('remove failed due to name mismatch');
      }
    }
  }

  /*function will add new item to the currency list*/
  addNewItem(item:object): void{
    // @ts-ignore
    this.cryptocurrencyList.push(item);
  }
}
