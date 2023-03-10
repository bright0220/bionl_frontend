import { signInWithEmailAndPassword } from "firebase/auth";
import { TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthLayout, Button } from "@/components";
import { LoginResponse } from "@/features/auth";
import { userLogin } from "@/features/auth/api/userLogin";
import { auth, FirebaseMessagesMapper } from "@/lib/firebase";

import { useAuth } from "../../hooks/useAuth";
import storage from "@/utils/storage";
export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuthState } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    userLogin({ email, password })
      .then((userInfo: LoginResponse) => {
        // TODO: proper handling for the sign in

        storage.setToken(userInfo.token);

        setAuthState({
          user: {
            id: "1",
          },
          token: userInfo.token,
        });
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
        return userInfo.token;
      })
      .catch((e) => {
        const { code } = e;
        if (code) {
          toast(FirebaseMessagesMapper[code] || "Something went wrong");
        }

        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <AuthLayout>
      <div>
        <h2 className="mt-16 text-3xl lg:mt-10 lg:text-2xl">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-16 flex w-80 flex-col gap-4 text-lg lg:mt-10">
            <TextInput
              required
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />

            <TextInput
              required
              id="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <Button disabled={isLoading} isLoading={isLoading} type="submit">
              Sign in
            </Button>

            <div className="flex flex-col gap-1 text-sm text-neutral-500">
              <Link className="" to="/register">
                New to bionl? <span className="text-primary-500">Sign Up</span>
              </Link>
              <Link to="/reset">Forgot password?</Link>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
