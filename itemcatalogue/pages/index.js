import prisma from "../lib/prisma";

export default function Home({ stores }) {
  console.log(stores);
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

  console.log(prisma);

  const stores = await prisma.store.findMany();

  console.log(stores);

  return {
    props: { stores }
  };
};