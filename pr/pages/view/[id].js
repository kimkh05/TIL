import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/components/item/item";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const BASE_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const [item, setItem] = useState({});

  const getData = () => {
    axios.get(BASE_URL).then((res) => {
      console.log(res.data); 
      setItem(res.data);
    });
  };

  useEffect(() => { 
    if (id && id > 0) {
       getData();
    }
  }, []);

  return <Item item={item } />;
};

export default Post;
