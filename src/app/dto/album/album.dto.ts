import { PhotoDto } from "./photo.dto";
export interface AlbumDto {
  id?: number;
  title: string;
  photos?:Array<PhotoDto>;
}