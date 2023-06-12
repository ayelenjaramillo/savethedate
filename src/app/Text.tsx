import informacion from "./informacion.json";
import styles from "./Text.module.css"; 
export default function Text() {
  const firstObject = informacion[0]; // Accessing the first object in the array
  const title = informacion [0]; 
  return (
    <div className={styles.general}>
      <p className={styles.title}> {title && title.titulo}</p>
      <p className={styles.principal_text}> {firstObject && firstObject.texto}</p>
   
    </div>
  );
}
