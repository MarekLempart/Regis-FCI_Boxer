// src/pages/Home.tsx

import BlurSlideshow from '../components/BlurSlideshow';
import PositionSlideshow from '../components/ImagesRegisPosition';

const Home = () => {
    return (
        <>
            <h2>Welcome to the Home Page!</h2>
            <BlurSlideshow />
            <PositionSlideshow />            
        </>
    );
};

export default Home;
