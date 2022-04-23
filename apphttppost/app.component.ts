import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import { Router } from '@angular/router';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  
  posts = new Array<Post>();
    
  constructor(private service:PostService) {}
    
  ngOnInit() {
      this.service.getPosts().subscribe(response => {
          this.posts = response.map(item => 
            {
              return new Post( 
                  item.body,
                  item.id,
                  item.title,
                  item.userId
              );
            });
        });
  
  //this.service.createUser();
      }

      onClickSubmit(userdetails: any) {
        alert("User details " + userdetails.name);
        this.service.createUser(userdetails);
     }
}