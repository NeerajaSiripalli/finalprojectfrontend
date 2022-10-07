package com.organicshopping.fruitshopping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userdetails")
public class UserdetailsController {
@Autowired
public UserdetailsService service;

@Autowired
    PasswordEncoder passwordEncoder;
@Autowired
    public UserdetailsRepository repository;




    public UserdetailsController(UserdetailsService service){
        this.service=service;
    }
    @GetMapping("/display")
    public List<Userdetails> list(){
        return service.getUserdetails();
    }
    @CrossOrigin()
    @PostMapping("/savedetails")
    public ResponseEntity<Userdetails> insertdetails(@RequestBody Userdetails record){
        Userdetails record1 = service.getUserdetailsWithName(record.getUsername());
        if(record1 ==null){
            record.setPassword(passwordEncoder.encode(record.getPassword()));
            service.addUser(record);
            return  new ResponseEntity<>(record, HttpStatus.OK);

        }
        return  new ResponseEntity<>(HttpStatus.ALREADY_REPORTED);



    }
    @CrossOrigin()
    @GetMapping("/fetchdetails/{username}")
    public Userdetails fetchdetails(@PathVariable() String username,@RequestParam String password){
        return service.getUserdetailsWithNameAndPassword(username,password);
    }
    @CrossOrigin()
    @PutMapping ("/updatedetails")
    public void updateDetails(@RequestBody Userdetails updatebyUsername) {
        updatebyUsername = service.getUserdetailsWithName(updatebyUsername.getUsername());
        if (updatebyUsername != null) {
            updatebyUsername.setPassword(passwordEncoder.encode(updatebyUsername.getPassword()));
            service.updateUserdetailsbyUsername(updatebyUsername);
        }
    }
        @CrossOrigin()
           @PutMapping("/resetpassword")
        public void changedetails(@RequestBody Userdetails updatebyUsername) {
            // Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            updatebyUsername = service.getUserdetailsWithName(updatebyUsername.getUsername());

            // updatebyUsername = service.getUserdetailsWithName(authentication.getName());
            if (updatebyUsername != null) {
                updatebyUsername.setPassword(passwordEncoder.encode(updatebyUsername.getPassword()));
                service.updateUserdetailsbyUsername(updatebyUsername);
            }

        }
        }



