import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {ContactComponent} from './components/contact/contact.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ScrollToTopComponent} from './scroll-to-top/scroll-to-top.component';
import {BlogItemComponent} from './components/blog-item/blog-item.component';
import {BlogItemTextComponent} from './components/blog-item-text/blog-item-text.component';
import {BlogItemImageComponent} from './components/blog-item-image/blog-item-image.component';
import {BlogItemDetailsComponent} from './components/blog-item-details/blog-item-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import {SummaryPipe} from './pipes/summary.pipe';
import {SearchBarComponent} from './shared/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import {BlogHomeComponent} from './components/blog-home/blog-home.component';
import {FilterPipe} from './pipes/filter.pipe';
import {TextFormatDirective} from './directives/text-format.directive';
import {SelectizeComponent} from './components/selectize/selectize.component';
import {AddPostComponent} from './components/add-post/add-post.component';
import {AuthService} from "./services/auth/auth.service";
import {LoginComponent} from './components/login/login.component';
import {AuthInterceptor} from "./services/auth/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    NavbarComponent,
    ScrollToTopComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    BlogHomeComponent,
    FilterPipe,
    TextFormatDirective,
    SelectizeComponent,
    AddPostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
