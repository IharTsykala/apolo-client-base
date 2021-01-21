import { iconInterface } from "../../InterfacesEntity/icon.interface"

export interface State {
  listIconsFooter: [];
}

const initialState: State = {
  listIconsFooter: [],
}
export const iconReducer = (state: State = initialState) => state
