// let idle = 1;
// let frame = []

// for (index = 1; index <=5; index++){

// }

// for (let index = 0; index < 5; index++){
//   console.log(animate);
// }

const rainbowOne=()=>{
  let colors = document.querySelector('.icon1')
  colors.classList.toggle('rainbow')
}

const rainbowTwo=()=>{
  let colors = document.querySelector('.icon2')
  colors.classList.toggle('rainbow')
}

const rotateTitle=()=>{
  let spin = document.querySelector(".title");
  spin.classList.toggle('rotateTitle');
}

const rotateTitleCC=()=>{
  let counterspin = document.querySelector('.title');
  counterspin.classList.toggle('rotateTitleCC')
}

const walkRight = () => {
  let walk = document.querySelector(".link");
  walk.classList.toggle("walkRight");
};

const walkLeft = () => {
  let walk = document.querySelector(".link");
  walk.classList.toggle("walkLeft");
};

const circle=()=>{
  let ball = document.querySelector(".mainContainer");
  ball.classList.toggle('circle');
}
