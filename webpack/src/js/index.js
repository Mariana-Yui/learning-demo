import Header from './Header';
import Avatar from './Avatar';
import Wallpaper from '../image/wallhaven-vgk59p.jpg';

const header = new Header('denislin');

const name = header.getName();

document.write(name);

const avatar = new Avatar(Wallpaper);

avatar.appendToBody();
