package com.example.user.service;

import com.example.user.entity.User;
import com.example.user.entity.Cluster;

import com.example.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class BehaviorService {
    @Autowired
    private UserRepository userRepository;

    private List<User> userList = new ArrayList<>();
    private int kNum;                             //簇的个数
    private int iterNum = 10;                     //迭代次数

    private int iterMaxTimes = 100000;            //单次迭代最大运行次数
    private int iterRunTimes = 0;                 //单次迭代实际运行次数
    private float disDiff = (float) 0.01;         //单次迭代终止条件，两次运行中类中心的距离差

    public User getUser(long id) {
        for (User it : userList) {
            if (it.getId() == id) return it;
        }
        return null;
    }

    public List<User> getAll() {
        return userList;
    }

    public int getUserIndex(long id) {
        int i = 0;
        for (User it : userList) {
            if (it.getId() == id) return i;
            i++;
        }
        return -1;
    }

    public Set<Cluster> getSimilar() {
        ArrayList<float[]> dataSet = new ArrayList<float[]>();
        ArrayList<Long> userIdList = new ArrayList<Long>();
        for (User it : userList) {
            dataSet.add(new float[] {it.getC1(), it.getC2(), it.getC3(), it.getC4(), it.getC5()});
            userIdList.add(it.getId());
        }
//        dataSet.add(new float[]{1, 2, 3});
//        dataSet.add(new float[]{3, 3, 3});
//        dataSet.add(new float[]{3, 4, 4});
//        dataSet.add(new float[]{5, 6, 5});
//        dataSet.add(new float[]{8, 9, 6});
//        dataSet.add(new float[]{4, 5, 4});
//        dataSet.add(new float[]{6, 4, 2});
//        dataSet.add(new float[]{3, 9, 7});
//        dataSet.add(new float[]{5, 9, 8});
//        dataSet.add(new float[]{4, 2, 10});
//        dataSet.add(new float[]{1, 9, 12});
//        dataSet.add(new float[]{7, 8, 112});
//        dataSet.add(new float[]{7, 8, 4});

        KMeans kRun = new KMeans(4, dataSet, userIdList);

        Set<Cluster> clusterSet = kRun.run();
        System.out.println("单次迭代运行次数：" + kRun.getIterTimes());
//        for (Cluster cluster : clusterSet) {
//            System.out.println(cluster);
//        }

        return clusterSet;
    }

    public void insertUser() {
        userList.clear();
        List<User> tempList = userRepository.findAll();
        for (User u : tempList) {
            userList.add(u);
        }
    }

    public void addBehaviorC1(long id) {
        int index = getUserIndex(id);
        User old = userList.get(index);
        old.setC1(old.getC1() + 1);
        userList.set(index, old);
    }

    public void addBehaviorC2(long id) {
        int index = getUserIndex(id);
        User old = userList.get(index);
        old.setC2(old.getC2() + 1);
        userList.set(index, old);
    }

    public void addBehaviorC3(long id) {
        int index = getUserIndex(id);
        User old = userList.get(index);
        old.setC3(old.getC3() + 1);
        userList.set(index, old);
    }

    public void addBehaviorC4(long id) {
        int index = getUserIndex(id);
        User old = userList.get(index);
        old.setC4(old.getC4() + 1);
        userList.set(index, old);
    }

    public void addBehaviorC5(long id) {
        int index = getUserIndex(id);
        User old = userList.get(index);
        old.setC5(old.getC5() + 1);
        userList.set(index, old);
    }

}
