import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
          this.user = new User();
         }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoLogin());
  }
 
  gotoUserList() {
    this.router.navigate(['/users']);
  }
  
  gotoLogin() {
    this.router.navigate(['/login']);
  }

}
