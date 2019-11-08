

//action types
export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

//action creators (actions)
export const increment = item => {
    //console.log(item)
    return {
        type: BUY_ITEM,
        payload: item
    }
}
export const decrement = feature => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}
