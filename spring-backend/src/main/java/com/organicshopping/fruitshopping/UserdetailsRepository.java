package com.organicshopping.fruitshopping;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserdetailsRepository extends JpaRepository<Userdetails,Long> {
    Userdetails findByUsernameAndPassword(String username,String password);

    Userdetails findByUsername(String username);


}
