package com.frankmoley.lil.learningspring.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    Iterable<Reservation> findReservationByReservationDate(Date date);
}
