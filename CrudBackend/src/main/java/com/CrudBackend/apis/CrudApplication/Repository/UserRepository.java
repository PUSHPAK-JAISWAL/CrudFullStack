package com.CrudBackend.apis.CrudApplication.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CrudBackend.apis.CrudApplication.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
