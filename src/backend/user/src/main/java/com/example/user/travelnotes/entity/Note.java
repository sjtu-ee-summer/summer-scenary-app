package com.example.user.travelnotes.entity;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "note")
public class Note {
    @Id
    @Column(name = "id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany()
    private List<Page> pageSet;

    private Long uid;

    private int pagenumber;

    private int state;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Page> getPageSet() {
        return pageSet;
    }

    public void setPageSet(List<Page> pageSet) {
        this.pageSet = pageSet;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public int getPagenumber() {
        return pagenumber;
    }

    public void setPagenumber(int pagenumber) {
        this.pagenumber = pagenumber;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
}
