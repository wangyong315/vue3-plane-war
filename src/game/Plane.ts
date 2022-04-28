import Bullet from "./Bullet"

export interface Plane {
  attack(),
  run(),
  x: number,
  y: number,
  speed: number,
  moveDown: () => void,
  moveUp: () => void,
  moveLeft: () => void,
  moveRight: () => void
}

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 10
}

export function setupPlane(plane, bullets:Bullet[] = [], options?,):Plane {
  plane.bullets = bullets
  Object.assign(plane, defaultOptions, options)
  initAttack(plane, bullets)
  initMove(plane)
  initRun(plane, bullets)

  return plane
}

function initAttack(plane:Plane, bullets) {
  plane.attack = () => {
    const bullet = new Bullet()
    bullet.x = plane.x + 22
    bullet.y = plane.y
    bullet.border = 0
    bullet.onDestroy = () => {
      const index = bullets.indexOf(bullet)
      bullets.splice(index, 1)
    }
    bullets.push(bullet)
  }
}

function initRun(plane:Plane, bullets) {
  plane.run = () => {
    bullets.forEach(bullet => {
      bullet.move()
    })
  }
}

function initMove(plane: Plane) {
  plane.moveDown = function () {
    plane.y += plane.speed
  }

  plane.moveUp = function () {
    plane.y -= plane.speed
  }

  plane.moveLeft = function () {
    plane.x -= plane.speed
  }

  plane.moveRight = function () {
    plane.x += plane.speed
  }
}
