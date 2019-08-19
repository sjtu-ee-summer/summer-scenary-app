package com.example.user.travelnotes.entity;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "page")
public class Page {

    @Id
    @Column(name = "id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;

    private int template;

    @OneToMany()
    private List<Img> imgSet;

//    private  int seq;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getTemplate() {
        return template;
    }

    public void setTemplate(int template) {
        this.template = template;
    }

    public List<Img> getImgSet() {
        return imgSet;
    }

    public void setImgSet(List<Img> imgSet) {
        this.imgSet = imgSet;
    }

//    public int getSeq() {
//        return seq;
//    }
//
//    public void setSeq(int seq) {
//        this.seq = seq;
//    }
}
