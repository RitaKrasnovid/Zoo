import { Image } from './image';

export interface News {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  images: Image[];
}
