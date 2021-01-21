import { mapCenter } from "../../InterfacesEntity/mapCenter.interface"

export interface State {
  mapCenter: mapCenter;
}

const initialState: State = {
  mapCenter: {
    lat: 53.901634,
    lng: 27.545265,
  },
}

export const mapCenterReducer = (state: State = initialState) => state
