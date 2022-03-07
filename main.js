const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas. width = 800;
canvas.height = 500;

//keep track of what keys the user presses on keyboard using keyUP and keyDown event Listeners GLOBAL
const globalKey = [];


//set to JS object
cons player = {
    x: 0,
    y: 0,
    width: ???;
    height: ???;
    frameX: 0,
    frameY: 0,
}