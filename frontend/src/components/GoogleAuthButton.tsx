import { FcGoogle } from "react-icons/fc";
import { Button } from './ui/button'
import { supabase } from "@/supabaseClient";
import toast from "react-hot-toast";

const GoogleAuthButton = () => {
    const handleSignin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${import.meta.env.SERVER_URL}/auth/callback`,
            },
        });

        if (error?.message) {
            toast.error(error.message);
        }
    }

    return (
        <Button onClick={handleSignin}>
            <FcGoogle />
            <p>Continue with Google</p>
        </Button>
    )
}

export default GoogleAuthButton
