import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasboardComponent } from './componets/dasboard/dasboard.component';
import { HomeComponent } from './views/home/home.component';
import { RoomForumComponent } from './views/room-forum/room-forum.component';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const { v4: uuidv4 } = require('uuid');


const config: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {
    query: {
      nameQuestion: "Quien gano el oro ?",
      id_Question: uuidv4()
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    HomeComponent,
    RoomForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
