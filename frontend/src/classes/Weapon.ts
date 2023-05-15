interface WeaponOptions {
  img: string
  name: string
  hitPoints: number
}

class Weapon {
  private _img: string
  private _name: string
  private _hitPoints: number
  private _maxHitPoints: number

  constructor (options: WeaponOptions) {
    this._img = options.img
    this._name = options.name
    this._hitPoints = options.hitPoints
    this._maxHitPoints = options.hitPoints
  }

  // Methods
  public damage (value: number) {
    console.log(`${this._name} taking ${value} damage down to ${Math.max(0, this._hitPoints - value)}`)
    this._hitPoints = Math.max(0, this._hitPoints - value)
  }

  // Getters and setters
  public get img () {
    return this._img
  }

  public get name () {
    return this._name
  }

  public get hitPoints () {
    return this._hitPoints
  }

  public get maxHitPoints () {
    return this._maxHitPoints
  }
}

export default Weapon

export type { WeaponOptions }
