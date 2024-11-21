// src/pages/Home.tsx

import BlurSlideshow from '../components/BlurSlideshow';
import PositionSlideshow from '../components/ImagesRegisPosition';
import ImageSlideshow from '../components/ImageSlideshow';
import ImageCard from '../components/ImageCard';
import imageRegisPosition from '../data/imageDateSection01';
import imageRegisHero from '../data/imageData';
// import { Container, ImageContainer, TextContainer } from '../styles/HomeStyles';

const Home = () => {
    return (
        <>
        <h2>Welcome to the Home Page!</h2>
        <BlurSlideshow />
        <PositionSlideshow />
        <ImageSlideshow images={imageRegisHero} />
        <ImageSlideshow images={imageRegisPosition} />
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

