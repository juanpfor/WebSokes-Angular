import { Component, ElementRef, OnInit, ViewChild , Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SockectService } from '../../services/socket/sockect.service';

@Component({
  selector: 'app-room-forum',
  templateUrl: './room-forum.component.html',
  styleUrls: ['./room-forum.component.css']
})
export class RoomForumComponent implements OnInit {

  room: any

  message : string

  @ViewChild('messageForm')messageForm : ElementRef
  @ViewChild('chat')chat : ElementRef


  constructor(
    private activeRoute: ActivatedRoute,
    private cookie : CookieService,
    public socketservice : SockectService,
    private render2 : Renderer2,
  ) { }

  ngOnInit() {
   this.room =  this.activeRoute.snapshot.paramMap.get('room')
   this.cookie.set('name_room' , this.room)
  }

  sendmessage(e : any ) {
    this.messageForm.nativeElement.focus();
    e.preventDefault()
    this.socketservice.Emiter(this.message)
    // console.log(this.message);

    this.message = ''
  }


}
