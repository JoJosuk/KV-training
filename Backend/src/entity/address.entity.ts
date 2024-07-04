import {Entity,PrimaryGeneratedColumn,Column,DeleteDateColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"
@Entity()
class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    line1: string;

    @Column()
    pincode: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}

export default Address;
