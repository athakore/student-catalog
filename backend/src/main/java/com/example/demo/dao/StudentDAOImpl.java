package com.example.demo.dao;
import com.example.demo.entity.Student;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class StudentDAOImpl implements StudentDAO {

    private EntityManager entityManager;

    @Autowired
    public StudentDAOImpl(EntityManager entityManager) {this.entityManager = entityManager;}

    @Override
    @Transactional
    public List<Student> findAll() {
        Session session = entityManager.unwrap(Session.class);
        Query<Student> query = session.createQuery("FROM Student");
        List<Student> students = query.getResultList();
        return students;
    }

    @Override
    @Transactional
    public Student findById(int id) {
        Session session = entityManager.unwrap(Session.class);
        Student student = session.get(Student.class, id);
        return student;
    }

    @Override
    @Transactional
    public List<Student> findByName(String lastName, String firstName) {
        Session session = entityManager.unwrap(Session.class);
        Query<Student> query = session.createQuery("FROM Student WHERE first_name=:firstName AND last_name=:lastName");
        query.setParameter("firstName", firstName);
        query.setParameter("lastName", lastName);
        List<Student> students = query.getResultList();
        return students;
    }

    @Override
    @Transactional
    public void create(Student student) {
        Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(student);
    }

    @Override
    @Transactional
    public void deleteById(int id) {
        Session session = entityManager.unwrap(Session.class);
        Query<Student> query = session.createQuery("DELETE FROM Student WHERE id=:ID");
        query.setParameter("ID", id);
        query.executeUpdate();
    }
}
