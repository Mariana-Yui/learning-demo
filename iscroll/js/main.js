import IScroll from 'iscroll/build/iscroll';

const myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true });

console.log(myScroll);

// html 结构必须是wrapper父元素中间套一个scroll子元素, 否则新建实例时会报各种style of undefined