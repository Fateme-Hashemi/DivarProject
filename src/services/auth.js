import api from '../configs/api'

const SendOtp = async ( mobile) => {
    try{
const response = await api.post('auth/send-otp', {mobile});
return {
    response
}
    }catch(error){
        return {
            error
        }
    }
}

export {SendOtp};