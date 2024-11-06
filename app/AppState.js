import { Car } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  houses = [
    new House({
      rooms: '3',
      listings: 'relevant',
      year: 2017,
      squareFt: '1,401',
      imgUrl: 'https://images.unsplash.com/photo-1483541954964-dfd427f3dac7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxiZWFjaCUyMGhvdXNlfGVufDB8fDB8fHww'
    }),
    new House({
      rooms: '4',
      listings: 'new',
      year: 2020,
      squareFt: '1,689',
      imgUrl: 'https://images.unsplash.com/photo-1654535095187-769ba364ad7a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
    }),
    new House({
      rooms: '2',
      listings: 'relevant',
      year: 2007,
      squareFt: '1,056',
      imgUrl: 'https://images.unsplash.com/photo-1508895531775-e4ae3b8994f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D'
    }),
  ]

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())