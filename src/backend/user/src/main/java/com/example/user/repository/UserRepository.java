package com.example.user.repository;

import com.example.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>
{

    @Query("SELECT c from User c")
    List<User> getAll();

    @Query("select c from User c where c.username=:username")
    Optional<User> getByUsername(@Param("username") String username);

}