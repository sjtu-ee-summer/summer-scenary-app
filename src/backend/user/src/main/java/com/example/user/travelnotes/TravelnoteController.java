package com.example.user.travelnotes;


import com.example.user.travelnotes.entity.Concequence;
import com.example.user.travelnotes.entity.Travelnote;
import com.example.user.travelnotes.repository.ConcequenceRepository;
import com.example.user.travelnotes.repository.SnoteRepository;
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

    @Autowired
    SnoteRepository snoteRepository;

    @RequestMapping("/save")
    public String save(@RequestParam String note,
                       @RequestParam int state,
                       @RequestParam String title,
                       @RequestParam Long uid,
                       @RequestParam int height){
        Travelnote travelnote = new Travelnote();
        travelnote.setNote(note);
        travelnote.setState(state);
        travelnote.setTitle(title);
        travelnote.setUid(uid);
        travelnote.setHeight(height);
        Concequence c = concequenceRepository.findById(2l).get();
        Long num = c.getNum();
        travelnote.setId(num);
        c.setNum(num+1);
        snoteRepository.deleteAllByUid(uid);
        concequenceRepository.save(c);
        travelnoteRepository.save(travelnote);
        return travelnote.toString();
    }


    @RequestMapping("/uid/{uid}")
    public List<Travelnote> uid(@PathVariable(name = "uid")Long uid) {
        List<Travelnote> travelnote = travelnoteRepository.findAllByUid(uid);
        return travelnote;
    }

    @RequestMapping("/all")
    public List<Travelnote> all() {
        return travelnoteRepository.findAllByState(0);
    }

    @RequestMapping("/release")
    public String release(@RequestParam Long id){
        if(travelnoteRepository.existsById(id)){
            Travelnote t = travelnoteRepository.findById(id).get();
            t.setState(0);
            travelnoteRepository.save(t);
            return "success";
        }else {
            return "id donot exists";
        }
    }
}
