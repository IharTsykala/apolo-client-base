import { photoInterface } from "../../InterfacesEntity/photo.interface"
import { ActionTypes } from "./photo.actions"
import { Action } from "../../interfacesAction/action.interface"

// import cake from "../../../assets/cake.png"
// import businessCards from "../../../assets/businessCards.png"
// import bottles from "../../../assets/bottles.png"
// import book from "../../../assets/book.png"
// import mathematik from "../../../assets/mathematik.png"
// import healingTea from "../../../assets/healingTea.png"

// import womanWithGlasses from "../../../assets/womanWithGlasses.png"
// import manWithoutBeard from "../../../assets/manWithoutBeard.png"
// import manWithSmallBeard from "../../../assets/manWithSmallBeard.png"
// import manWithBigBeard from "../../../assets/manWithBigBeard.png"
// import womanWithoutGlasses from "../../../assets/womanWithoutGlasses.png"

// const arrayOfWorks = [
//   { namePhoto: "cake", photoIMG: cake },
//   { namePhoto: "businessCards", photoIMG: businessCards },
//   { namePhoto: "bottles", photoIMG: bottles },
//   { namePhoto: "book", photoIMG: book },
//   { namePhoto: "mathematik", photoIMG: mathematik },
//   { namePhoto: "healingTea", photoIMG: healingTea },
// ]

// const arrayOfTeam = [
//   { namePhoto: "womanWithGlasses", photoIMG: womanWithGlasses },
//   { namePhoto: "manWithoutBeard", photoIMG: manWithoutBeard },
//   { namePhoto: "manWithSmallBeard", photoIMG: manWithSmallBeard },
//   { namePhoto: "manWithBigBeard", photoIMG: manWithBigBeard },
//   { namePhoto: "womanWithoutGlasses", photoIMG: womanWithoutGlasses },
//   { namePhoto: "womanWithGlasses", photoIMG: womanWithGlasses },
// ]

export interface State {
  // listWorksPhoto: photoInterface[];
  // listTeamPhoto: photoInterface[];
  currentPhoto: photoInterface | null;
  stateModal: boolean;
}

const initialState: State = {
  // listWorksPhoto: arrayOfWorks,
  // listTeamPhoto: arrayOfTeam,
  currentPhoto: null,
  stateModal: false,
}
export const photoReducer = (
  state: State = initialState,
  action: Action<boolean>
) => {
  switch (action.type) {
  case ActionTypes.SET_CURRENT_PHOTO:
    return {
      ...state,
      currentPhoto: action.payload,
    }
  case ActionTypes.SET_STATE_MODAL_WINDOW:
    return {
      ...state,
      stateModal: action.payload,
    }
  default:
    return state
  }
}
