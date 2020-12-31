export const reducer = (state,action) =>{
    switch(action.type){
        case "INCREMENT":
            return + 1;
        case "DECREMENT":
            return - 1;
        default:
            return state;
    }
}