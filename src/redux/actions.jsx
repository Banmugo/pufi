import axios from 'axios';

export const POST_FORM = 'POST_FORM';

export const postForm = (payload)=>{
    return async (dispatch) => {
        try {
           const result = await axios.post('https://formspree.io/f/xpznwpwq', payload)
           return dispatch({type: POST_FORM, payload:result})              
        } catch (error) {
            console.log(error)
        }
    }
};