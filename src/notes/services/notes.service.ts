import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteEntity } from '../models/post.entity';
import { Note } from '../models/post.interface';


@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(NoteEntity)
        private readonly notesRepo: Repository<NoteEntity> 
        ) {}

    async createNote( note: Note ){
        try {
            return await this.notesRepo.save(note);
        } catch (error) {
            throw new Error("unsuccesful");
            
        }
        
    }

    async getNotes( ){
        try {
            return await this.notesRepo.find();
        } catch (error) {
            throw error;
        }
        
    }

    async getNotebyId( id: number ){
        try {
            const note = await this.notesRepo.findOneBy({id});
            if (!note) {
                throw new BadRequestException("Note not found");
            } else {
                return note
            }
        } catch (error) {
            throw error
            
        }
        
    }

    async deleteNote( id: number ){
        try {
            const deleted = await this.notesRepo.delete({ id });
            
            if (deleted.affected == 0) {
                throw new BadRequestException("Note not found");
                
            } else {
                return deleted
            }
        } catch (error) {
            throw error
        }
        
    }

    async updateNote( id: number, note: Note ){
        try {
            const updated = await this.notesRepo.update( id, note );
            
            if (updated.affected == 0) {
                throw new BadRequestException("Note not found");
                
            } else {
                return updated
            }
            

        } catch (error) {
            throw error
        }
    }
       
}
