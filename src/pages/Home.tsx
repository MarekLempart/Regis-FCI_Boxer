// src/pages/Home.tsx

import HeroSlideshow from "../components/HeroSlideshow";
import ImageSlideshow from "../components/ImageSlideshow";
import ImageCard from "../components/ImageCard";
import TextCard from "../components/TextCard";
import imageRegisPosition from "../data/imageDateSection01";
import imageRegisCard from "../data/imageDataCard";
import imageRegisRunBridge from "../data/imageDateRunBridge";
// import imageRegis from "../data/imageData";
import textData from "../data/textData";
import { Container, ItemContainer, ItemsContainerNoirOrder, ItemsContainerReverseOrder } from "../styles/HomeStyles";

const Home = () => {
    return (
      <Container>
        <HeroSlideshow />
        
        <ItemsContainerNoirOrder>
          <ItemContainer>
            <TextCard text={textData.section1} />          
          </ItemContainer>
          <ItemContainer>
            <ImageCard image={imageRegisPosition[0]} />          
          </ItemContainer>
        </ItemsContainerNoirOrder>

        <ItemsContainerReverseOrder>
          <ItemContainer>
            <TextCard text={textData.section2} />
          </ItemContainer>
          <ItemContainer>
            <ImageSlideshow images={imageRegisPosition} />
          </ItemContainer>
        </ItemsContainerReverseOrder>

        <ItemsContainerNoirOrder>
          <ItemContainer>
            <TextCard text={textData.section3} />
          </ItemContainer>
          <ItemContainer>
            <ImageCard image={imageRegisCard[1]} />
          </ItemContainer>
        </ItemsContainerNoirOrder>

        <ItemsContainerReverseOrder>
          <ItemContainer>
            <TextCard text={textData.section4} />
          </ItemContainer>
          <ItemContainer>
            <ImageSlideshow images={imageRegisRunBridge} />
          </ItemContainer>
        </ItemsContainerReverseOrder>
      </Container>
    );
  };

export default Home;
