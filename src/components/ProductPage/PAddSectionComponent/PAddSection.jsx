import styles from "./PAddSection.module.css";
import AddDescription from "./AddDescription";

function PAddSection() {
  return (
    <>    
       <p className={styles.footballDescription}>Football is one of the most popular games in the world. It is playes in almost 150 countries. The main aim of this game is to score a goal against the opponent team.</p>
       <span className={styles.ReadMore}>Read More</span>
       <div className={styles.pAddSection}>
            <AddDescription addPositionLeft={true}/>
            <AddDescription addPositionLeft={false}/>
       </div>     
    </>
);
}

export default PAddSection;
