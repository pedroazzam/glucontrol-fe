import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelloWorldService } from '../hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  welcomeMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private helloWorldService: HelloWorldService,
    ) { }

  ngOnInit() {
    console.log('passou aqui hello-world.component inicio');
    this.helloWorldService.executeHelloWorldService2().subscribe(res => {
      console.log(res);
    });
    console.log('passou aqui hello-world.component fim');


    // console.log('passou aqui hello-world.component inicio');
    // this.helloWorldService.executeHelloWorldService().subscribe((res) => {
    //   this.welcomeMessage = res.content;
    //   console.log('passou aqui hello-world.component fim: ' + res.content);
    // });
  }


}