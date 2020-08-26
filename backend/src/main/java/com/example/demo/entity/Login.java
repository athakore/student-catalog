package com.example.demo.entity;
import javax.persistence.*;

//Login Entity
@Entity
@Table(name = "login")
public class Login {

    //Map fields to table columns
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id") //This is mapping the primary key to the id column in the table.
    private int id;

    @Column(name = "username") //This will map the username field to the column named username in the table.
    private String userName;

    @Column(name = "password") //This will map the password field to the column named password in the table.
    private String password;

    @Column(name = "teacher") //This will map the teacher field to the column named teacher in the table.
    private boolean teacher;

    public Login() {
    }

    public Login(int id, String userName, String password, boolean teacher) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.teacher = teacher;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isTeacher() {
        return teacher;
    }

    public void setTeacher(boolean teacher) {
        this.teacher = teacher;
    }
}
