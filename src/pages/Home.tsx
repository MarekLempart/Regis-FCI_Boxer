// src/pages/Home.tsx

import BlurSlideshow from '../components/BlurSlideshow';
import PositionSlideshow from '../components/ImagesRegisPosition';
import ImageSlideshow from '../components/ImageSlideshow';
import imageRegisPosition from '../data/imageDateSection01';
import imageRegisHero from '../data/imageData';

const Home = () => {
    return (
        <>
            <h2>Welcome to the Home Page!</h2>
            <BlurSlideshow />
            <PositionSlideshow />
            <ImageSlideshow images={imageRegisHero} />
            <ImageSlideshow images={imageRegisPosition} />
        </>
    );
};

export default Home;
