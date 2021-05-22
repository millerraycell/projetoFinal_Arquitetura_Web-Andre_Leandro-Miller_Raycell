import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm'
import Image from './ImageModel'
import User from './UserModel';

@Entity('blogs')
export default class Blog {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    title:string;

    @Column()
    body:string;

    @OneToMany(() => Image, image => image.blog, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: "blog_id"})
    images: Image[];
    
    @ManyToOne(() => User, user => user.blogs)
    @JoinColumn({name: "author"})
    user: User;
}