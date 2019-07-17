package com.example.oauth2;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.Resource;
import javax.sql.DataSource;

@Configuration
public class WebSecurityConfigurer extends WebSecurityConfigurerAdapter {


    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


    @Override
    @Bean
    public UserDetailsService userDetailsServiceBean() throws Exception {
        return super.userDetailsServiceBean();
    }

    public class CustomPasswordEncoder implements PasswordEncoder {

        @Override
        public String encode(CharSequence charSequence) {
            return charSequence.toString();
        }

        @Override
        public boolean matches(CharSequence charSequence, String s) {
            return s.equals(charSequence.toString());
        }
    }

    @Resource
    private DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        dataSource.getConnection();
//        auth.inMemoryAuthentication()
//                .passwordEncoder(new CustomPasswordEncoder())
//                .withUser("john.carnell")
//                .password("password1")
//                .roles("USER")
//                .and()
//                .withUser("william.woodward")
//                .password("password2")
//                .roles("USER", "ADMIN");l
            auth.jdbcAuthentication().dataSource(dataSource)
                    .usersByUsernameQuery("select username,password,enabled from users where username = ?")
                    .authoritiesByUsernameQuery("select username, role from user_roles where username = ?")
                    .passwordEncoder(new CustomPasswordEncoder());

    }


}
