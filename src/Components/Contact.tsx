'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: '800',
    subsets: ['cyrillic']
})

const montserrat2 = Montserrat({
    weight: '600',
    subsets: ['cyrillic']
})

type ContactFormInputs = {
    name: string;
    email: string;
    message: string;
};

const Contact: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormInputs>();

    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
        const url =
            'https://script.google.com/macros/s/AKfycbwJ3QOaC4ffT_co22hivcyRKG7O_VUVKRqriYSSK0MN1_5FkNny5KwZLd3-iFwBrKuG/exec';

        const submission = fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        toast.promise(
            submission,
            {
                pending: 'Sending...',
                success: 'Message Sent Successfully!',
                error: 'Failed! Try Again Later.',
            },
            {
                position: 'bottom-right',
                theme: 'dark',
            }
        );

        try {
            await submission;
            reset();
        } catch (error) {
            console.error('Submission failed:', error);
        }
    };



    return (
        <div id='contact' className="flex flex-col items-center bg-black justify-center lg:min-h-screen mt-8 space-y-20 px-4 pt-10">
            <h2 className={`text-5xl ${montserrat.className} text-white relative inline-block`}>
                <span className="relative z-10">Contact</span>
                <span className="absolute left-9 -bottom-1 h-5 w-full bg-red-500 z-0"></span>
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`flex flex-col ${montserrat2.className} w-full max-w-lg space-y-4`}
            >
                <p className="text-white  text-center mb-6">
                    Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
                </p>

                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register('name', { required: 'Name is required' })}
                        className="text-white px-3 py-2 focus:outline-none bg-[#282828] w-full rounded"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        className="text-white px-3 py-2 focus:outline-none bg-[#282828] w-full rounded"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <textarea
                        placeholder="Message"
                        {...register('message', { required: 'Message is required' })}
                        className="text-white px-3 py-2 focus:outline-none bg-[#282828] w-full rounded h-40 resize-none"
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="mt-6 w-40 relative overflow-hidden text-red-500 font-semibold py-2 px-4 rounded-md group self-end cursor-pointer"
                >
                    <span className="absolute inset-0 bg-red-500 transition-transform duration-300 ease-out transform scale-y-0 origin-bottom group-hover:scale-y-100"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        Submit
                    </span>
                </button>
            </form>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </div>
    );
};

export default Contact;
