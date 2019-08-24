package com.example.user.travelnotes;


import com.example.user.travelnotes.entity.Concequence;
import com.example.user.travelnotes.entity.Travelnote;
import com.example.user.travelnotes.repository.ConcequenceRepository;
import com.example.user.travelnotes.repository.TravelnoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/travelnote")
public class TravelnoteController {

    @Autowired
    TravelnoteRepository travelnoteRepository;

    @Autowired
    ConcequenceRepository concequenceRepository;

    @RequestMapping("/save")
    public String save(@RequestParam String note,
                       @RequestParam int state,
                       @RequestParam String title,
                       @RequestParam Long uid){
        Travelnote travelnote = new Travelnote();
        travelnote.setNote(note);
        travelnote.setState(state);
        travelnote.setTitle(title);
        travelnote.setUid(uid);
        Concequence c = concequenceRepository.findById(2l).get();
        Long num = c.getNum();
        travelnote.setId(num);
        c.setNum(num+1);
        concequenceRepository.save(c);
        travelnoteRepository.save(travelnote);
        return travelnote.toString();
    }


    @RequestMapping("/uid/{uid}")
    public String uid(@PathVariable(name = "uid")Long uid) {
        Travelnote travelnote = travelnoteRepository.findByUid(uid).get();
        return travelnote.toString();
    }

    @RequestMapping("/all")
    public List<Travelnote> all() {
        return travelnoteRepository.findAllByState(1);
    }
}
