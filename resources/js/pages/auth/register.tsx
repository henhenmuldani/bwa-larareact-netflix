import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Link, Head, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';
import PasswordInput from '@/components/password-input';

export default function Register() {
    return (
        <>
            <Head title="Register" />
            <div className="min-h-screen px-3 mx-auto text-white bg-black min-w-screen md:px-10">
                <div className="fixed -top-12.5 hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-112.5 laptopXl:max-w-160"
                        alt=""
                    />
                </div>
                <div className="flex py-24 laptopLg:ml-170 laptopXl:ml-217.5">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-17.5">
                            <div className="mb-3 text-[26px] font-semibold">
                                Sign Up
                            </div>
                            <p className="text-base leading-7 text-[#767676]">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <Form
                            {...store.form()}
                            resetOnSuccess={[
                                'password',
                                'password_confirmation',
                            ]}
                            disableWhileProcessing
                            className="flex w-92.5 flex-col gap-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="flex flex-col gap-6">
                                        <div>
                                            <Label
                                                className="block mb-2 text-base"
                                                htmlFor="name"
                                            >
                                                Full Name
                                            </Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                name="name"
                                                className="w-full rounded-2xl bg-form-bg px-7 py-3.25 focus:outline-alerange focus:outline-none"
                                                placeholder="Your name..."
                                                required
                                                autoFocus
                                                tabIndex={1}
                                            />
                                            <InputError message={errors.name} />
                                        </div>
                                        <div>
                                            <Label
                                                className="block mb-2 text-base"
                                                htmlFor="email"
                                            >
                                                Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                name="email"
                                                className="w-full rounded-2xl bg-form-bg px-7 py-3.25 focus:outline-alerange focus:outline-none"
                                                placeholder="Your Email Address"
                                                required
                                                autoFocus
                                                tabIndex={2}
                                            />
                                            <InputError
                                                message={errors.email}
                                            />
                                        </div>
                                        <div>
                                            <Label
                                                className="block mb-2 text-base"
                                                htmlFor="password"
                                            >
                                                Password
                                            </Label>
                                            <PasswordInput
                                                id="password"
                                                name="password"
                                                className="w-full rounded-2xl bg-form-bg px-7 py-3.25 focus:outline-alerange focus:outline-none"
                                                placeholder="Your Password"
                                                required
                                                tabIndex={3}
                                            />
                                            <InputError
                                                message={errors.password}
                                            />
                                        </div>
                                        <div>
                                            <Label
                                                className="block mb-2 text-base"
                                                htmlFor="password_confirmation"
                                            >
                                                Confirm Password
                                            </Label>
                                            <PasswordInput
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                className="w-full rounded-2xl bg-form-bg px-7 py-3.25 focus:outline-alerange focus:outline-none"
                                                placeholder="Confirm Password"
                                                required
                                                tabIndex={4}
                                            />
                                            <InputError
                                                message={
                                                    errors.password_confirmation
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-7.5 grid space-y-3.5">
                                        <Button
                                            type="submit"
                                            className="w-full rounded-2xl bg-alerange py-3.25 text-center hover:bg-alerange/90"
                                            tabIndex={5}
                                            disabled={processing}
                                        >
                                            {processing && <Spinner />}
                                            <span className="text-base text-white">
                                                Sign Up
                                            </span>
                                        </Button>

                                        <Link href={login()} tabIndex={6}>
                                            <Button
                                                type="button"
                                                className="w-full rounded-2xl border border-[#767676] py-3.25 text-center hover:bg-[#767676] hover:text-white"
                                            >
                                                <span className="text-base text-white">
                                                    Sign In to My Account
                                                </span>
                                            </Button>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
