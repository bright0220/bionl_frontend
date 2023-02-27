import { TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { AuthLayout, Button, Link } from "@/components";
import { userSignup } from "@/features/auth/api/userSignup";
import { auth, FirebaseMessagesMapper } from "@/lib/firebase";

import { useAuth } from "../../hooks/useAuth";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuthState } = useAuth();
  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organization, setOrganization] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setCountry(data.country_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFristName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOrganizationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrganization(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      organization,
      country,
    };

    userSignup(data)
      .then((res) => {
        // TODO: Login user and redirect to home page
        // TODO: proper handling for the sign up
        // setAuthState({
        //   user: {
        //     id: "1",
        //   },
        //   token: "foo",
        // });
        const from = location.state?.from?.pathname || "/login";
        navigate(from, { replace: true });
        toast("SignUp is successful!");
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
        <h2 className="mt-16 text-3xl lg:mt-10 lg:text-2xl">
          Create your account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="w-100 mt-16 flex flex-col gap-3 text-lg lg:mt-10">
            <div className="flex gap-3">
              <TextInput
                required
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <TextInput
                required
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <TextInput
              required
              placeholder="Email"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
            <TextInput
              required
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <TextInput
              required
              placeholder="Organization"
              type="text"
              value={organization}
              onChange={handleOrganizationChange}
            />
            <CountryDropdown
              classes="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={country}
              onChange={(val) => setCountry(val)}
            />
            <Button className="w-full" isLoading={isLoading} type="submit">
              Create Account
            </Button>
            <Link
              className="text-sm text-gray-500 hover:text-primary-500 focus:text-primary-500 "
              to="/login"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
