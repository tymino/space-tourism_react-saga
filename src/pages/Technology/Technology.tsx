import './Technology.scss';

import { useState, MouseEvent } from 'react';

import { Loading } from '../../components';

const Technology = () => {
  const [activeButtonSlider, setActiveButtonSlider] = useState(0);

  const handleButtonSlider = ({
    currentTarget: { value },
  }: MouseEvent<HTMLButtonElement>) => {
    setActiveButtonSlider(Number(value));
  };

  return <div>Tech</div>;
  // ) : (
  //   <div className="technology" role="main">
  //     <picture className="technology__picture">
  //       <source
  //         className="technology__picture--img"
  //         media="(max-width: 468px)"
  //         srcSet="./assets/technology/background-technology-mobile.jpg"
  //       />
  //       <source
  //         className="technology__picture--img"
  //         media="(max-width: 1024px)"
  //         srcSet="./assets/technology/background-technology-tablet.jpg"
  //       />
  //       <img
  //         className="technology__picture--img"
  //         src="./assets/technology/background-technology-desktop.jpg"
  //         alt="background-home-desktop"
  //       />
  //     </picture>

  //     <div className="technology__container">
  //       <div className="technology__subtitle">
  //         <span>03</span> Space launch 101
  //       </div>
  //       <div className="technology__launch-wrapper">
  //         <div className="technology__launch-button-container">
  //           {data.map((_: any, i: any) => {
  //             const actualName = i + 1;
  //             return (
  //               <button
  //                 key={i}
  //                 className={`technology__launch-button${
  //                   Number(activeButtonSlider) === i ? ' active' : ''
  //                 }`}
  //                 value={i}
  //                 onClick={handleButtonSlider}
  //               >
  //                 {actualName}
  //               </button>
  //             );
  //           })}
  //         </div>
  //         <div className="technology__launch-info-container">
  //           <div className="technology__launch-info-subheader">
  //             the terminology...
  //           </div>
  //           <div className="technology__launch-info-header">
  //             {data[activeButtonSlider].name}
  //           </div>
  //           <div className="technology__launch-info-text">
  //             {data[activeButtonSlider].description}
  //           </div>
  //         </div>
  //         <picture className="technology__launch-picture">
  //           <source
  //             className="technology__launch-picture--img"
  //             media="(max-width: 1300px)"
  //             srcSet={data[activeButtonSlider].images.landscape}
  //           />
  //           <img
  //             className="technology__launch-picture--img"
  //             src={data[activeButtonSlider].images.portrait}
  //             alt={data[activeButtonSlider].name}
  //           />
  //         </picture>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Technology;
