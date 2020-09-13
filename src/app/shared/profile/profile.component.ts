import { Component, OnInit, Input } from '@angular/core';
import { UserDto } from "@dto/user/user.dto";
import { PostDto } from "@dto/user/post.dto";
import { UserService } from "@services/user.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() public user !: UserDto;
  @Input() public index: number;
  @Input() isEdition: boolean;
  delay: string;
  posts: Array<PostDto>;
  postLimit: number = 2;
  constructor(private readonly userService: UserService) {
    this.posts = [];
  }

  async ngOnInit() {
    if (!this.index) this.index = 0;
    this.delay = ((this.index + 1) * 0.3) + "s";

    if (this.isEdition) {
      this.fetchUserPosts();
    }
  }

  async fetchUserPosts() {
    const posts = await this.userService.getPosts(this.user.id);
    if (posts.length > 0) {
      this.posts = posts;
    }
  }

  getName() {
    return this.user.first_name + " " + this.user.last_name;
  }

  getTopPosts() {
    return this.posts.filter((post, index) => index < this.postLimit);
  }


  removePost(post: PostDto) {
    Swal.fire({
      title: 'Do you want to delete this post?',
      showDenyButton: true,
      confirmButtonText: `Delete`,
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.posts.findIndex(_post => _post.id == post.id);
        if (index >= 0) {
          this.posts.splice(index, 1);
        }
        Swal.fire('Post deleted', '', 'success')
      }
    });
  }
}
