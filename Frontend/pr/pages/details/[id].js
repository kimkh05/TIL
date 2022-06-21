import Head from "next/head";
import Item from "../../src/components/item/item";

const Post = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticProps(context){
    const id = context.params.id;
    const apiUrl = 
}
