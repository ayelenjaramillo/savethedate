
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
import styles from "./Whishlist.module.css";
export default function Wishlist(){
  return(
  <div className={styles.general}>
    <p className={styles.title}> Importante!  </p>
    <p className={styles.text}> Amelie es una nina que ha recibido muchos mimos y regalos aun estando en la panza. Queremos que sepas que no esperamos ningun regalo solo tu presencia pero en caso de que tu voluntad sea obsequiarle algo, aca te dejamos unas ayuditas...</p>
    <div className={styles.icons}>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faBabyCarriage} className={styles.i}  style={{ color: "#A26FAF", width: "30px"}} />Panales</span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faBabyCarriage} className={styles.i} style={{ color: "A26FAF", width: "30px"}} /> Juguetes reciclados</span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faBabyCarriage} className={styles.i} style={{ color: "A26FAF", width: "30px"}} />Cremas - tipo Hipoglos </span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faBabyCarriage} className={styles.i}  style={{ color: "#A26FAF", width: "30px"}} />Chuflos </span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faBabyCarriage} className={styles.i} style={{ color: "A26FAF", width: "30px"}} />Mordisco</span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faBabyCarriage} className={styles.i}  style={{ color: "A26FAF", width: "30px"}} />Medias </span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faBabyCarriage} className={styles.i} style={{ color: "A26FAF", width: "30px"}} />Mantas</span>
    </div>
  </div>)
}