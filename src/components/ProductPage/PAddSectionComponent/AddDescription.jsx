import styles from './PAddSection.module.css'
import arrowRight from './PAddSectionAssets/arrowRight.svg'

function AddDescription(props) {
    return (
        <>
            <div className={styles.addMain}>
                <div className={props.addPositionLeft ? styles.addBtn : styles.addBtnRight}>AD</div>
                <div className={props.addPositionLeft ? styles.Addcontainer : styles.AddcontainerRight}>
                    <p>Adventure Starts with a Ride</p>
                    <div>
                        <span>Shop now</span>
                        <img className={styles.arrowRight} src={arrowRight} alt="shop now arrow" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddDescription;