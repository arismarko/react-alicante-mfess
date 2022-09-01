import prisma from "../lib/prisma";

const Home = ({stores}) => {
    return (
      <div>
        Catalogue
      {
        stores && stores.map(item => {
  
            return (
                <div key={item.id}>
                    <div>{item.location}</div>
                    <div>{item.createdAt}</div>
                    <div>{item.title}</div>
                </div>
            )
        })
      }
      </div>
    )
}
    
export const getStaticProps = async () => {

    console.warn('server');
  
    const stores = await prisma.store.findMany();
  
    console.log(stores);
  
    // let response = await fetch('https://reqres.in/api/products/3');
    // let stores = await response.json();
  
    return {
      props: { stores }
    };
  };
  
  export default Home;