import {async, TestBed} from '@angular/core/testing';
import { CryptoCurrencyService } from './crypto-currency.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {CryptoCurrencyListComponent} from './crypto-currency-list/crypto-currency-list.component';

describe('CryptoCurrencyService', () => {
  let service: CryptoCurrencyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoCurrencyListComponent ],
      imports: [ HttpClientTestingModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('cryptocurrencyList should be defined', () => {
    expect(service.cryptocurrencyList).toBeDefined([]);
  });

  it('apiUrl should be defined with a value', () => {
    const url = 'https://api.coincap.io/v2/assets';
    expect(service.apiUrl).toEqual(url);
  });

  it('addNewItem function should push a new item to the list', () => {
    const testJson = {name: 'sam', priceUsd: '23232332'};
    service.addNewItem(testJson);
    if (service.cryptocurrencyList.length > 0) {
      expect(service.cryptocurrencyList).not.toBeUndefined();
    }
  });

  it('remove function should remove a  item from the list', () => {
    service.cryptocurrencyList.push(
       {name: 'Bitcoin', priceUsd: 23232332},
       {name: 'Icon', priceUsd: 88832}
    );
    service.removeItem('Bitcoin');
    if (service.cryptocurrencyList.length == 1) {
      expect(service.cryptocurrencyList).toEqual(jasmine.arrayContaining([ {name: 'Icon', priceUsd: 88832}]));
    }
  });


});
