
"use client"
 import styles from "./Cuentaregresiva.module.css"; 
 import sou from "../app/img/souvenir.jpeg"; 
 import cake from "../app/img/cake.jpg"; 
 import React, { useEffect } from 'react';

export default function Cuentaregresiva() {
  useEffect(() => {
    const countDate = new Date('July 15, 2023 00:00:00').getTime();

    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const gap = countDate - currentTime;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      const dayElement = document.getElementById('day');
      const hourElement = document.getElementById('hour');
      const minuteElement = document.getElementById('minute');
      const secondElement = document.getElementById('second');

      if (dayElement && hourElement && minuteElement && secondElement) {
        dayElement.innerText = String(textDay);
        hourElement.innerText = String(textHour);
        minuteElement.innerText = String(textMinute);
        secondElement.innerText = String(textSecond);
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Amelie Arrival</h2>
      <div className={styles.sqGeneral}>
        <div className={styles.square}>
          <h4 className={styles.number} id="day">0</h4>
          <h3 className={styles.text}>Dias</h3>
        </div>
        <div className={styles.square}>
          <h4 className={styles.number} id="hour">0</h4>
          <h3 className={styles.text}>Horas</h3>
        </div>
        <div className={styles.square}>
          <h4 className={styles.number} id="minute">0</h4>
          <h3 className={styles.text}>Minutos</h3>
        </div>
        <div className={styles.square}>
          <h4 className={styles.number} id="second">0</h4>
          <h3 className={styles.text}>Segundos</h3>
        </div>
      </div>
      <div className={styles.images}>
          <img src={sou.src} className={styles.imagen} alt="Image" />
          <img src={cake.src} className={styles.imagen} alt="Image" />
      </div>  
  </div>
  );
}
