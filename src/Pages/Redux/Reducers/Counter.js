let initaial=0;
const chnagenumber=(state=initaial,action)=>{
    switch(action.type){
        case "INC": return state+1;
        case "DEC": return state-1;
        default : return state;
    }
}

export default chnagenumber