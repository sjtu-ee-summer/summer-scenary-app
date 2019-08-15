package com.example.user.entity;

import javax.persistence.*;

@Entity
@Table(name = "userad")
public class UserAd {

    @Id
    @Column(name = "id")
    private Long id;

    @OneToOne
    @MapsId
    private User user;

    private int nature;

    private int culture;

    private int geotourism;

    private int medical;

    private int religous;

    private int culinary;

    private int fashion;

    private int music;

    private int sex;

    private int local;

    private int oversea;

    private int technology;

    private int citylife;

    private int sea;

    private int shopping;

    private int hotel;

    private int homestay;

    private int pricebudget;

    private int pricemoderate;

    private int priceexpensive;

    private int goodcomment;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getNature() {
        return nature;
    }

    public int getCulture() {
        return culture;
    }

    public void setCulture(int culture) {
        this.culture = culture;
    }

    public int getGeotourism() {
        return geotourism;
    }

    public void setGeotourism(int geotourism) {
        this.geotourism = geotourism;
    }

    public void setNature(int nature) {
        this.nature = nature;
    }

    public int getMedical() {
        return medical;
    }

    public void setMedical(int medical) {
        this.medical = medical;
    }

    public int getReligous() {
        return religous;
    }

    public void setReligous(int religous) {
        this.religous = religous;
    }

    public int getCulinary() {
        return culinary;
    }

    public void setCulinary(int culinary) {
        this.culinary = culinary;
    }

    public int getFashion() {
        return fashion;
    }

    public void setFashion(int fashion) {
        this.fashion = fashion;
    }

    public int getMusic() {
        return music;
    }

    public void setMusic(int music) {
        this.music = music;
    }

    public int getSex() {
        return sex;
    }

    public void setSex(int sex) {
        this.sex = sex;
    }

    public int getLocal() {
        return local;
    }

    public void setLocal(int local) {
        this.local = local;
    }

    public int getOversea() {
        return oversea;
    }

    public void setOversea(int oversea) {
        this.oversea = oversea;
    }

    public int getTechnology() {
        return technology;
    }

    public void setTechnology(int technology) {
        this.technology = technology;
    }

    public int getGoodcomment() {
        return goodcomment;
    }

    public void setGoodcomment(int goodcomment) {
        this.goodcomment = goodcomment;
    }

    public int getPriceexpensive() {
        return priceexpensive;
    }

    public void setPriceexpensive(int priceexpensive) {
        this.priceexpensive = priceexpensive;
    }

    public int getPricemoderate() {
        return pricemoderate;
    }

    public void setPricemoderate(int pricemoderate) {
        this.pricemoderate = pricemoderate;
    }

    public int getPricebudget() {
        return pricebudget;
    }

    public void setPricebudget(int pricebudget) {
        this.pricebudget = pricebudget;
    }

    public int getHomestay() {
        return homestay;
    }

    public void setHomestay(int homestay) {
        this.homestay = homestay;
    }

    public int getHotel() {
        return hotel;
    }

    public void setHotel(int hotel) {
        this.hotel = hotel;
    }

    public int getShopping() {
        return shopping;
    }

    public void setShopping(int shopping) {
        this.shopping = shopping;
    }

    public int getSea() {
        return sea;
    }

    public void setSea(int sea) {
        this.sea = sea;
    }

    public int getCitylife() {
        return citylife;
    }

    public void setCitylife(int citylife) {
        this.citylife = citylife;
    }

}
