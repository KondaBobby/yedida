"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
    const form = useForm();
    const { register, handleSubmit, formState, reset } = form;
    const { errors } = formState;
    const [msg, setMsg] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (msg && msg.includes("successful")) {
            const timer = setTimeout(() => {
                setMsg(null);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [msg]);

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            // Replace YOUR_ACCESS_KEY with your actual Web3Forms access key
            const apiKey = "7be1aa4f-7cb1-4280-8f90-4259ad0f34a0";

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: apiKey,
                    ...data,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setMsg("Your message has been sent successfully!");
                reset(); // Reset form after successful submission
            } else {
                setMsg("Something went wrong. Please try again.");
            }
        } catch (error) {
            setMsg("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-[100px] max-md:p-[50px]">
            <div className="flex justify-center items-center gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                    <h1 className="self-stretch my-auto text-lg leading-7 max-md:mt-10">
                        In case of any queries/doubts please contact us at
                        <br />
                        <a href="mailto:yedida.associates@yahoo.com" className="text-pink-600">
                            info@yedida.in
                        </a>
                    </h1>
                </div>
                <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="flex flex-col grow p-8 w-full text-lg leading-4 rounded-xl shadow-lg bg-white bg-opacity-5 max-md:px-5 max-md:mt-10 max-md:max-w-full"
                    >
                        {/* Name Field */}
                        <div className="flex justify-between">
                            <div className="flex gap-2.5 self-start">
                                <div className="text-zinc-800">Name </div>
                                <div className="text-red-600">*</div>
                            </div>
                            {errors.name && (
                                <p className="text-[#ff3b30] text-[12px] ">
                                    {errors.name?.message}
                                </p>
                            )}
                        </div>
                        <input
                            name="name"
                            type="text"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required",
                                },
                            })}
                            placeholder="Name"
                            className="justify-center items-start px-4 py-4 mt-3.5 text-base whitespace-nowrap bg-white rounded border border-gray-500 border-solid text-neutral-800 max-md:pr-5 max-md:max-w-full focus:outline-none "
                        />

                        {/* Phone Number Field */}
                        <div className="flex justify-between">
                            <div className="flex gap-3 self-start mt-2.5">
                                <div className="text-zinc-800">Phone Number </div>
                                <div className="text-red-600">*</div>
                            </div>
                            {errors.phone && (
                                <p className="text-[#ff3b30] text-[12px] mt-3 ">
                                    {errors.phone?.message}
                                </p>
                            )}
                        </div>
                        <input
                            name="phone"
                            type="text"
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9+-\s()]*$/,
                                    message: "Invalid phone number format",
                                },
                            })}
                            placeholder="Phone Number"
                            className="justify-center items-start px-4 py-4 mt-3.5 text-base whitespace-nowrap bg-white rounded border border-gray-500 border-solid text-neutral-800 max-md:pr-5 max-md:max-w-full focus:outline-none "
                        />

                        {/* Query Field */}
                        <div className="flex justify-between">
                            <div className="mt-3 text-zinc-800 max-md:max-w-full">
                                Query
                                <span className="text-red-600 ml-1">*</span>
                            </div>
                            {errors.query && (
                                <p className="text-[#ff3b30] text-[12px] mt-4 ">
                                    {errors.query?.message}
                                </p>
                            )}
                        </div>
                        <textarea
                            name="query"
                            {...register("query", {
                                required: {
                                    value: true,
                                    message: "Query is required",
                                },
                            })}
                            rows="4"
                            placeholder="Your query"
                            className="absolut top-[2px] p-[10px] shrink-0 mt-2.5 h-24 bg-white rounded border border-gray-500 border-solid max-md:max-w-full resize-none focus:outline-none "
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="justify-center self-start px-8 py-4 mt-2.5 text-base text-center text-white whitespace-nowrap bg-[#149eca] rounded max-md:px-5 disabled:opacity-70 hover:bg-[#0d7ea1] transition-colors duration-200"
                        >
                            {isSubmitting ? "Sending..." : "Send"}
                        </button>

                        {/* Message Status */}
                        {msg && (
                            <p
                                className={`py-[10px] ${msg?.includes("successful")
                                    ? " text-green-500"
                                    : " text-[#ff3b30]"
                                    } `}
                            >
                                {msg}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;