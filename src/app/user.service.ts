import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import StudentsData from 'src/assets/data.json';
@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  pauseStartCount = new Subject<{ scount: number; pcount: number }>();
  countLimit = new Subject<{ count: number; type: string }>();
  countState = new Subject<string>();
  currentVal: number = 0;
  students: any[] = StudentsData.Students;
  getPersonsData() {
    return this.http.get('http://localhost:9010/person');
  }
  public getJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
  }
}
