import Card, { type CardOptions } from './Card'
import type Weapon from './Weapon'

interface PlayerCardOptions extends CardOptions {
  weapon?: Weapon
}

class PlayerCard extends Card {
  private _weapon?: Weapon
  constructor (options?: PlayerCardOptions) {
    super(options)
    this._weapon = options?.weapon
  }

  // Getters and setters
  public get weapon (): Weapon | undefined {
    return this._weapon
  }

  public set weapon (value: Weapon | undefined) {
    this._weapon = value
  }
}

export default PlayerCard
