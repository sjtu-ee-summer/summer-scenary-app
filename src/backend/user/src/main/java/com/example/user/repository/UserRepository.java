package com.example.user.repository;

import com.example.user.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface UserRepository extends CrudRepository<User,Long> {

    User findUserByUsername(String username);

    User findUserByEmail(String email);

    User findUserByPhone(String phone);

    User findUserById(Long id);

    List<User> findAll();

    Boolean existsByUsername(String username);

}