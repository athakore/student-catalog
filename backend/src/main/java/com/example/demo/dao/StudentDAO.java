package com.example.demo.dao;
import com.example.demo.entity.Student;
import java.util.List;

public interface StudentDAO {
    //DAO Methods
    List<Student> findAll();
    Student findById(int id);
    List<Student> findByName(String lastName, String firstName);
    void create(Student student);
    void  deleteById(int id);
}
