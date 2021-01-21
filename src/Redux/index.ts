import { combineReducers } from "redux"
import { mapCenterReducer } from "./store/map/map.reduser"
import { photoReducer } from "./store/photo/photo.reduser"
import { iconReducer } from "./store/icon/icon.reduser"

export default combineReducers({
  mapCenter: mapCenterReducer,
  photo: photoReducer,
  icon: iconReducer,
})
