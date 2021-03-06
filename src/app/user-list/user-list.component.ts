import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
     this.userService.findAll().subscribe(data => {
       this.users = data;
     });
     console.log('Passo aqui ngOnInit fin')
  }

  teste(){
    console.log('Passo aqui teste')
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
