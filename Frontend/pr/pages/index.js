import Head from "next/head";
import styles from "../styles/Home.module.css";
import Axios from "axios";
import ItemList from "../src/components/ItemList/itemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>Home | 코딩앙마</title>
        <meta name="description" content="코딩 앙마 홈입니다."></meta>
      </Head>
      <>
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
      </>
    </div>
  );
}

export async function getStaticProps() {
  const API_URL = process.env.API_URL;
  const response = await Axios.get(API_URL);
  const data = response.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
