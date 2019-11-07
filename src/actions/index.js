

//action types
export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_FEATURES = "REMOVE_FEATURES";
export const UPDATE_TOTAL = "UPDATE_TOTAL";

//action creators (actions)
export const increment = item => {
    //console.log(item)
    return {
        type: BUY_ITEM,
        payload: item
    }
}
export const decrement = item => {
    return {
        type: REMOVE_FEATURES,
        payload: item
    }
}
export const updatetotal = item => {
    return {
        type: UPDATE_TOTAL,
        payload: item
    }
}