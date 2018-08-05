import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { listStagger } from '../animations/animations';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [
    listStagger
  ]
})
export class PostsComponent implements OnInit {
posts$:object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(data => this.posts$=data);
  }

}
