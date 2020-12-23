import axios from 'axios';

import { GET_ERRORS, GET_ORDERS ,GET_ORDER, DELETE_ORDER} from './type';
export const createOrder=(order,history)=>async dispatch=> {
    //  try {
        //const res =await axios.post ("http://localhost:8080/api/customers",customer)
        await axios.post("http://localhost:8081/productorders",order)
        history.push("/productOrder");
    // } catch (error) {
    //     dispatch({
    //         type:GET_ERRORS,
    //         payload:error.response.data
    //     })
    // }
}
    export const getOrders=()=>async dispatch=>{
        const res=await axios.get("http://localhost:8081/productorders/all");
        console.log(res);
        dispatch({
            type:GET_ORDERS,
            payload:res.data
        })
    }

    export const getOrder=(id,order,history)=>async dispatch=>{
        const res=await axios.put(`http://localhost:8081/productorders/+id,order`);
        dispatch({
            type:GET_ORDER,
            payload:res.data
        })
    }

    export const deleteOrder=(orderId)=>async dispatch=>{
        if(window.confirm("Are you sure ? This will delete the project and the data related to it")) {
            await axios.delete(`http://localhost:8081/productorders/delete/${orderId}`);
            dispatch({
                type:DELETE_ORDER,
                payload:orderId
            })
         }
} 