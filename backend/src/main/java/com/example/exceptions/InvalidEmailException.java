package com.example.exceptions;

public class InvalidEmailException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public InvalidEmailException() {
		super("The username is incorrect");
	}

}
