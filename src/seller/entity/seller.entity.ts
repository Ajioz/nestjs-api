import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Seller{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    
    @Column()
    occupation: string;
    
    @Column()
    age: number;

    @Column()
    password: string;

}