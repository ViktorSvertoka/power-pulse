import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { BasicWindow, Modal, ButtonClouse, SvgClouse } from "./BasicModalWindow.styles";

import symbolDefs from "../../../src/images/sprite.svg";



const BasicModalWindow = ({ children, isOpenModalToggle }) => {
  

  useEffect(() => {
    const closeESC = (e) => {
      if (e.code === "Escape") {
        isOpenModalToggle();
      }
    };
    document.addEventListener("keydown", closeESC);
    return () => {
      document.removeEventListener("keydown", closeESC);
    };
  }, [isOpenModalToggle]);

  const handleClickBackground = (e) => {
    if (e.currentTarget === e.target) {
      isOpenModalToggle();
    }
  };

  const modal = (
    <BasicWindow onClick={handleClickBackground}>
      <Modal>
        <ButtonClouse onClick={() => isOpenModalToggle()}>
          <SvgClouse >
            <use href={symbolDefs + "#icon-x"}></use>
          </SvgClouse>
        </ButtonClouse>

        {children}
      </Modal>
    </BasicWindow>
  );

  return createPortal(modal, document.querySelector("#root_modal"));
};

export default BasicModalWindow;

BasicModalWindow.propTypes = {
  children: PropTypes.any,
  isOpenModaltoggle: PropTypes.func,
};