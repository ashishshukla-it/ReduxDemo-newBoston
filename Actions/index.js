export const selectUser=(user)=>{
    console.log("You have selected user:",user.first);
    return{
        type:"USER_SELECTED",
        payload:user
    }
};