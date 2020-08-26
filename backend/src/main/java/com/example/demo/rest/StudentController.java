package com.example.demo.rest;
import com.example.demo.dao.StudentDAOImpl;
import com.example.demo.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class StudentController {

    private final StudentDAOImpl studentDAOImpl;

    @Autowired
    public StudentController(StudentDAOImpl studentDAOImpl) {
        this.studentDAOImpl = studentDAOImpl;
    }

    @GetMapping("/getAllStudents")
    public List<Student> findAll() {
        return studentDAOImpl.findAll();
    }

    @GetMapping("/student/{id}")
    public Student findById(@PathVariable("id") int id) {
        Student student = studentDAOImpl.findById(id);
        if(student == null) throw new RuntimeException("No student was found with id " + id);
        return student;
    }

    @GetMapping("/lName/{lastName}/fName/{firstName}")
    public List<Student> findById(@PathVariable("lastName") String lastName, @PathVariable("firstName") String firstName ) {
        List<Student> student = studentDAOImpl.findByName(lastName, firstName);
        if(student.isEmpty()) throw new RuntimeException("No student named " + firstName + " " + lastName + " was found");
        return student;
    }

    @PostMapping("/addStudent")
    public void addUser(@RequestBody Student student) {
        student.setId(0);
        studentDAOImpl.create(student);
    }

    @DeleteMapping("/deleteStudent/{id}")
    public void deleteUser(@PathVariable("id") int id) {
        Student student = studentDAOImpl.findById(id);
        if(student == null) throw new RuntimeException("No student was found with id " + id);
        studentDAOImpl.deleteById(id);
    }

}
