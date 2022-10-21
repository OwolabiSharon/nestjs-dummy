import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  
  @Entity('note')
  export class NoteEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ default: '' })
    title: string;

    @Column({ default: '' })
    body: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
  }
  