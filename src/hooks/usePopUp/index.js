import { useContext } from "react";
import { PopUpContext } from "../../contexts";

const UsePopUp = () => {
  const { popUpIdRef, popUpRef, setPopUps } = useContext(PopUpContext);

  const addPopUp = (msg, css) => {
    const newPopUp = { id: popUpIdRef.current, msg: msg, css: css };
    popUpIdRef.current += 1;

    setPopUps((prevPopUps) => [...prevPopUps, newPopUp]);

    setTimeout(() => {
      if (popUpRef.current) {
        popUpRef.current.classList.add("active");
      }
    }, 1);

    setTimeout(() => {
      setPopUps((prevPopUps) =>
        prevPopUps.filter((popUp) => popUp.id !== newPopUp.id)
      );
    }, 3000);
  };

  return { addPopUp };
};

export { UsePopUp };
