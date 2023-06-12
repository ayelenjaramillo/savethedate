import e from "../app/img/principal-card.png"; 
import Cuentaregresiva from "./Cuentaregresiva";
import Text from "./Text";
import Confirmacionasis from "./Confirmacionasis";
import Wishlist from "./Wishlist";
import Footer from "./Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css"; 

export default function Home() {
  return (
   <div>
    <header className={styles.header}> ¡CELEBRATION!
      <p className={styles.p}> save the date </p>
    </header>
     <hr className={styles.hr} />
     <span>
      <img src={e.src} className={styles.principal_img}/>
    </span>
    <div className={styles.leaf}>
      <FontAwesomeIcon icon={faLeaf} className="leaf-i"  style={{ color: "#DDBCE7", width: "30px"}} />
      <FontAwesomeIcon icon={faLeaf} className="leaf-i"  style={{ color: "#DDBCE7", width: "30px"}} />
      <FontAwesomeIcon icon={faLeaf} className="leaf-i"  style={{ color: "#DDBCE7", width: "30px"}} />
    </div>
    <div className="countdown" >
       <Cuentaregresiva/>
    </div>
    <div className={styles.changeable}>
      <div className={styles.history}>
        <Text/>
      </div>
      <div className={styles.assistance}>
        <Confirmacionasis/>
      </div>
    </div>
    <div className="i-list">
      <Wishlist/>
    </div>
    <Footer/>
    </div>
    
  )
}
