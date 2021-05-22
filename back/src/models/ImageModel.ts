import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Blog from './BlogModel';

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    path:string;

    @ManyToOne(() => Blog, blog => blog.images)
    @JoinColumn({name : 'blog_id'})
    blog: Blog;    
}