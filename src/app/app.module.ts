import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoCurrencyListComponent } from './crypto-currency-list/crypto-currency-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewCryptoComponent } from './add-new-crypto/add-new-crypto.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CryptoCurrencyListComponent,
    DashboardComponent,
    AddNewCryptoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
