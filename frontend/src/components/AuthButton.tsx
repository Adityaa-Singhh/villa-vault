import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, loginSchema, signupSchema } from "@/schemas/authSchema"
import toast from "react-hot-toast"
import { supabase } from "@/supabaseClient"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useNavigate } from "react-router"
import GoogleAuthButton from "./GoogleAuthButton"
import { IoIosArrowRoundBack } from "react-icons/io";
import clsx from "clsx"

interface AuthButtonProps {
    className?: string;
}

const AuthButton = (props: AuthButtonProps) => {
    const [authTab, setAuthTab] = useState<"Login" | "OTP Login" | "Signup" | "Forgot Password">("Login");

    const [otp, setOtp] = useState<string>("");

    const navigate = useNavigate();

    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            login_email: "",
            login_password: "",
        },
    });

    const signupForm = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            fullname: "",
            username: "",
            signup_email: "",
            signup_password: "",
        },
    });

    const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const handleLogin = async (formData: z.infer<typeof loginSchema>) => {
        const validate = loginSchema.safeParse({
            login_email: formData.login_email,
            login_password: formData.login_password,
        });

        if (validate.success) {
            const email = validate.data.login_email as string;
            const password = validate.data.login_password as string;

            const loginResponse = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (loginResponse.error?.message) {
                toast.error(loginResponse.error.message);
            } else {
                toast.success("Log in successful");
                navigate("/dashboard");
            }
        } else {
            toast.error("Please enter valid data");
        }
    }

    const handleSignup = async (formData: z.infer<typeof signupSchema>) => {
        const signupValidate = signupSchema.safeParse({
            username: formData.username,
            fullname: formData.fullname,
            signup_email: formData.signup_email.toString(),
            signup_password: formData.signup_password.toString(),
        });

        if (signupValidate.success) {
            const username = signupValidate.data.username as string;
            const fullname = signupValidate.data.fullname as string;
            const email = signupValidate.data.signup_email as string;
            const password = signupValidate.data.signup_password as string;

            const usernameExists = await supabase
                .from("profiles")
                .select("username")
                .match({
                    username: username,
                });

            if (usernameExists.data?.length) {
                toast.error("Username already exists");
                return;
            }

            const signupResponse = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        email: email,
                        username: username,
                        full_name: fullname,
                    },
                },
            });

            if (signupResponse.error?.message) {
                toast.error(signupResponse.error.message);
            } else {
                toast.success("Account created successfully");
                navigate("/dashboard");
            }
        } else {
            toast.error("Please enter valid data");
        }
    }

    const handleForgotPassword = async (
        formData: z.infer<typeof forgotPasswordSchema>
    ) => {
        const forgotPasswordValidate = forgotPasswordSchema.safeParse({
            email: formData.email,
        });

        if (forgotPasswordValidate.success) {
            const email = forgotPasswordValidate.data.email as string;

            const forgotPasswordResponse = await supabase.auth.resetPasswordForEmail(
                email,
                {
                    redirectTo: `${import.meta.env.VITE_BASE_URL}/update-password`,
                }
            );

            if (forgotPasswordResponse.error?.message) {
                toast.error(forgotPasswordResponse.error.message);
            } else {
                toast.success("Please check your registered email to reset password");
            }
        } else {
            toast.error(forgotPasswordValidate.error.message);
        }
    };

    const handleOTPSignin = async (formData: z.infer<typeof forgotPasswordSchema>) => {
        const forgotPasswordValidate = forgotPasswordSchema.safeParse({
            email: formData.email,
        });

        if (forgotPasswordValidate.success) {
            const email = forgotPasswordValidate.data.email as string;

            const forgotPasswordResponse = await supabase.auth.signInWithOtp(
                {
                    email: email,
                    options: {
                        emailRedirectTo: `${import.meta.env.VITE_BASE_URL}/verify-otp`,
                        shouldCreateUser: false,
                    },
                },
            );

            if (forgotPasswordResponse.error?.message) {
                toast.error(forgotPasswordResponse.error.message);
            } else {
                toast.success("Please check your registered email for OTP");
            }
        } else {
            toast.error(forgotPasswordValidate.error.message);
        }
    }

    const handleOtpVerify = async () => {
        const { email } = forgotPasswordForm.getValues();

        if (!email) return;

        const { error } = await supabase.auth.verifyOtp({
            email: email,
            token: otp,
            type: "email",
        });

        if (error?.message) {
            toast.error(error.message);
            return;
        }

        navigate("/dashboard");
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={clsx("bg-white text-primary px-4 py-2 rounded-full font-medium cursor-pointer", props.className)}>
                    Log In
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl">
                        {authTab === "Forgot Password" &&
                            <IoIosArrowRoundBack className="cursor-pointer items-center" onClick={() => setAuthTab("Login")} />}
                        {authTab}
                    </DialogTitle>
                </DialogHeader>

                {
                    authTab === "Login" &&
                    <Form {...loginForm}>
                        <form onSubmit={loginForm.handleSubmit(handleLogin)} className="flex flex-col space-y-5">
                            <FormField
                                control={loginForm.control}
                                name="login_email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="login_email"
                                                placeholder="e.g. john@doe.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={loginForm.control}
                                name="login_password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="login_password"
                                                type="password"
                                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Login</Button>
                            <p className="text-center underline cursor-pointer" onClick={() => setAuthTab("OTP Login")}>Login with OTP</p>
                        </form>
                    </Form>
                }
                {
                    authTab === "Signup" &&
                    <Form {...signupForm}>
                        <form
                            onSubmit={signupForm.handleSubmit(handleSignup)}
                            className="flex flex-col space-y-5"
                        >
                            <FormField
                                control={signupForm.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="fullname"
                                                placeholder="e.g. John Doe"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={signupForm.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="username"
                                                placeholder="e.g. john.doe"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={signupForm.control}
                                name="signup_email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="signup_email"
                                                placeholder="e.g. john@doe.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={signupForm.control}
                                name="signup_password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="signup_password"
                                                type="password"
                                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Signup</Button>
                        </form>
                    </Form>
                }
                {
                    authTab === "Forgot Password" &&
                    <Form {...forgotPasswordForm}>
                        <form onSubmit={forgotPasswordForm.handleSubmit(
                            handleForgotPassword
                        )}
                            className="flex flex-col space-y-5">
                            <FormField
                                control={forgotPasswordForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input id="email" placeholder="e.g. john@doe.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Send Email</Button>
                        </form>
                    </Form>
                }
                {
                    authTab === "OTP Login" &&
                    <>
                        <Form {...forgotPasswordForm}>
                            <form onSubmit={forgotPasswordForm.handleSubmit(
                                handleOTPSignin
                            )}
                                className="flex flex-col space-y-5">
                                <FormField
                                    control={forgotPasswordForm.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input id="email" placeholder="e.g. john@doe.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">
                                    Send OTP
                                </Button>
                            </form>
                        </Form>
                        <InputOTP className="flex w-full" maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
                            <InputOTPGroup className="flex flex-1 justify-center">
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup className="flex flex-1 justify-center">
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                        <Button onClick={handleOtpVerify}>Verify OTP</Button>
                    </>
                }
                <DialogFooter className="flex">
                    {authTab !== "Forgot Password" ?
                        <div className="flex flex-col gap-3 w-full"><div className="flex gap-2 items-center">
                            <Separator className="basis-[45%] my-4" />
                            <p>OR</p>
                            <Separator className="basis-[45%] my-4" />
                        </div>
                            <GoogleAuthButton />
                            {authTab === "Login" ?
                                <div className="flex justify-between">
                                    <span className="underline cursor-pointer" onClick={() => setAuthTab("Forgot Password")}>
                                        Forgot Password?
                                    </span>
                                    <p>
                                        New here?&nbsp;
                                        <span className="underline cursor-pointer" onClick={() => setAuthTab("Signup")}>
                                            Register
                                        </span>
                                    </p>
                                </div>
                                : authTab === "OTP Login" ?
                                    <p className="flex justify-center underline cursor-pointer" onClick={() => setAuthTab("Login")}>
                                        Login with Password
                                    </p> :
                                    <p className="flex justify-center">
                                        Already registered?&nbsp;
                                        <span className="underline cursor-pointer" onClick={() => setAuthTab("Login")}>
                                            Login
                                        </span>
                                    </p>
                            }
                        </div> : <></>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AuthButton
