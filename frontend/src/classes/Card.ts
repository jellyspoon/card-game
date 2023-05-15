import defaultImage from '../assets/images/empty-1.png'
class Card {
  private _img: string
  private _name: string
  private _id: number
  private static _currId: number = 0

  constructor (options?: { img: string, name: string }) {
    this._name = options?.name || 'Empty card'
    this._img = options?.img || defaultImage
    this._id = Card._currId++
  }

  // Getters and setters
  public get name (): string {
    return this._name
  }

  public set name (value: string) {
    this._name = value
  }

  public set img (value: string) {
    this._img = value
  }

  public get img (): string {
    return this._img
  }

  public get id (): number {
    return this._id
  }
}

export default Card
