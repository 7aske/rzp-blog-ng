import { Component, OnInit } from '@angular/core';
import { Post } from "../../../../common/src/@types/entity/Post";
import { PostService } from "../../services/post.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: Post;

  constructor(private postService: PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.fetchPost(parseInt(id, 10))
  }

  private async fetchPost(id: number){
    this.post = await this.postService.getById(id);
  }

}
