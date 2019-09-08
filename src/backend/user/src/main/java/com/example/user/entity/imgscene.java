package com.example.user.entity;

import javax.persistence.*;

@Entity
@Table(name="imgscene")
public class imgscene {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String attract;

    @Lob
    private String intro;

    @Lob
    private String url;

    @Lob
    private String smallimage;

    @Lob
    private String iconimage;

    @Lob
    private String middleimage;

    @Lob
    private String bigmiddleimage;

    @Lob
    private String bigimage;

    public String getAttract() {
        return attract;
    }

    public void setAttract(String attract) {
        this.attract = attract;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getSmallimage() {
        return smallimage;
    }

    public void setSmallimage(String smallimage) {
        this.smallimage = smallimage;
    }

    public String getIconimage() {
        return iconimage;
    }

    public void setIconimage(String iconimage) {
        this.iconimage = iconimage;
    }

    public String getMiddleimage() {
        return middleimage;
    }

    public void setMiddleimage(String middleimage) {
        this.middleimage = middleimage;
    }

    public String getBigmiddleimage() {
        return bigmiddleimage;
    }

    public void setBigmiddleimage(String bigmiddleimage) {
        this.bigmiddleimage = bigmiddleimage;
    }

    public String getBigimage() {
        return bigimage;
    }

    public void setBigimage(String bigimage) {
        this.bigimage = bigimage;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
