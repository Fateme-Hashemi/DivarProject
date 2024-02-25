import { useState } from "react";
import CheckOTPForm from "../components/templates/checkOTPForm";
import SendOPTForm from "../components/templates/sendOTPForm";




function AuthPage() {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState('');
    const [code, setCode]= useState('');

    return (
        <div>
        {step === 1 && <SendOPTForm setStep={setStep} mobile={mobile} setMobile={setMobile} /> }
        {step === 2  && <CheckOTPForm /> }
        </div>
    )
}

export default AuthPage;