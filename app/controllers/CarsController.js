import { AppState } from "../AppState.js";
import { housesService } from "../services/CarsService.js";


export class HousesController {
  constructor() {
    console.log('🏠🎮');
    housesService.loadHouses()
    this.drawHouses()
  }


  drawHouses() {
    console.log('✏️🏠🏠');
    const houseListingsElm = document.getElementById('house-listings')
    houseListingsElm.innerHTML = ''
    AppState.houses.forEach(house => houseListingsElm.innerHTML += house.Card)
  }

  createHouseListing() {
    // FIXME what's wrong with this event?!
    event.preventDefault() // prevent the default form submission event
    const formElm = event.target
    console.log('Creating a House', formElm);
    console.log(formElm.rooms.value);
    // NOTE collect all the data from the form!
    const formData = {
      rooms: formElm.rooms.value,
      listings: formElm.listings.value,
      year: formElm.year.value,
      squareFt: formElm.squareFt.value
      imgUrl: formElm.imgUrl.value,
      price: formElm.price.value,
    }
    console.log(formData); // check to see if it's all there
    housesService.createHouseListing(formData)
    this.drawHouses()
  }

  deleteHouseListing(houseId) {
    console.log('🔥deleting!', houseId);
    const confirmed = confirm("Are you sure you want to delete this? this action cannot be REVERSED. You will REGRET IT!")
    if (!confirmed) return
    const areYourSureSure = confirm("Are you sure?")
    if (!areYourSureSure) return
    const areYouSureSureSure = confirm("Are you FOR REAL?!")
    if (!areYouSureSureSure) return
    const typingChallenge = prompt('Please type "I missed out!" to confirm this action')
    if (typingChallenge != 'Hell Yeah') return

    housesService.deleteHouseListing(houseId)
    this.drawHouses()
  }
}