package com.example.demo.rest;
import com.example.demo.dao.LoginDAOImpl;
import com.example.demo.entity.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class LoginController {

    private final LoginDAOImpl loginDAOImpl;

    @Autowired
    public LoginController(LoginDAOImpl loginDAOImpl) {
        this.loginDAOImpl = loginDAOImpl;
    }

    @GetMapping("/getAllUsers")
    public List<Login> findAll() {
        return loginDAOImpl.findAll();
    }

    @GetMapping("/id/{id}")
    public Login findById(@PathVariable("id") int id) {
        Login login = loginDAOImpl.findById(id);
        if(login == null) throw new RuntimeException("No login information was found with id " + id);
        return login;
    }

    @GetMapping("/user/{username}")
    public Login findByUsername(@PathVariable("username") String username) {
        Login login = loginDAOImpl.findByUsername(username);
        if(login == null) throw new RuntimeException("No login information was found with username " + username);
        return login;
    }

    @PostMapping("/addUser")
    public void addUser(@RequestBody Login login) {
        login.setId(0);
        loginDAOImpl.create(login);
    }

    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable("id") int id) {
        Login login = loginDAOImpl.findById(id);
        if(login == null) throw new RuntimeException("No login information was found with id " + id);
        loginDAOImpl.deleteById(id);
    }
}
