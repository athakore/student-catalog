package com.example.demo.dao;
import com.example.demo.entity.Login;
import java.util.List;

public interface LoginDAO {
    //DAO Methods
    List<Login> findAll();
    Login findById(int id);
    Login findByUsername(String username);
    void create(Login login);
    void deleteById(int id);
}
