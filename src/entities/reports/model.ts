import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    power: number

    @Column()
    time: number
}
