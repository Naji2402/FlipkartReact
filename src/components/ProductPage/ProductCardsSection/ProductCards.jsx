import { useEffect, useState } from "react";
import styles from "./ProductCards.module.css";
import ProductCard from "./ProductCard.jsx";
import { useContext } from "react";
import { sortValueContext } from "../ProductPageFinal/ProductPageFinal.jsx";

function ProductCards() {
  const [products, setProducts] = useState([]);
  const { sortInputValue, setSortInputValue } = useContext(sortValueContext);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("/products.json");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);

  const sortFilteredFinal = [...products].sort((a, b) => {
    switch (sortInputValue) {
      case "LowToHigh":
        return a.price - b.price;
      case "HighToLow":
        return b.price - a.price;
      case "popularity":
        return b.isBestSeller - a.isBestSeller;
      case "Newest":
        return b.isNewest - a.isNewest;
      default:
        return 0;
    }
  });

  return (
    <>
      <div className={styles.productMain}>
        {sortFilteredFinal.map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              realPrice={product.realPrice}
              discountPercentage={product.discountPerc}
              isSponsored={product.isSponsored}
              productImage={product.image}
              isBestSeller={product.isBestSeller}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductCards;
