package com.example.gateway;

public class User {
    private Long userId;

    private String username;

    private String password;

    private String phone="null";

    private String email;

    private int is_admin=0;

    private int vip=0;

    private String sex="null";

    private int age=0;

    private String address="null";

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public int getIs_admin() {
        return is_admin;
    }

    public void setIs_admin(int is_admin) {
        this.is_admin = is_admin;
    }

    public int getVip() {
        return vip;
    }

    public void setVip(int vip) {
        this.vip = vip;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getIsAdmin() {
        return is_admin;
    }

    public void setIsAdmin(int is_admin) {
        this.is_admin = is_admin;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    // using Spring provided password hashing encryption algorithm to encrypt password
    public void setPassword(String password) {
        this.password = password;

    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public User(Long id, String username, String password) {
        this.userId = id;
        this.username = username;
        this.password = password;
    }
}
