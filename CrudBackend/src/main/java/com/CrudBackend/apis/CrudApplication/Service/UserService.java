package com.CrudBackend.apis.CrudApplication.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CrudBackend.apis.CrudApplication.Entity.User;
import com.CrudBackend.apis.CrudApplication.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public List<User> ListAllStudent() {
		return userRepository.findAll();
	}
	
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	public User getUserById(Long id) {
		return userRepository.findById(id).get();
	}
	
	public void updateUserById(User user,Long id) {
		User userTobeUpdated = getUserById(id);
		userTobeUpdated.setUserName(user.getUserName());
		userTobeUpdated.setEmail(user.getEmail());
		userTobeUpdated.setName(user.getName());
		
		userRepository.save(userTobeUpdated);
	}
	
	public void deleteUserById(Long id) {
		userRepository.deleteById(id);
	}
}
