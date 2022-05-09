/* eslint-disable no-undef */
const cart = [];

export const handleCart = (state = cart,action)=>{
    const product = action.payload
    switch(action.type){
        case ADDITEM:
            //check if Product All ready Exist
            const exist = state.find((x)=> x.id === product.id)
            if(exist){
                //Increase The quantity
                return state.map((x)=>x.id === product.id?{...x,qty:x.qty + 1}:x)
            }else{
                const product = action.payload
                return[
                    ...state,[{
                        ...product,
                        qty:1,
                    }]
                ]
            }
            break;

            case "DELETEITEM":
                const exist1 = state.find((x)=> x.id === product.id)
                if(exist1){
                    return state.filter((x)=>x.id !== product.id)
                }else{
                    return state.map((x)=>x.id === product.id?{...x,qty:x.qty-1}:x)
                }

            default : break
    }
}