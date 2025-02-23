import { useState } from "react";
import maxenceImg from '../assets/images/maxence.png';
import maxenceImgGlasses from '../assets/images/maxence-glasses.png';

const ClickablePicture = () => {
  const [clickablePicture, setClickablePicture] = useState(maxenceImg); // Use the initial image for the state

  function handleClick() {
    setClickablePicture((prevPicture) => 
      prevPicture === maxenceImg ? maxenceImgGlasses : maxenceImg
    );
  }

  return (
    <div>
      <img src={clickablePicture} alt="Maxence" onClick={handleClick} />
    </div>
  );
};

export default ClickablePicture;