import _ from 'lodash';
import printMe from './print';
import '../css/index.scss';

const arr = [1, 2, 3].map((v) => v);

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print', () => {
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}
