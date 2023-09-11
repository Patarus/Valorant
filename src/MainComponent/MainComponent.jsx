
import Presentation from '../Presentation/Presentation';
import ImageComponent from '../ImageComponent/ImageComponent';
import styles from './MainComponent.module.scss';
import image1 from '../assets/raze.jpg';  
import image2 from '../assets/reyna.jpg';
import image3 from '../assets/yoru.jpg';

const MainComponent = () => {
    return (
        <div className={styles.container}>
            <Presentation title="Présentation" />
            <div className={styles.imagesContainer}>
                <ImageComponent src={image1} alt="Description de l'image 1" />
                <ImageComponent src={image2} alt="Description de l'image 2" />
                <ImageComponent src={image3} alt="Description de l'image 3" />
            </div>
        </div>
    );
};


export default MainComponent;
