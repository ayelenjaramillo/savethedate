"use client"

import Swal from 'sweetalert2';
import styles from "./Confirmacionasis.module.css"; 
export default function Confirmacionasis() {
  const resetForm=()=>{
    (document.getElementById('form') as HTMLFormElement).reset(); 
  }
 const confirmation =(event: React.MouseEvent<HTMLButtonElement>)=>{
  event.preventDefault(); 
  let conf = document.getElementById('cantidad') as HTMLInputElement; 
  if(conf){
    let value = conf.value; 
    Swal.fire({
      title: "Gracias por compartir este magico momento",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#B187BE",
      color: "#554958", 
      
    });
    resetForm()
  }
 }

  return (
    <div className={styles.general}>
      <p className={styles.title}>Confirma la asistencia al Baby Shower!</p>
      <form id='form' className={styles.form}>
        <label className={styles.label}>
          Cantidad de asistentes:
          <input name='number' className={styles.input}></input>
        </label>
        <br/>
        <label className={styles.label}>
          Nombre de los asistentes:
          <input id='cantidad' className={styles.input}></input>
        </label>
        <p className={styles.label}>Posees alguna restricción alimenticia? Dejanos saber
          <textarea className={styles.input}> </textarea>
        </p>
        <button type='submit' className={styles.btn} onClick={confirmation} >
          Confirmar asistencia
        </button>
      </form>
    </div>
  );
}
