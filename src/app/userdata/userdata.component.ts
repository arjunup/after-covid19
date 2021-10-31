import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.sass']
})
export class UserdataComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onClickSubmit(form:any, e: any) {
    console.log("You have entered : ", form);
    console.log(form.value);
    e.target.submit();
 }

}
