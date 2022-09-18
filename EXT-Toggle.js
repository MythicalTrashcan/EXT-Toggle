tr:nth-child(even){background-color: #f2f2f2;}
tr:hover {background-color: #ddd;}
td, th {
  border: 1px solid #ddd;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 23px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(208, 255, 0);
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 3px;
  bottom: 3px;
  background-color: rgb(199, 126, 30);
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #e5f321;
}
input:focus + .slider {
  box-shadow: 0 0 1px #e5f321;
}
input:checked + .slider:before {
  -webkit-transform: translateX(17px);
  -ms-transform: translateX(17px);
  transform: translateX(17px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 23px;
}
.slider.round:before {
  border-radius: 50%;
}


















tr:nth-child(even){background-color: #f2f2f2;}
tr:hover {background-color: #ddd;}
td, th {
border: 1px solid #ddd;
padding: 8px;
font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
}
.switch {
position: relative;
display: inline-block;
width: 40px;
height: 23px;
}
.switch input {
opacity: 0;
width: 0;
height: 0;
}
.slider {
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgb(208, 255, 0);
-webkit-transition: .4s;
transition: .4s;
}
.slider:before {
position: absolute;
content: "";
height: 17px;
width: 17px;
left: 3px;
bottom: 3px;
background-color: white;
-webkit-transition: .4s;
transition: .4s;
}
input:checked + .slider {
background-color: #e5f321;
}
input:focus + .slider {
box-shadow: 0 0 1px #e5f321;
}
input:checked + .slider:before {
-webkit-transform: translateX(17px);
-ms-transform: translateX(17px);
transform: translateX(17px);
}
/* Rounded sliders */
.slider.round {
border-radius: 23px;
}
.slider.round:before {
border-radius: 50%;
}
