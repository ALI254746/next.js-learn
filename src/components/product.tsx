"use client";
import { ProductType } from "@/interfaces";
import React, { FC } from "react";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="bg-amber-500 p-6 rounded-lg">
      <img
        className="h-40 rounded w-full object-cover object-center mb-6"
        src="https://dummyimage.com/721x401"
        alt="content"
      />
      <h3 className="tracking-widest text-stone-950 text-xs font-medium title-font">
        {product.category}
      </h3>
      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{product.title}</p>
        <p>{product.price}$</p>
      </div>
      <p className=" leading-relaxed text-base line-clamp-3">
        {product.description}
      </p>
    </div>
  );
};

export default Product;
