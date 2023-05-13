import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    private power: number

    @Column()
    private time: number

    constructor(power: number, time: number) {
        this.power = power
        this.time = time
    }
}
