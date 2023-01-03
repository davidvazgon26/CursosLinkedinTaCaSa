package com.crm.crm.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

// Creamos una clase para cargar datos a manera de demo para poder comprobar el funcionamieto de nuesto codigo

@Component
public class DemoLoader implements CommandLineRunner {

    private final ContactRepository repository;

    @Autowired
    public DemoLoader(ContactRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception{
        this.repository.save(new Contact("David", "Vazquez", "david@mail.com"));
    }

    
    
}
