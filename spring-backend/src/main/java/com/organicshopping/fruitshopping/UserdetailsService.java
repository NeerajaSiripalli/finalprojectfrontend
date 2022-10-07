package com.organicshopping.fruitshopping;

import com.organicshopping.fruitshopping.jwtutils.JwtUsersDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserdetailsService {

    @Autowired
    public UserdetailsRepository repository;


    public List<Userdetails> getUserdetails() {
        return repository.findAll();
    }
    public Userdetails getUserdetailsWithNameAndPassword(String username,String password) {

        return repository.findByUsernameAndPassword(username,password);
    }

    public Userdetails addUser(Userdetails record) {
        return repository.save(record);
    }

    public Userdetails getUserdetailsWithName(String username) {
        return  repository.findByUsername(username);
    }


    public void updateUserdetailsbyUsername( Userdetails updatebyUsername) {
       // updatebyUsername.setUsername(username);

         repository.save(updatebyUsername);
    }





}
