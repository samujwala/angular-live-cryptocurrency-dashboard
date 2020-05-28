import { Component, OnInit } from '@angular/core';
import { ICryptoCurrency } from '../crypto-currency';
import { CryptoCurrencyService } from '../crypto-currency.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-crypto-currency-list',
  templateUrl: './crypto-currency-list.component.html',
  styleUrls: ['./crypto-currency-list.component.css']
})
export class CryptoCurrencyListComponent implements OnInit {

  cryptoCurrencyList: ICryptoCurrency[] = [];
  containerHeight:string;

  constructor(private cryptocurrencyService: CryptoCurrencyService) { }

  ngOnInit() {
    this.getcryptoList();
    this.setContainerHeight();
  }

  /*function call to return all the currency list*/
  getcryptoList(): void {
    this.cryptocurrencyService.getList()
      .subscribe(response => this.setCurrencyList(response));
  }

  setCurrencyList(response): void {
    this.cryptoCurrencyList = response.data;
    this.cryptocurrencyService.setCryptoCurrencyList(response.data);
  }

  /*function call to remove item from the currency list*/
  removeItem(name):void{
    this.cryptocurrencyService.removeItem(name);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setContainerHeight();
  }
  /*function will calculate the height for container by subt accordian height */
  setContainerHeight():void{
    this.containerHeight = window.innerHeight-80+'px'
  }

}
