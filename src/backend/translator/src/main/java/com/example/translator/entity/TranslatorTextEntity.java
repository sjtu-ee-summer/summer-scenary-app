package com.example.translator.entity;

import javax.persistence.*;

@Entity
public class TranslatorTextEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String text;
}
