// src/pages/Home.tsx

// import PositionSlideshow from '../components/ImagesRegisPosition';
import HeroSlideshow from "../components/HeroSlideshow";
import ImageSlideshow from "../components/ImageSlideshow";
import ImageCard from "../components/ImageCard";
import TextCard from "../components/TextCard";
import imageRegisPosition from "../data/imageDateSection01";
import imageRegis from "../data/imageData";
import textData from "../data/textData";
// import { Container, ImageContainer, TextContainer } from '../styles/HomeStyles';

const Home = () => {
    return (
      <>
        <h2>Welcome to the Home Page!</h2>
        <HeroSlideshow />
        <TextCard text={textData.section1} />
        <ImageSlideshow images={imageRegis} />
        <TextCard text={textData.section2} />
        <ImageSlideshow images={imageRegisPosition} />
        <TextCard text={textData.section3} />
        <ImageCard image={imageRegisPosition[7]} />
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

