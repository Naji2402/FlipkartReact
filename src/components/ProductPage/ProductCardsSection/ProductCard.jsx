import styles from "./ProductCards.module.css";
import likeSign from "./PoductCardsAssets/likeSign.svg";
import downArrow from "./PoductCardsAssets/downArrow.svg";
import FillStar from "./PoductCardsAssets/Star.svg";
import EmptyStar from "./PoductCardsAssets/emptyStar.svg";
import FlipAssured from "./PoductCardsAssets/FAssured.webp";

function ProductCard(props) {
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.productImageSec}>
          <div className={`${props.isBestSeller ? styles.bestSeller : styles.bestSellerNone}`}>BEST SELLER</div>
          <img src={likeSign} className={styles.likeSign} alt="ligh symbol" />
          <img
            src={props.productImage}
            className={styles.product}
            alt=" product image"
          />
        </div>
        <div className={styles.productDetailsSec}>
          <span>{props.isSponsored ? "Sponsored" : ""}</span>
          <h3>{props.name}</h3>
          <div className={styles.priceDetails}>
            <div className={styles.discountDet}>
              <img
                src={downArrow}
                className={styles.discountArrow}
                alt=" discount arrow"
              />
              <p>{props.discountPercentage}%</p>
            </div>
            <div className={styles.prices}>
              <p>₹{props.realPrice}</p>
              <p>₹{props.price}</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.dealStatus}>Hot Deal</div>
          <div className={styles.ratingSection}>
            <div className={styles.ratingStars}>
              <img src={FillStar} alt="rating star" />
              <img src={FillStar} alt="rating star" />
              <img src={FillStar} alt="rating star" />
              <img src={FillStar} alt="rating star" />
              <img src={EmptyStar} alt="rating star" />
            </div>
            <img
              src={FlipAssured}
              className={styles.assuredLogo}
              alt="asssured logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}



export default ProductCard;


