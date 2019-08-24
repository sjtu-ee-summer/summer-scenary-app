package com.example.user.travelnotes.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "snote_msg")
public class Travelnote {
    @Id
    private Long id;

    private String note;

    private int state;

    private Long uid;

    private String title;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Travelnote{" +
                "id=" + id +
                ", note='" + note + '\'' +
                ", state=" + state +
                ", uid=" + uid +
                ", title='" + title + '\'' +
                '}';
    }
}
