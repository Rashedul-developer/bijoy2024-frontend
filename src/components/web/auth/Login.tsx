"use client"

import Link from "next/link";
import Image from "next/image";
import logo from "@images/bijoy_Logo.png"
import Button from "@/components/utils/button/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useRouter } from "next/navigation";
import { Card } from "antd";

export default function Login() {
    const router = useRouter();
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Email required'),
                password: Yup.string().min(8).required('Password required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values, 'form values');
                setTimeout(() => {
                    setSubmitting(false);
                    router.push('/web/home');
                }, 3000)
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="min-h-svh">
                        <Card style={{ maxWidth: 450, margin: 'auto', marginTop: '3%' }}>
                            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <Image quality={100} src={logo} alt="logo" width={48} height={48} className="mx-auto w-auto" />
                                    <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                        Sign in to your account
                                    </h2>
                                </div>

                                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                                    <div className="mb-2">
                                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">Email address</label>
                                        <Field type="email" className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="email" />
                                        <ErrorMessage render={msg => <div className="text-red-400">{msg}</div>} name="email" />
                                    </div>

                                    <div className="mb-2">
                                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="password">Password</label>
                                        <Field type="password" className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="password" />
                                        <ErrorMessage render={msg => <div className="text-red-400">{msg}</div>} name="password" />
                                    </div>

                                    <div className="mb-4 text-sm text-right">
                                        <a href="#" className="font-semibold text-blue-500 hover:text-blue-600">
                                            Forgot password?
                                        </a>
                                    </div>

                                    <Button isPrimary={true} fullWidth={true} type="submit" disable={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Sign In'}
                                    </Button>

                                    <p className="mt-10 text-center text-sm text-gray-500">
                                        Not a member?{' '}
                                        <Link href="/auth/sign-up" className="font-semibold leading-6 text-blue-500 hover:text-blue-600">
                                            Sign Up now
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
