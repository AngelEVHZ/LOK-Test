import {UserDto} from "./user.dto";
export interface PaginationUserDto {
  data:Array<UserDto>;
  total_pages: number;
  page:number;
}