import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() handleUserChange = new EventEmitter<UserDto>();
  delay: string;
  posts: Array<PostDto>;
  postLimit: number = 2;
  isEditingFileds: boolean;
  userFullName: string;
  userDescription: string;
  constructor(private readonly userService: UserService) {
    this.posts = [];
    this.isEditingFileds = false;
  }

  async ngOnInit() {
    if (!this.index || this.user.edited) this.index = 0;
    this.delay = ((this.index + 1) * 0.3) + "s";

    if (this.isEdition) {
      this.fetchUserPosts();
    }

    this.userFullName = this.getName();
    this.userDescription = this.user.description;
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

  nextPost() {
    if (this.posts.length > this.postLimit) {
      const firsPost = this.posts[0];
      this.posts.splice(0, 1);
      this.posts.push(firsPost);
    }
  }

  previewPost() {
    if (this.posts.length > this.postLimit) {
      const index = this.posts.length - 1;
      const finalPost = this.posts[index];
      this.posts.splice(index, 1);
      this.posts.unshift(finalPost);
    }
  }

  handleEditionFields() {
    this.isEditingFileds = !this.isEditingFileds;
  }

  saveChanges() {
    const length = this.userFullName.indexOf(" ");
    this.user.first_name = this.userFullName.substr(0, length).trim();
    this.user.last_name = this.userFullName.substr(length + 1).trim();
    this.user.description = this.userDescription;
    this.handleEditionFields();
    this.handleUserChange.emit(this.user);
  }
}
