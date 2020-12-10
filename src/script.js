// script.js: dynamic logic for tarotjs


// React 
'use strict';
const e = React.createElement;

// React Button Component
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'congrats, you about to make that $$$$$$$$$';
    }
    return e(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
    );
  }
}
ReactDOM.render(
  React.createElement(Button, null, null),
  document.querySelector("#reading_button")
);




// React Image Component
'use strict';
class DisplayAnImage extends React.Component{
  render() {
    return e(
        'img',
        { src: 'imgs/tarot-10of78-coin1.png' }
    );
  }
}

ReactDOM.render(
  React.createElement(DisplayAnImage, null, null),
  document.querySelector("#timg")
);
