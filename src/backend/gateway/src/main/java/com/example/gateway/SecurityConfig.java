package com.example.gateway;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailServiceImpl userDetailsService;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        BCryptPasswordEncoder encoder = passwordEncoder();
        auth.inMemoryAuthentication().withUser("admin").password(encoder.encode("password"))
                .roles("ADMIN");
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/users/users/newsignup/**").permitAll()
                .antMatchers("/users/**").permitAll()
                .antMatchers("/imgidentify/**").permitAll()
//                .antMatchers("/image-service/**").permitAll()
                .antMatchers("/translate/**").permitAll()
//                .antMatchers("/rating-book-service/**").hasRole("USER")
                .antMatchers("/eureka/**").hasRole("ADMIN")
                .anyRequest().authenticated().and()
                .httpBasic().and().csrf().disable();
    }
}
