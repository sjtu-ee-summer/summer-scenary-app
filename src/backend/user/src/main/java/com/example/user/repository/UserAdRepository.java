package com.example.user.repository;

import com.example.user.entity.UserAd;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserAdRepository extends CrudRepository<UserAd,Long> {

    UserAd findUserAdById(Long id);
}
