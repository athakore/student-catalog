package com.example.demo.dao;
import com.example.demo.entity.Login;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class LoginDAOImpl implements LoginDAO{

    private EntityManager entityManager;

    @Autowired
    public LoginDAOImpl(EntityManager entityManager) {this.entityManager = entityManager;}

    @Override
    @Transactional
    public List<Login> findAll() {
        Session session = entityManager.unwrap(Session.class);
        Query<Login> query = session.createQuery("FROM Login");
        List<Login> logins = query.getResultList();
        return logins;
    }

    @Override
    @Transactional
    public Login findById(int id) {
        Session session = entityManager.unwrap(Session.class);
        Login login = session.get(Login.class, id);
        return login;
    }

    @Override
    @Transactional
    public Login findByUsername(String username) {
        Session session = entityManager.unwrap(Session.class);
        Query<Login> query = session.createQuery("FROM Login WHERE username=:username");
        query.setParameter("username", username);
        List<Login> temp = query.getResultList();
        return temp.get(0);
    }

    @Override
    public void create(Login login) {
        Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(login);
    }

    @Override
    public void deleteById(int id) {
        Session session = entityManager.unwrap(Session.class);
        Query<Login> query = session.createQuery("DELETE FROM Login WHERE id =:ID");
        query.setParameter("ID", id);
        query.executeUpdate();
    }
}
