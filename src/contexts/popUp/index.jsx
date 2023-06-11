import { createContext, useRef, useState } from "react";

const PopUpContext = createContext({ toggleShow: () => {} });

const PopUpProvider = ({ children }) => {
  const popUpRef = useRef(null);
  const popUpIdRef = useRef(0);
  const [popUps, setPopUps] = useState([]);

  return (
    <PopUpContext.Provider
      value={{
        setPopUps,
        popUpIdRef,
        popUpRef,
      }}
    >
      {children}
      {popUps.length > 0 && (
        <div className='popUp__container'>
          {popUps.map((popUp) => (
            <div
              className={`pop-up ${popUp.css}`}
              key={popUp.id}
              ref={popUpRef}
            >
              <p>{popUp.msg}</p>
            </div>
          ))}
        </div>
      )}
    </PopUpContext.Provider>
  );
};

export { PopUpProvider, PopUpContext };
