import { React, useState } from 'react';
import styles from './ProductFilter.module.css'
import arrow from './ProductFilterAssets/greyArrow.svg'
import blackArrow from './ProductFilterAssets/rightArrow.svg'

function ProductFilter() {

    const [clicked, isClicked] = useState(false);

    function openCategories() {
        isClicked(!clicked)
    }

    return (
        <>
            <div className={styles.filterSection}>
                <div className={styles.filterHeading}>
                    <h1>Filters</h1>
                </div>
                <div className={styles.categories}>
                    <h3>CATEGORIES</h3>
                    <div className={styles.sportsCategory}>
                        <img src={arrow} alt="arrow" />
                        <span>Sports</span>
                    </div>
                    <div className={styles.footballCategory} onClick={openCategories}>
                        <div className={styles.footballCategoryHeading}>
                            <img src={blackArrow} alt="arrow" className={clicked ? styles.footballCategoryRotate : ''} />
                            <span>Football</span>
                        </div>
                        <div className={`${styles.footballCategoryList} ${clicked ? '' : styles.hide}`}>
                            <ul>
                                <li>Footballs</li>
                                <li>Football Gloves</li>
                                <li>Football Guards</li>
                                <li>Football Kit</li>
                                <li>Football Bags</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductFilter;