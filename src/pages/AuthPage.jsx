import { useState } from "react";
import CheckOTPForm from "../components/templates/checkOTPForm";
import SendOPTForm from "../components/templates/sendOTPForm";

const AuthPage = () => {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState('');
    const [code, setCode]= useState('');

    return (
        <div>
        {step === 1 && <SendOPTForm /> }
        {step === 2  && <CheckOTPForm /> }
        </div>
    )
}

export default AuthPage;