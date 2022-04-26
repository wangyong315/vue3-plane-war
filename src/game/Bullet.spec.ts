import { describe, it, expect } from "vitest";
import Bullet from "./Bullet";

describe('Bullet', () => {
  it('move', () => {
    const bullet = new Bullet()
    bullet.y = 1
    bullet.move()
    expect(bullet.y).toBe(0)
  })
})
