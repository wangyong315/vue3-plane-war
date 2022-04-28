import { Application } from "pixi.js";
import { setupPlane, Plane } from "./Plane";

export * from './Plane'

export const game = new Application({
    width: 500,
    height: 500
})

export const initGame = (_plane, bullets) => {
  const plane = setupPlane(_plane, bullets)

  mainTicker(plane)
  return {
    plane,
    bullets
  }
}

function mainTicker(plane: Plane) {
  game.ticker.add(() => {
    plane.run()
  })
}

document.body.append(game.view)
