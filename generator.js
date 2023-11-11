
const fs = require('fs');

async function doit() {

    for  (let i = 10000; i < 100000; i++) {
        console.log(i);
        let text = `<svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#ffffff"/>
        <text x="50%" y="50%" font-family="Arial" font-size="20" fill="black" dominant-baseline="middle" text-anchor="middle">${i}.atommap</text>
    </svg>`
        fs.writeFileSync(`./atommap_svg_final/${i}.atommap.svg`, text);
    }
}

doit();