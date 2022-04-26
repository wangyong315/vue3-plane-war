import Bullet from "./Bullet"

export interface Plane {
  attack(),
  x: number,
  y: number,
  moveDown: () => void,
  moveUp: () => void,
  moveLeft: () => void,
  moveRight: () => void
}

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 5
}

export function setupPlane(plane, options?, bullets:Bullet[] = []):Plane {
  plane.bullets = bullets
  Object.assign(plane, defaultOptions, options)

  plane.attack = () => {
    const bullet = new Bullet()
    bullet.x = plane.x + 22
    bullet.y = plane.y
    bullets.push(bullet)
  }

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

  return plane
}
