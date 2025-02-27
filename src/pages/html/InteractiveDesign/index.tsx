/**
 * 交互设计
 */
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import MagnifyingGlass from "./components/MagnifyingGlass";
import CropImage from "./components/CropImage";
import DragShopping from "./components/DragShopping";
import MouseHover from "./components/MouseHover";
import SlideButtonTab from "./components/SlideButtonTab";
import FlipBook from "./components/FlipBook";
import Switchs from "./components/Switchs";
import PeopleAnimation from "./components/PeopleAnimation";
// import TranslateZScroll from "./components/TranslateZScroll";
import TweakCube from "./components/TweakCube";
import Preserve3dBox from "./components/Preserve3dBox";
import OrientationSenseCard from "./components/OrientationSenseCard";
import HexagonalMesh1 from "./components/HexagonalMesh1";
import HexagonalMesh2 from "./components/HexagonalMesh2";
import HexagonalMesh3 from "./components/HexagonalMesh3";
import IconScroll from "./components/IconScroll";
import styles from "./index.module.scss";

const boxList = [
  { element: <MagnifyingGlass /> },
  { element: <CropImage /> },
  { element: <DragShopping /> },
  { element: <MouseHover /> },
  { element: <SlideButtonTab /> },
  { element: <FlipBook /> },
  { element: <Switchs /> },
  { element: <PeopleAnimation /> },
  // { element: <TranslateZScroll /> },
  { element: <TweakCube /> },
  { element: <Preserve3dBox /> },
  { element: <OrientationSenseCard /> },
  { element: <HexagonalMesh1 /> },
  { element: <HexagonalMesh2 /> },
  { element: <HexagonalMesh3 /> },
  { element: <IconScroll /> },
];

const InteractiveDesign = () => {
  const { setScrollTop } = useGlobalContext();

  useEffect(() => {
    setScrollTop(0);
  }, []);

  return (
    <div className={styles.container}>
      {boxList.map((item: { element: React.ReactNode }, index: number) => (
        <div className={styles.box} key={index}>
          {item.element}
        </div>
      ))}
    </div>
  );
};

export default InteractiveDesign;
