import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ItemList from "../src/components/ItemList/itemList";
import { Divider, Header } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const BASE_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    axios.get(BASE_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>Home | 코딩앙마</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        Best 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        New 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
}
