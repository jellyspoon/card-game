import type { CardOptions } from '@/classes/Card'
import chest1 from '@/assets/images/chest-1.png'
import sword1 from '@/assets/images/sword-1.png'

const items: CardOptions[] = [
  {
    name: 'Sword',
    img: sword1,
    type: 'Loot'
  },
  {
    name: 'Good Chest',
    img: chest1,
    type: 'Loot'
  }
]

export default items
