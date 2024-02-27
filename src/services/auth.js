import api from 'configs/api'

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

const CheckOtp = async (mobile, code) => {
    try{
        const response = await api.post('auth/check-otp', {mobile, code});
        return {response}
    }catch(error) {
        return error;
    }
}

export {SendOtp, CheckOtp};