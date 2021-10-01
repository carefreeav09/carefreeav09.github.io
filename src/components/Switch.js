import React from "react";
import styled from "styled-components";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

//sun
//data:image/png;base64,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

//moon
// https://images.vexels.com/media/users/3/202680/isolated/preview/7a3c0e3611358dc38f5875ef5375d228-night-moon-cartoon-icon.png

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
    background-image: url('${sun}');
    background-size: contain, 5px 5px;
    background-repeat: no-repeat;
    background-position: right;
  }

  & input:checked + .slider {
    background-image: url('${moon}');
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
