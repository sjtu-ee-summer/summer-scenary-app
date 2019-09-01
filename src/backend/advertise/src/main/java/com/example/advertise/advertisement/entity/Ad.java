package com.example.advertise.advertisement.entity;


import javax.persistence.*;

@Entity
@Table(name="ad")
public class Ad {
    @Id
    @Column(name="id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String entername;

    private String title;

//    @Lob
//    private byte[] picture;

    @Lob
    private String base64picture;

//    @Lob
//    private byte[] video;

    @Lob
    private String detail;

    private Long uid;

    private int enable;

    public int getEnable() {
        return enable;
    }

    public void setEnable(int enable) {
        this.enable = enable;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEntername() {
        return entername;
    }

    public void setEntername(String entername) {
        this.entername = entername;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

//    public byte[] getPicture() {
//        return picture;
//    }
//
//    public void setPicture(byte[] picture) {
//        this.picture = picture;
//    }
//
//    public byte[] getVideo() {
//        return video;
//    }
//
//    public void setVideo(byte[] video) {
//        this.video = video;
//    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getBase64picture() {
        return base64picture;
    }

    public void setBase64picture(String base64picture) {
        this.base64picture = base64picture;
    }
}
