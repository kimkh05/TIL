import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const BASE_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const [item, setItem] = useState({});

  const getData = () => {
    axios.get(BASE_URL).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, []);

  return <p>Post: {id}</p>;
};

export default Post;
