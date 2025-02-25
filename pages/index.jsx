import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export default function index() {
  const [data, setData] = useState([
    { id: 1, name: "ali" },
    { id: 2, name: "ali" },
    { id: 3, name: "ali" },
    { id: 4, name: "ali" },
    { id: 5, name: "ali" },
  ]);
  return (
    <div>
      <h1 className="">salom</h1>
      <Head>
        <title>index page</title>
      </Head>

      <Link href={"/about"}>
        <button>to about page</button>
        <br></br>
      </Link>
      <Link href={"/contact"}>
        <button className="">contact page</button>
      </Link>
      <br />
      {data.map((item, index) => (
        <div key={index}>
          <Link href={`/user/${item.id}`}>
            <h1>{item.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
