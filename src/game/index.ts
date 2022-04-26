import { Application } from "pixi.js";
import { setupPlane } from "./Plane";

export * from './Plane'

export const game = new Application({
    width: 500,
    height: 500
})

export const initGame = (_plane, bullets) => {
  const plane = setupPlane(_plane, {}, bullets)
  return {
    plane,
    bullets
  }
}

document.body.append(game.view)
