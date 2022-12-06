package com.example.aspects;

import java.time.LocalDateTime;
import java.util.Arrays;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.example.exceptions.InvalidCredentialsException;
import com.example.models.Notification;
import com.example.models.Person;
import com.example.repository.NotificationRepository;
import com.example.repository.PersonRepository;

@Component
@Aspect
@Transactional
public class NotificationAspect {
	 NotificationRepository nr;
	 PersonRepository pr;
	 Notification notification = new Notification();
	 
	 @Autowired
	 public NotificationAspect(PersonRepository pr, NotificationRepository nr)
	 {
		 this.pr=pr;
		 this.nr=nr;
	 }
	
	@AfterReturning("execution(* com.example.service.PersonService.login(..))")
	public void NotifyWhenUserLogsIn(JoinPoint jp) {
		
		 notification.setMessage("you was logged in");
		 notification.setModifiedDate(LocalDateTime.now());
		 Person person = pr.findByEmail(jp.getArgs()[0].toString());
		 notification.setPerson(person);
		 nr.save(notification);
	}
	
	@AfterReturning("execution(* com.example.service.PersonService.register(..))")
	public void NotifyWhenUserRegister(JoinPoint jp) {
		System.out.println("The user: " + jp.getArgs()[0] + " was logged in");
	}
	

}
