
import PropTypes from 'prop-types';
import { SendOtp } from '../../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SendOPTForm ({setStep, mobile, setMobile}){
    const submitHandler = async (e)=> {
        e.preventDefault();
        console.log(e);
        if(mobile.length !== 11) return;
        const {response, error} =  await SendOtp(mobile);
     
            if(response) {
                setStep(2);
                toast.success("کد تایید با موفقیت ارسال شد.");
            }
        if(error) {
                toast.error(error.response.data.message);
        }
    }
    return ( 
        <div>
         
   <form onSubmit={submitHandler}>
            <p>ورود به حساب کاربری</p>
            <span>
                برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید. کد تایید به این شماره پیامک  خواهد شد.
            </span>
            <label htmlFor="input">
شماره موبایل خود را وارد کنید.
            </label>
            <input type="text" id="input" placeholder="شماره موبایل" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <button type="submit">ارسال کد تایید</button>
        </form>
        <ToastContainer />
        </div>
     
     );
}
SendOPTForm.propTypes = {
    setStep: PropTypes.func.isRequired,
    mobile: PropTypes.string.isRequired,
    setMobile: PropTypes.func.isRequired
};
export default SendOPTForm;