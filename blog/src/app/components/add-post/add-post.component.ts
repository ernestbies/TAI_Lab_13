import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  public post = {
    title: '',
    url: '',
    content: '',
  };

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.createPost(this.post).subscribe( (post) => {
      this.router.navigate(['/blog']);
    });
  }
}
