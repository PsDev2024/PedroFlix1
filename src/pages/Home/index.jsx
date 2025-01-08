import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner"
import Container from "../../components/Container";
import "../../components/Container/container.css";
import Category, { categories, filterCategory } from "../../components/Category";
import Card from "../../components/Card"
import Carousel from "../../components/Carousel"
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";

function Home() {

  const [ loading, setLoading ] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      <Header />
      <Banner image="home3" />
        <Container>
          {
            loading ? <Loader /> :
            categories.map((category, index) =>
            // eslint-disable-next-line react/jsx-key
            <Category category={category}>
              <Carousel>
                {filterCategory(index).map((videos) => <Card id={videos.id} key={videos.id} />)}
              </Carousel>
            </Category>
          )
          }
        </Container>
      <Footer />
    </>
  );
}

export default Home
