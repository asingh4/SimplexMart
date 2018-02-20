import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material';
import { MatButtonModule , MatFormFieldModule , MatInputModule, MatIconModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { route } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponentComponent } from './header-component/header-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    MatButtonModule,RouterModule,MatGridListModule,MatIconModule,
    HttpModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
