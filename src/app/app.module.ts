import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DramasComponent } from './common/dramas/dramas.component';
import { LatestBuzzComponent } from './common/dramas/latest-buzz/latest-buzz.component';
import { ViewComponent } from './common/view/view.component';
import { ReviewsComponent } from './common/reviews/reviews.component';
import { ReviewPipe } from './pipes/review.pipe';
import { FooterComponent } from './common/footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DramasComponent,
    LatestBuzzComponent,
    ViewComponent,
    ReviewsComponent,
    ReviewPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
