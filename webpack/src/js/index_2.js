import { Bar, Baz } from './index_3';

Bar();

Baz().then((el) => {
    document.body.appendChild(el);
});

const func = () => {
    console.log([1, 2, 3].map((v) => v));
    console.log('hello webpack');
};
func();

class User {
    constructor() {
        console.log('new User');
    }
}

const user = new User();
