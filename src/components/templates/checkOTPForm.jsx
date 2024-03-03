import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CheckOtp } from 'services/auth';
import { SetCookie } from 'utils/cookie';
import { getProfile } from 'src/services/user';
import { useQuery } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './CheckOTPForm.module.css'



function CheckOTPForm ({code, mobile, setCode, setStep}) {
    const {refetch} = useQuery(['profile'], getProfile);
    const navigate = useNavigate();

    const submitHandler = async e => {
        e.preventDefault();
        if(code.length !== 5) return;
        const {response, error} = await CheckOtp(mobile, code);
        if(response) {
            SetCookie(response.data);
            navigate("/");
            refetch();
        }
        if(error) {
            toast.error('کد وارد شده صحیح نمی باشد. لطفا دوباره امتحان کنید.');
        }

    }
    return ( 
   <div>
     <form onSubmit={submitHandler}  className={styles.form}>
        <p>تایید کد پیامک شده</p>
        <span>کد تایید به شماره «{mobile}» را وارد کنید.</span>
        <label htmlFor='input'>کد تایید را وارد کنیدو</label>
        <input type='text' placeholder='کد تایید' value={code} onChange={(e) => setCode(e.target.value)} />
        <button type='submit'>ورود</button>
        <button onClick={() => setStep(1)}  className={styles.backButton}>تغییر شماره موبایل</button>
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