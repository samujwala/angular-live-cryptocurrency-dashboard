import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddNewCryptoComponent } from './add-new-crypto.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

describe('AddNewCryptoComponent', () => {
  let component: AddNewCryptoComponent;
  let fixture: ComponentFixture<AddNewCryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCryptoComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
