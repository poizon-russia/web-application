import Image from 'next/image';

import css from './sideImageCard.module.scss';
const images: string[] = ['asicsGel', 'adidasCampus', 'newBalance550'];

const getRandomImage = (): string => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const SideImageCard: React.FC = () => {
  const randomImage = getRandomImage();
  const imagePath = `/assets/sideImages/${randomImage}.png`;

  return (
    <Image
      src={imagePath}
      className={css.image}
      alt="Shoe example"
      width={680}
      height={1080}
    />
  );
};

export default SideImageCard;
