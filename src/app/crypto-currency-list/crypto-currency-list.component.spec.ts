import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCurrencyListComponent } from './crypto-currency-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CryptoCurrencyListComponent', () => {
  let component: CryptoCurrencyListComponent;
  let fixture: ComponentFixture<CryptoCurrencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoCurrencyListComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
