import { useState } from 'react'
import './App.css'
import "react-jumping-text/dist/jumpingText.css";
import { JumpingText } from "react-jumping-text";

function App() {
  const [text, setText] = useState("This Is A Demo Text");
  const [highlightOnLoad, setHighlightOnLoad] = useState(false);
  const [textColor, setTextColor] = useState("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [fontSize, setFontSize] = useState("100px");
  const [textShadow, setTextShadow] = useState("-20px 10px 10px rgba(0, 0, 0, 0.3), 0 20px 50px rgba(0, 0, 0, 0.3)");
  const [letterSpacing, setLetterSpacing] = useState("-2px");

  const updateColor = (color, type) => {
    // Validate color
    const isValidColor = (color) => {
      const s = new Option().style;
      s.color = color;
      return s.color !== '';
    };
    if (isValidColor(color)) {
      type === "text" ? setTextColor(color) : type === "background" ? setBackgroundColor(color) : null;
    } else {
      type !== "background" && alert('Invalid color string');
      type === "background" && setBackgroundColor("");
    }
  };
  return (
    <div className="parentContainer">
      <div className='contentArea'>
        <h1 className="title">JumpingText Demo</h1>
        <div className="jumpingTextContainer">
          <JumpingText
            key={highlightOnLoad}
            text={text}
            background={backgroundColor}
            position='normal'
            textColor={textColor}
            fontSize={fontSize}
            highlightOnLoad={highlightOnLoad || false}
            textShadow={textShadow}
            letterSpacing={letterSpacing}
          />
        </div>
      </div>
      <div className="jumpingTextControls">
        <div>
          <div className="controlItems">
            <h3>Input Text:</h3>
            <textarea type="text" className="input-text" placeholder="Enter your text here"
              value={text}
              onChange={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setText(event.target.value);
              }}
              cols={50}
              rows={8}
            />
          </div>
          <div className="controlItems">
            <h3>Highlight On Load:</h3>
            <label className="switch">
              <input
                type="checkbox"
                checked={highlightOnLoad}
                onChange={(event) => {
                  event.stopPropagation();
                  setHighlightOnLoad(event.target.checked);
                }}
              />
              <span className="slider round"></span>
            </label>
            <span>(Works for single line text only)</span>
          </div>
          <div className="controlItems">
            <h3>Background:</h3>
            <div className="color-picker-container">
              <input
                type="color"
                id="colorPicker"
                value={backgroundColor}
                onChange={(event) => updateColor(event.target.value, "background")}
              />
              <input
                type="text"
                id="colorInput"
                placeholder="Color name/Hex value"
                value={backgroundColor}
                onChange={(event) => updateColor(event.target.value, "background")}
              />
              <div className="color-display" style={{ color: backgroundColor }}>
                {backgroundColor}
              </div>
            </div>
          </div>
          <div className="controlItems">
            <h3>Text Color:</h3>
            <div className="color-picker-container">
              <input
                type="color"
                id="colorPicker"
                value={textColor}
                onChange={(event) => updateColor(event.target.value, "text")}
              />
              <input
                type="text"
                id="colorInput"
                placeholder="Color name/Hex value"
                value={textColor}
                onChange={(event) => updateColor(event.target.value, "text")}
              />
              <div className="color-display" style={{ color: textColor }}>
                {textColor}
              </div>
            </div>
          </div>
          <div className="controlItems">
            <h3>Font Size:</h3>
            <input
              type='text'
              className="input-text"
              value={fontSize}
              onChange={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setFontSize(event.target.value);
              }}
            />
          </div>
          <div className="controlItems">
            <h3>Text Shadow:</h3>
            <input
              type='text'
              className="input-text input-shadow"
              value={textShadow}
              onChange={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setTextShadow(event.target.value);
              }}
            />
          </div>
          <div className="controlItems">
            <h3>Letter Spacing:</h3>
            <input
              type='text'
              className="input-text"
              value={letterSpacing}
              onChange={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setLetterSpacing(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
