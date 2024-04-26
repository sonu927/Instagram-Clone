import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";


const useSignupWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const showToast = useShowToast();
      const loginUser = useAuthStore(state => state.login);

      const signup = async (inputs)=>{
        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
            showToast("Error","Please fill all the fields", "error");
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password);
            console.log("jdfdjd",newUser,error);
            if(!newUser && error){
                showToast("Error",error.message,"error");
                return;
            }
            if(newUser){
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    fullname: inputs.fullname,
                    username: inputs.username,
                    bio: "",
                    profilePic: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                }
                await setDoc(doc(firestore,"users",newUser.user.uid),userDoc);
                console.log("jdjfhjdfhfdj",userDoc);
                localStorage.setItem("user-info",JSON.stringify(userDoc));
                loginUser(userDoc);
            }
        } catch (error) {
            showToast("Error",error.message,"error");
        }
      }

    return {loading,error,signup};
}

export default useSignupWithEmailAndPassword