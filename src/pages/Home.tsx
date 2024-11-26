// src/pages/Home.tsx

import HeroSlideshow from "../components/HeroSlideshow";
import ImageSlideshow from "../components/ImageSlideshow";
import ImageCard from "../components/ImageCard";
import TextCard from "../components/TextCard";
import imageRegisPosition from "../data/imageDateSection01";
import imageRegis from "../data/imageData";
import textData from "../data/textData";
import { Container, ItemContainer, ItemsContainerNoirOrder, ItemsContainerReverseOrder } from "../styles/HomeStyles";

const Home = () => {
    return (
      <Container>
        <h2>Welcome to the Home Page!</h2>
        <HeroSlideshow />

        <ItemsContainerNoirOrder>
          <ItemContainer>
            <TextCard text={textData.section1} />          
          </ItemContainer>
          <ItemContainer>
            <ImageCard image={imageRegisPosition[4]} />          
          </ItemContainer>
        </ItemsContainerNoirOrder>

        <ItemsContainerReverseOrder>
          <ItemContainer>
            <TextCard text={textData.section2} />
          </ItemContainer>
          <ItemContainer>
            <ImageSlideshow images={imageRegis} />
          </ItemContainer>
        </ItemsContainerReverseOrder>

        <ItemsContainerNoirOrder>
          <ItemContainer>
            <TextCard text={textData.section3} />
          </ItemContainer>
          <ItemContainer>
            <ImageCard image={imageRegisPosition[7]} />
          </ItemContainer>
        </ItemsContainerNoirOrder>

        <ItemsContainerReverseOrder>
          <ItemContainer>
            <TextCard text={textData.section4} />
          </ItemContainer>
          <ItemContainer>
            <ImageSlideshow images={imageRegisPosition} />
          </ItemContainer>
        </ItemsContainerReverseOrder>
      </Container>
    );
  };

export default Home;
