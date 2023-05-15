import defaultImage from '../assets/images/empty-1.png'

type CardType = 'Empty' | 'Loot' | 'Trap' | 'Enemy' | 'Player'

interface CardOptions {
  img: string
  name: string
  type: CardType
  health?: number
  becomes?: CardOptions
}

// default empty card
const emptyCard: CardOptions = {
  img: defaultImage,
  name: 'Empty',
  type: 'Empty'
} as const

class Card {
  private static _currId: number = 0

  private _img: string
  private _name: string
  private _id: number
  private _type: CardType
  private _becomes?: CardOptions
  private _health?: number
  private _maxHealth?: number

  constructor (options = emptyCard) {
    this._id = Card._currId++
    this._name = options.name
    this._img = options.img
    this._type = options.type
    this._becomes = options.becomes
    this._health = options.health
    this._maxHealth = options.health
  }

  // Uses the provided attack power to damage the card. Returns the amount of damage done to the attaching weapon/card
  public damage (attackPower: number): number {
    if (this._health === undefined) return 0
    const startHealth = this._health
    this._health = Math.max(0, startHealth - attackPower)
    return startHealth - this._health
  }

  // Getters and setters
  public get name (): string {
    return this._name
  }

  public get img (): string {
    return this._img
  }

  public get id (): number {
    return this._id
  }

  public get type (): CardType {
    return this._type
  }

  public get becomes (): CardOptions | undefined {
    return this._becomes
  }

  public get health (): number | undefined {
    return this._health
  }

  public get maxHealth (): number | undefined {
    return this._maxHealth
  }
}

export default Card

export {
  emptyCard
}

export type {
  CardOptions
}
