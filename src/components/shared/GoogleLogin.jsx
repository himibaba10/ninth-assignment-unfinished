import { Button } from "keep-react";
import googleIcon from "../../assets/google.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const GoogleLogin = () => {
    const {signInWithGoogle, setUser} = useContext(AuthContext);

    const handleGoogleBtnClick = () => {
        signInWithGoogle()
        .then(res=>{
            setUser(res.user)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className="text-white text-center">
            <hr className="mt-5 py-1" />
            <span>Or you can login with</span>
            <Button onClick={handleGoogleBtnClick} className="bg-white text-black w-full mt-5" type="primary" size="md">
                <span className="pr-2">
                    <img className="w-8" src={googleIcon} />
                </span>
                <span className="text-lg font-poppins">Google</span>
            </Button>
        </div>
    );
};

export default GoogleLogin;