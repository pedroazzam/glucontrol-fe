import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HelloWorldService } from '../hello-world.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn = false;
  welcomeMessage = '';
  userList: UserListComponent

  constructor(private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService,
    private helloWorldService: HelloWorldService,
    //public userList: UserListComponent,
    ) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  handleLogout() {
    this.authenticationService.logout();
  }

  handleHW(){
    // this.helloWorldService.executeHelloWorldService().subscribe((res) => {
    //   this.welcomeMessage = res.content;
    // });

    console.log('passou aqui teste hello-world.component inicio');
    this.helloWorldService.executeHelloWorldService2().subscribe(res => {
      console.log(res);
    });
    console.log('passou aqui teste hello-world.component fim');

    console.log('Passo aqui HW')
    this.router.navigate(['/hello-world']);
    // this.helloWorldComponent.handleHelloWorld();
  }

  handleUN(){
    console.log(this.authenticationService.getLoggedInUserName());
  }

  handleUsers(){
    console.log('Passo aqui handleUsers')
    this.router.navigate(['/users']);
  }

}