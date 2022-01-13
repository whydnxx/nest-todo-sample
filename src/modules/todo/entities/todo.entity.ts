import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'todos',
})
export class Todo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  checked: boolean;
}
