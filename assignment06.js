let data = [4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 9, 9, 10, 10]; // 22 entries
let from = [5, 11, 17, 20, 0, 4, 15, 21, 0, 5.5, 14, 20, 2, 12, 18, 22, 1, 4, 4, 12, 2, 12]; // 22 entries
let to = [10, 14, 18.5, 24, 4, 8, 18, 24, 3.5, 14.5, 16, 24, 10, 16, 20, 24, 2, 8, 8, 12, 14, 18]; // 22 entries

let yf = [], yi = [], yh = [], yall = [];

// Updated to match 22 entries with 'fun' and 'talk'
let type = ['fun', 'talk', 'fun', 'talk', 'talk', 'fun', 'fun', 'talk', 'talk', 'fun', 'talk', 'fun', 'fun', 'talk', 'fun', 'talk', 'fun', 'fun', 'fun', 'talk', 'fun', 'talk'];

let color = ["#0A0000", "#FF0000"]; // Black and Red
let textColor = ['Sleep Time', 'Passion for Work'];
let fs;
let mode = 0;

let topPad = 140, btmPad = 100, wid = 20;
let tit = 'How long have I been reading?';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    setStack();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    if (width <= 600) {
        wid = 10;
        fs = 8;
    } else {
        wid = 20;
        fs = 12;
    }

    background('#fffcf5');
    noStroke();
    drawWhite();

    title();
    legend();
    date();

    if (mouseIsPressed) {
        mode = 1;
    } else {
        mode = 0;
    }
    drawData();
    time();
}

function setStack() {
    let currentN = 0, stacker = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > currentN) {
            stacker = 0;
        }

        // Update mapping to match the time function's scale (0 - 23.99)
        let dya = map(from[i], 0, 23.99, topPad, height - btmPad);
        let dyb = map(to[i], 0, 23.99, topPad, height - btmPad);
        let dh = dyb - dya;

        yf[i] = height - btmPad - stacker - dh;
        yi[i] = dya;
        yh[i] = dh;
        yall[i] = 0;
        stacker += dh;

        currentN = data[i];
    }
}

function drawData() {
    for (let i = 0; i < data.length; i++) {
        let dx = map(data[i], 4, 10, 100, width - 100);

        if (mode == 0) {
            yall[i] = lerp(yall[i], yi[i], 0.05);
        } else if (mode == 1) {
            yall[i] = lerp(yall[i], yf[i], 0.05);
        }

        defineColor(i);
        rect(dx, yall[i], wid, yh[i]);
    }
}

function time() {
    for (let i = 0; i < 5; i++) {
        let timey;
        fill(170);
        if (mode == 0) {
            timey = [0, 6, 12, 18, 23.99];
            let dya = map(timey[i], 0, 23.99, 2 + topPad, height - btmPad + 5);
            let timeLabel = (timey[i] === 23.99) ? "23:59" : `${Math.floor(timey[i])}:00`;
            text(timeLabel, 50, dya);
        } else {
            timey = [0, 6, 12, 18, 23.99];
            let dya = map(timey[i], 0, 23.99, height - btmPad + 5, 2 + topPad);
            let timeLabel = (timey[i] === 23.99) ? "23:59" : `${Math.floor(timey[i])} hrs`;
            text(timeLabel, 50, dya);
        }
    }
}

function title() {
    fill(80);
    textSize(fs/12*30);
    if (mode == 0) {
        tit = 'When I Sleep? When Am I Full of Passion?';
    } else if (mode == 1) {
        tit = 'How does lack of sleep affect passion?';
    }
    text(tit, width / 2 - tit.length * fs/12*7, 60);
}

function date() {
    for (let i = 11; i < 18; i++) {
        let dx = map(i, 11, 18, 100, width);
        fill(50);
        textSize(fs);
        text('10/' + i, dx - 4, 120);
    }
}

function drawWhite() {
    for (let i = 4; i < 11; i++) {
        push();
        fill('#777');
        let dx = map(i, 4, 10, 100, width - 100);
        rect(dx + 9, 0 + topPad, 0.5, height - btmPad - topPad);

        fill('#333');
        rect(dx - 3, 0 + topPad - 2, wid + 6, 2);
        rect(dx - 3, height - btmPad, wid + 6, 2);
        pop();
    }
}

function legend() {
    let lefter = 0;
    if (width < 600) {
        lefter = 50;
    }

    textSize(fs);
    let a = width / 2 - 200 + lefter;
    for (let i = 0; i <= 1; i++) { // Adjusted to only 2 types
        fill(color[i]);
        if (i > 0) {
            a += textColor[i - 1].length * 12;
        }
        if (i == 1) {
            a -= 30;
        } else if (i == 2) {
            a += 10;
        }
        circle(a, height - btmPad / 2, 10);
        fill(100);
        text(textColor[i], a + 10, height - btmPad / 2 + 3);
    }
}

function defineColor(i) {
    switch (type[i]) {
        case 'fun':
            fill(color[0]);
            break;
        case 'talk':
            fill(color[1]);
            break;
        default:
            break;
    }
}
