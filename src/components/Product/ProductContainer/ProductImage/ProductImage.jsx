import React from "react";
import styles from "./ProductImage.module.css";

// Product Image Component
const ProductImage = ({ image }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        src={image[0]}
        alt="Product"
        width="100%"
        height="100%"
        style={{ objectFit: "contain", aspectRatio: 1 }}
      />
    </div>
  );
};

export default ProductImage;
