package com.example.gateway;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Optional;

@Component
@FeignClient(name="user")
public interface UserClient {
    @RequestMapping(method = RequestMethod.GET, value = "/users/id/{userId}")
    Optional<User> getUserById(@PathVariable Long userId);

    @RequestMapping(method = RequestMethod.GET, value="/users/username/{username}")
    Optional<User> getUserByUsername(@PathVariable String username);
}
