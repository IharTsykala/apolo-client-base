import { Action } from "../../interfacesAction/action.interface"
import { iconInterface } from "../../InterfacesEntity/icon.interface"

export const ActionTypes = {
  SET_LIST_ICONS: "[ICON] Set list icons",
}

export const setListIcons = (
  arrayIcons: iconInterface[]
): Action<iconInterface[]> => ({
  type: ActionTypes.SET_LIST_ICONS,
  payload: arrayIcons,
})
