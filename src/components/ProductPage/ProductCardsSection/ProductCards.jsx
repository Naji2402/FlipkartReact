import { useEffect, useState } from "react";
import styles from "./ProductCards.module.css";
import ProductCard from "./ProductCard.jsx";
import { useContext } from "react";

import { sortValueContext } from "../../../App.jsx";
import { brandFilterValueContext } from "../../../App.jsx";
import { priceFilterValueContext } from "../../../App.jsx";

function ProductCards() {
  const [products, setProducts] = useState([]);
  const { sortInputValue, setSortInputValue } = useContext(sortValueContext);
  const { brandFilterInputValue, setBrandFilterInputValue } = useContext(
    brandFilterValueContext
  );
  const { priceFilterInputValue, setPriceFilterInputValue } = useContext(
    priceFilterValueContext
  );

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
  }, [sortInputValue, brandFilterInputValue, brandFilterInputValue]);

  const sortFilteredFinal = products.sort((a, b) => {
    switch (sortInputValue) {
      case "":
        return b.isBestSeller - a.isBestSeller;
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

  const brandFilteredFinal = sortFilteredFinal.filter((product) => {
    return brandFilterInputValue.includes(product.brandName);
  });

  const finalProductList =
    brandFilterInputValue.length === 0 ? sortFilteredFinal : brandFilteredFinal;

  

  return (
    <>
      <div className={styles.productMain}>
        {finalProductList.map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              brandName={product.brandName}
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
