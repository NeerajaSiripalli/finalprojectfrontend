package com.organicshopping.fruitshopping.jwtutils;

import com.organicshopping.fruitshopping.Userdetails;
import com.organicshopping.fruitshopping.UserdetailsRepository;
import com.organicshopping.fruitshopping.UserdetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUsersDetailsService implements UserDetailsService {
    @Autowired
    public UserdetailsRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Userdetails userdetails = repository.findByUsername(username);
        if (userdetails.getUsername().equals(username)) {
            return new User(userdetails.getUsername(),
                    userdetails.getPassword(),
                    new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }

}