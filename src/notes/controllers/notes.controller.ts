import { Controller, Post, Body, HttpCode, HttpStatus, Delete, Get, Param, Put, Patch } from '@nestjs/common';
import { Note } from '../models/post.interface';
import { NotesService } from '../services/notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Post()
    @HttpCode(201)
    async createNote(@Body() post: Note){
        const result = await this.notesService.createNote(post);

        return ({
            message: 'Note Created',
            status: 'success',
            code: HttpStatus.OK,
            data: result,
          });
    }

    @Get()
    @HttpCode(200)
    async getNotes(){
        const result = await this.notesService.getNotes();

        return ({
            message: 'Notes',
            status: 'success',
            code: HttpStatus.OK,
            data: result,
          });
    }

    @Get(':id')
    @HttpCode(200)
    async getNotebyId(@Param('id') id: number){
        const result = await this.notesService.getNotebyId(id);

        return ({
            message: 'Note',
            status: 'success',
            code: HttpStatus.OK,
            data: result,
          });
    }

    @Delete(':id')
    async removeNote(@Param('id') id: number){
        const result = await this.notesService.deleteNote(id);
 
        return ({
            message: 'Note deleted',
            status: 'success',
            code: HttpStatus.OK,
            data: result,
          });
    }

    @Patch(':id')
    @HttpCode(201)
    async updateNote(@Param('id') id: number , @Body() post: Note){
        const result = await this.notesService.updateNote(id, post);

        return ({
            message: 'Note updated',
            status: 'success',
            code: HttpStatus.OK,
            data: result,
          });
    }
}
