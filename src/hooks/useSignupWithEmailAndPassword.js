import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useShowToast from "./useShowToast";


const useSignupWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const showTost = useShowToast();

      const signup = async (inputs)=>{
        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
            showTost("Error","Please fill all the fields", "error");
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password);
            console.log("jdfdjd",newUser);
            if(!newUser && error){
                showTost("Error",error,"error");
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
                localStorage.setItem("user-info",userDoc);
            }
        } catch (error) {
            showTost("Error",error,"error");
        }
      }

    return {loading,error,signup};
}

export default useSignupWithEmailAndPassword