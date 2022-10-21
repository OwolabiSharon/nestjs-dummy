import { Module } from '@nestjs/common';
import { NotesService } from './services/notes.service';
import { NotesController } from './controllers/notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from './models/post.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([NoteEntity])
    ],
    providers: [NotesService],
    controllers: [NotesController]
})
export class NotesModule {}
