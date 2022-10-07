package com.organicshopping.fruitshopping;

import javax.persistence.*;

@Entity
@Table(name="Userdetails")
public class Userdetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator="user_id_seq")
    private Long userid;
    private String username;
    private String email;
    private String password;

    public Userdetails() {
    }

    public Userdetails(Long userid, String username, String email, String password) {
        this.userid = userid;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
