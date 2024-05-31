# Awesome React Jumping Text
`react-jumping-text` Add stylish text jumping animation to your React components effortlessly with this package. Customize the shadow effect using provided options and enhance the visual appeal of your application's text elements.
## Demo
[https://vkushal28.github.io/react-jumping-text/](https://vkushal28.github.io/react-jumping-text/)
## Installation
You can install `react-jumping-text` with NPM to your project.
```
npm i react-jumping-text
```
Or find out more info on it [here](https://www.npmjs.com/package/react-jumping-text)
## Usage
```js
import "react-jumping-text/dist/jumpingText.css";
import { JumpingText } from "react-jumping-text";

function App() {
  return (
    <JumpingText text="This Is A Demo Text" />
  )
}
```

## Options / Props
```js
background // defaults to empty
textColor // defaults to white or #fff
fontSize // defaults to 40px
highlightOnLoad // boolean to show a transition effect over the text on initial load or render
textShadow // defaults to -20px 10px 10px rgba(0, 0, 0, 0.3), 0 20px 50px rgba(0, 0, 0, 0.3)
letterSpacing // defaults to -2px to give a little overlapping style
```

## Contributing
This is my first contribution to npm package :)
Would love you all to contribute to this project, just fork the repo, add your creativity and submit a PR ❤️ :)

## Visuals
https://github.com/vkushal28/react-jumping-text/assets/17496336/33b82000-d9d8-4ca1-8281-fd6b281ee66a



## Authors
* **Kushal Verma** - *Portfolio* - [here](https://thebeardydeveloper.com](https://kushalverma.vercel.app/))

_**NOTE**_: If animation doesn't work, make sure you have included `import "react-jumping-text/dist/jumpingText.css";` at the top of your imports.
