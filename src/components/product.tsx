"use client";
import { ProductType } from "@/interfaces";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "./image";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="h-96  shadow-[5px_5px_15px_rgba(0,0,0,0.3)] flex flex-col rounnded-lg group hover:scale-105 transition-transform ease-out duration-200 border bg-white p-6 rounded-lg"
    >
      <div className="relative max-h-72 flex-1  ">
        <CustomImage Product={product} fill />
        {/* <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={300}
        /> */}
      </div>

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
    </Link>
  );
};

export default Product;
