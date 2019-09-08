package com.example.user.controller;

import com.example.user.entity.*;
import com.example.user.repository.DetailSceneRepository;
import com.example.user.repository.ImgSceneRepository;
import com.example.user.repository.InterestHistoryRepository;
import com.example.user.service.BehaviorService;
import com.example.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.*;

@RestController
@RequestMapping(value = "/behavior")
public class behavior {
    @Autowired
    private BehaviorService behaviorService;
//    @Autowired
//    private ImgSceneRepository imgSceneRepository;
    @Autowired
    private InterestHistoryRepository interestHistoryRepository;
    @Autowired
    private DetailSceneRepository detailSceneRepository;
    @Autowired
    private UserRepository userRepository;

    Set<Cluster> clustersContainer = new HashSet<Cluster>();

    @ResponseBody
    @RequestMapping("/getUser")
    public User getUser(@RequestParam int id) {
        return behaviorService.getUser(id);
    }

    @ResponseBody
    @RequestMapping("/getAll")
    public List<User> getAll() {
//        behaviorService.getSimilar();
        return behaviorService.getAll();
    }

    @ResponseBody
    @RequestMapping("/getsimilar")
    public Set<Cluster> getSimilar() {
        clustersContainer = behaviorService.getSimilar();
        long temp1;
        long temp3;
        for (Cluster c : clustersContainer) {
            List<Point> temp2 = c.getMembers();
            for (Point p : temp2) {
                temp3 = p.getUser_id();
                temp1 = p.getClusterid();
                User u = userRepository.findUserById(temp3);
                u.setCluster_id(temp1);
                userRepository.save(u);
            }
        }

        return clustersContainer;
//        return behaviorService.getAll();
    }

    @RequestMapping("/getinterest")
    public Set<Long> getinterest(@RequestParam long id) {
        User u1 = userRepository.findUserById(id);
        Set<Long> interest = new HashSet<Long>();
        for (Cluster c : clustersContainer) {
            if (c.getId() == u1.getCluster_id()) {
                // found! get history!
                List<Point> memberpoint = c.getMembers();
                for (Point p : memberpoint) {
                    if (p.getUser_id() != id) {
                        // got other user user_id!
                        // continue to get their history
                        interestHistory ih = interestHistoryRepository.findTopByUser_idOrderByIdDesc(p.getUser_id());
                        interest.add(ih.getScene_id());
                    }
                }

                continue;
            }
        }

        if (interest.size() >= 8) {
            return interest;
        }

        Long qty = interestHistoryRepository.countAll();
        while (interest.size() < 8) {
            // get random scene_id
            long idx = (long)(Math.random() * qty);
            interest.add(idx);
        }

        return interest; // return set of scene_id
    }

    @ResponseBody
    @RequestMapping("/insertuser")
    public void insertUser() {
        behaviorService.insertUser();
    }

    @ResponseBody
    @RequestMapping("/getimg")
    public void getImg(@RequestParam long id) {
        detailscene d = detailSceneRepository.findById(id);
        String tempAttract = d.getAttract();
//        imgscene i = imgSceneRepository.findimgsceneByAttract(tempAttract);

//        return i;
    }

    @RequestMapping("/setinterest")
    public void setvisitinterest(@RequestParam long scene_id, @RequestParam long user_id) {
        interestHistory i = new interestHistory();
        i.setUser_id(user_id);
        i.setScene_id(scene_id);

        interestHistoryRepository.save(i);
    }

    @ResponseBody
    @RequestMapping("/getscene")
    public detailscene getScene(@RequestParam long id) {
        detailscene d = detailSceneRepository.findById(id);

        return d;
    }

    @ResponseBody
    @RequestMapping("/addBc1")
    public void addc1(@RequestParam long id) {
        behaviorService.addBehaviorC1(id);
    }

    @ResponseBody
    @RequestMapping("/addBc2")
    public void addc2(@RequestParam long id) {
        behaviorService.addBehaviorC2(id);
    }

    @ResponseBody
    @RequestMapping("/addBc3")
    public void addc3(@RequestParam long id) {
        behaviorService.addBehaviorC3(id);
    }

    @ResponseBody
    @RequestMapping("/addBc4")
    public void addc4(@RequestParam long id) {
        behaviorService.addBehaviorC4(id);
    }

    @ResponseBody
    @RequestMapping("/addBc5")
    public void addc5(@RequestParam long id) {
        behaviorService.addBehaviorC5(id);
    }

}
