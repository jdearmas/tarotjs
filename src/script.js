ReactDOM.render(
    "<h1>Hello, world!</h1>",
    document.getElementById('root')
);

// function add_tarot_image() {
//     var img = document.createElement("img");
//     img.src  = 'imgs/tarot-10of78-coin1.png'
//     document.body.appendChild(img);
// }


'use strict';

const e = React.createElement;


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
