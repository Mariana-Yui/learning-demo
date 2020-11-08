import Header from './Header';
import Avatar from './Avatar';
import Wallpaper from '../image/screen.jpg';
import '../css/index.scss';

const header = new Header('denislin');

const name = header.getName();

document.write(name);

const avatar = new Avatar(Wallpaper);

avatar.appendToBody();

const screen = document.createElement('div');
screen.classList.add('screen');
document.body.append(screen);
