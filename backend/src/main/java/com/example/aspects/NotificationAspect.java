package com.example.aspects;

import java.time.LocalDateTime;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import com.example.models.Notification;
import com.example.repository.NotificationRepository;
import com.example.repository.PersonRepository;

@Component
@Aspect
public class NotificationAspect {
	 NotificationRepository nr;
	 PersonRepository pr;
	 Notification notification = new Notification();
	
	@AfterReturning("execution(* com.example.service.PersonService.login(..))")
	public void NotifyWhenUserLogsIn(JoinPoint jp) {
		System.out.println("The user: " + jp.getArgs().toString() + " was logged in");
		 notification.setMessage("you was logged in");
		 notification.setModifiedDate(LocalDateTime.now());
		 notification.setPerson(null);
		// nr.save(notification);
	}
	
	@AfterReturning("execution(* com.example.service.PersonService.register(..))")
	public void NotifyWhenUserRegister(JoinPoint jp) {
		System.out.println("The user: " + jp.getArgs()[0] + " was logged in");
	}
	
	
/*	@After("execution(* com.example.service.ProductService.createTicket(..))")
	public void logNewTicketCreated(JoinPoint jp) {
		System.out.println("User: " + jp.getArgs()[3] + " created a ticket for: $" + jp.getArgs()[2]);
	}*/
	

}
