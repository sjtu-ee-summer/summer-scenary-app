package com.example.user.travelnotes;


import com.example.user.travelnotes.entity.Concequence;
import com.example.user.travelnotes.entity.Snote;
import com.example.user.travelnotes.repository.ConcequenceRepository;
import com.example.user.travelnotes.repository.SnoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/note")
public class NoteController {


    @Autowired
    private ConcequenceRepository concequenceRepository;

    @Autowired
    private SnoteRepository snoteRepository;

    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }

    @RequestMapping("/body/{id}")
    public String body(@PathVariable(name = "id")int id, @RequestBody String body) {
        if(snoteRepository.existsByUid(id)){
            snoteRepository.deleteAllByUid(id);
        }
        Concequence c = concequenceRepository.findById(2l).get();
        Long num = c.getNum();
        Snote snote = new Snote();
        snote.setId(num);
        snote.setUid(id);
        snote.setNote(body);
        c.setNum(num+1);
        concequenceRepository.save(c);
        snoteRepository.save(snote);
        System.out.println(num);
        System.out.println(id);
        System.out.println(body);
        return body;
    }

    @RequestMapping("/find")
    public String find(@RequestParam int uid){
        if(snoteRepository.existsByUid(uid)){
            Snote snote = snoteRepository.findByUid(uid).get();
            return snote.getNote();
        }else {
            return "no note";
        }
    }
}
