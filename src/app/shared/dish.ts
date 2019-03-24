import { Comment } from './comment'
export class Dish {
    id: String;
    name: String;
    image: String;
    Category: String;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}