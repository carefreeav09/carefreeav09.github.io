import React from "react";
import styled from "styled-components";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

const SwitchDOM = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 2px;
    background-color: #f9f9f950;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & input + .slider {
    background-image: url("${moon}");
    background-size: contain, 5px 5px;
    background-repeat: no-repeat;
    background-position: right;
  }

  & input:checked + .slider {
    background-image: url("${sun}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
  }

  & input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  & input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  & .slider.round {
    border-radius: 34px;
  }

  & .slider.round:before {
    border-radius: 50%;
  }
`;

const Switch = (props) => {
  return (
    <SwitchDOM>
      <input
        type="checkbox"
        onChange={(e) =>
          e.target.checked
            ? props.handleSwitch(props.trueValue)
            : props.handleSwitch(props.falseValue)
        }
      />
      <span className="slider round" />
    </SwitchDOM>
  );
};

export default Switch;
