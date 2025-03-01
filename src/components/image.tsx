"use client";
import { ProductType } from "@/interfaces";
import { FC, useState } from "react";
import Image from "next/image";

interface Props {
  Product: ProductType;
  fill?: boolean;
}
const CustomImage: FC<Props> = ({ Product, fill }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      {fill ? (
        <Image
          src={Product.image}
          alt={Product.title}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-85 ${
            isLoading
              ? "scale-110 blur-2xl grayscale-0"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={Product.image}
          alt={Product.title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading
              ? "scale-110 blur-2xl grayscale-0"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      )}
    </div>
  );
};

export default CustomImage;
