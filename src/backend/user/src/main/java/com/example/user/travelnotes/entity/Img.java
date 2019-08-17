package com.example.user.travelnotes.entity;


import javax.persistence.*;

@Entity
@Table(name = "img")
public class Img {

    @Id
    @Column(name = "id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String imgbase64;

//    private int seq;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImgbase64() {
        return imgbase64;
    }

    public void setImgbase64(String imgbase64) {
        this.imgbase64 = imgbase64;
    }

//    public int getSeq() {
//        return seq;
//    }
//
//    public void setSeq(int seq) {
//        this.seq = seq;
//    }
}
