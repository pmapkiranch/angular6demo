import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Observable } from 'rxjs';
import { listStagger } from '../animations/animations';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // Add this:
  animations: [
    listStagger
  ]
})
export class UsersComponent implements OnInit {
  users$: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => this.users$ = data);
  }

}
