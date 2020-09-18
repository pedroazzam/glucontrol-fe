import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageModel } from './message';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HelloWorldService {
    constructor(private http: HttpClient) {
    }
    executeHelloWorldService() {
        console.log('Passou aqui executeHelloWorldService inicio');
        return this.http.get<MessageModel>('http://glucontrol.pedroazzam.me:8080/api/v1/greeting');
    }

    executeHelloWorldService2() {
        console.log('Passou aqui executeHelloWorldService2 inicio');
        return this.http.get('http://glucontrol.pedroazzam.me:8080/api/admin/user/all');
    }
    
}