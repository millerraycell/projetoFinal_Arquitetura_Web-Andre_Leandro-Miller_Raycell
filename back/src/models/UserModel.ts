import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'
import Blog from './BlogModel';

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    email: string;
    
    @Column()
    nome: string;

    @Column()
    password: string;

    @Column()
    admin: boolean
    
    @OneToMany(() => Blog, blog => blog.user ,{
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: "author"})
    blogs: Blog[]
}