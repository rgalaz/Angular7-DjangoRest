import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { MaterialModule} from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavbarComponent,
    ProductFormComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
  ],

  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
