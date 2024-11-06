import { AppState } from "../AppState.js";
import { House } from "../models/Car.js";



class HousesService {

  createHouseListing(houseData) { // carData is "RAW" data, it does not have it's "backing class"
    console.log('service creating house', houseData);
    const createdCard = new House(houseData)
    AppState.houses.push(createdCard)
    console.log('AppState cars', AppState.houses);
    this.saveCars() // as i add cars, save to localStorage
  }


  deleteCarListing(carId) {
    console.log('service delteting', carId);
    const carToDelete = AppState.cars.find(car => car.id == carId)
    console.log('🔥🚙', carToDelete);
    // const indexToRemove = AppState.cars.findIndex(car => car.id == carId)
    const indexToRemove = AppState.cars.indexOf(carToDelete)
    AppState.cars.splice(indexToRemove, 1)
    this.saveCars()
  }


  saveHouses() {
    let stringData = JSON.stringify(AppState.house)
    localStorage.setItem('gregslist_houses', stringData)
  }


  // This is called from the constructor in the Controller
  loadHouses() {
    let stringData = localStorage.getItem('gregslist_houses')
    console.log('🧵💾', stringData);
    let housesData = JSON.parse(stringData)
    console.log('🚙🚙💾', housesData);
    // AppState.cars = carsData
    // carsData.forEach(carData => AppState.cars.push(new Car(carData))) kinda works ish
    // new arr ................POJO transforms into "new Car()"
    if (!housesData) return // don't map over nothing, if the app has no storage
    // if (carsData == null) return // don't map over nothing, if the app has no storage
    const houses = housesData.map(houseData => new House(houseData))
    console.log('✨🏠🏠', houses);
    AppState.houses = houses // overwrite the data in the AppState, with the data from localStorage
  }
}

export const housesService = new HousesService()