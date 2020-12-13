export function Bar() {
    console.log('BarBar!');
}

export function Foo() {
    console.log('Footer');
}

export function Baz() {
    return import('lodash').then(({ default: _ }) => {
        const el = document.createElement('div');
        el.innerHTML = _.join(['Hello', 'Webpack'], ' ');
        return el;
    });
}
