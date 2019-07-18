package com.example.translate.entity;

import javax.persistence.*;

@Entity
public class TranslatePicEntity {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private long id;

        @Lob
        private String image;

        @Lob
        private String result;

        private Long uid;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }
}
