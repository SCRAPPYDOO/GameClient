import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WebsocketService } from './service/web-socket.service';
import { WarcabyComponent } from './pages/warcaby/warcaby.component';
import { GamesComponent } from './pages/games/games.component';
import { routing } from './app.routes';
import { ChatComponent } from './components/chat/chat.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    WarcabyComponent,
    GamesComponent,
    ChatComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
