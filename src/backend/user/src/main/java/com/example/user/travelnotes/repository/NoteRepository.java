package com.example.user.travelnotes.repository;

import com.example.user.travelnotes.entity.Note;
import org.springframework.data.repository.CrudRepository;

public interface NoteRepository extends CrudRepository<Note,Long> {


}
