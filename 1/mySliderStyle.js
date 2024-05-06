class mySliderStyle{

input[type=range].mySliderStyle {
  width: 100%;
  margin: 13.8px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type=range].mySliderStyle:focus {
  outline: none;
}
input[type=range].mySliderStyle::-webkit-slider-runnable-track {
  background: #dc64a9;
  border: 0.2px solid #dc6434;
  border-radius: 1.3px;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range].mySliderStyle::-webkit-slider-thumb {
  margin-top: -14px;
  width: 16px;
  height: 36px;
  background: #9f80b4;
  border: 1px solid #9f80b4;
  border-radius: 3px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type=range].mySliderStyle:focus::-webkit-slider-runnable-track {
  background: #dc64a9;
}
input[type=range].mySliderStyle::-moz-range-track {
  background: #dc64a9;
  border: 0.2px solid #dc6434;
  border-radius: 1.3px;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range].mySliderStyle::-moz-range-thumb {
  width: 16px;
  height: 36px;
  background: #9f80b4;
  border: 1px solid #9f80b4;
  border-radius: 3px;
  cursor: pointer;
}
input[type=range].mySliderStyle::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 14.8px 0;
  color: transparent;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type=range].mySliderStyle::-ms-fill-lower {
  background: #dc64a9;
  border: 0.2px solid #dc6434;
  border-radius: 2.6px;
}
input[type=range].mySliderStyle::-ms-fill-upper {
  background: #dc64a9;
  border: 0.2px solid #dc6434;
  border-radius: 2.6px;
}
input[type=range].mySliderStyle::-ms-thumb {
  width: 16px;
  height: 36px;
  background: #9f80b4;
  border: 1px solid #9f80b4;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type=range].mySliderStyle:focus::-ms-fill-lower {
  background: #dc64a9;
}
input[type=range].mySliderStyle:focus::-ms-fill-upper {
  background: #dc64a9;
}

}