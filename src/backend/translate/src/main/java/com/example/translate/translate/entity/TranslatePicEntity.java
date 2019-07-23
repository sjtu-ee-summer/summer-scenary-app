package com.example.translate.translate.entity;

import javax.persistence.*;

@Entity
public class TranslatePicEntity {

        @Id
        @Column(name = "id", nullable = false)
        @GeneratedValue(strategy = GenerationType.AUTO)
        private long id;

        @Lob
        private String image;

        @Lob
        private String result;

        @Lob
        private String resultInBase64;

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

    public String getResultInBase64() {
        return resultInBase64;
    }

    public void setResultInBase64(String resultInBase64) {
        this.resultInBase64 = resultInBase64;
    }
}
