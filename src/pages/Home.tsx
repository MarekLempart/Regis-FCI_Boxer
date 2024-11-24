// src/pages/Home.tsx

import HeroSlideshow from "../components/HeroSlideshow";
import ImageSlideshow from "../components/ImageSlideshow";
import ImageCard from "../components/ImageCard";
import TextCard from "../components/TextCard";
import imageRegisPosition from "../data/imageDateSection01";
import imageRegis from "../data/imageData";
import textData from "../data/textData";

const Home = () => {
    return (
      <>
        <h2>Welcome to the Home Page!</h2>
        <HeroSlideshow />
        <TextCard text={textData.section1} />
        <ImageCard image={imageRegisPosition[4]} />
        <TextCard text={textData.section2} />
        <ImageSlideshow images={imageRegis} />
        <TextCard text={textData.section3} />
        <ImageCard image={imageRegisPosition[7]} />        
        <TextCard text={textData.section4} />
        <ImageSlideshow images={imageRegisPosition} />
      </>
    );
  };

export default Home;

// import BlurSlideshow from '../components/BlurSlideshow';
// import ImageSlideshow from '../components/ImageSlideshow';
// import { Container, ImageContainer, TextContainer } from '../styles/HomeStyles';

// const Home = () => {
//   return (
//     <Container>
//       <TextContainer>
//         <h1>Welcome to the Home Page!</h1>
//         <p>Explore our amazing content.</p>
//       </TextContainer>
//       <ImageContainer>
//         <ImageSlideshow images={[]} />
//       </ImageContainer>
//     </Container>
//   );
// };

// export default Home;

