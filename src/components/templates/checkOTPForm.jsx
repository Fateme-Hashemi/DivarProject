import PropTypes from 'prop-types';
import { CheckOtp } from '../../services/auth';
import { SetCookie } from '../../utils/cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CheckOTPForm ({code, mobile, setCode, setStep}) {

    const submitHandler = async e => {
        e.preventDefault();
        if(code.length !== 5) return;
        const {response, error} = await CheckOtp(mobile, code);
        if(response) {
            SetCookie(response.data);
        }
        if(error) {
            toast.error('کد وارد شده صحیح نمی باشد. لطفا دوباره امتحان کنید.');
        }

    }
    return ( 
   <div>
     <form onSubmit={submitHandler}>
        <p>تایید کد پیامک شده</p>
        <span>کد تایید به شماره «{mobile}» را وارد کنید.</span>
        <label htmlFor='input'>کد تایید را وارد کنیدو</label>
        <input type='text' placeholder='کد تایید' value={code} onChange={(e) => setCode(e.target.value)} />
        <button type='submit'>ورود</button>
        <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form> 
    <ToastContainer />
   </div>
    );
}

CheckOTPForm.propTypes = {
    setStep: PropTypes.func.isRequired,
    mobile: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    setCode: PropTypes.func.isRequired,
};
 
export default CheckOTPForm;