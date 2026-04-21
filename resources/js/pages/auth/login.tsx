import { Form, Head, Link } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { register } from '@/routes';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/login';

type Props = {
    status?: string;
    canRegister: boolean;
};

export default function Login({ status, canRegister }: Props) {
    return (
        <>
            <Head title="Login" />
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
                                Welcome Back
                            </div>
                            <p className="text-base leading-7 text-[#767676]">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <Form
                            {...store.form()}
                            resetOnSuccess={['password']}
                            className="flex w-92.5 flex-col gap-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="flex flex-col gap-6">
                                        <div>
                                            <Label className="block mb-2 text-base">
                                                Email Address
                                            </Label>

                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                className="w-full rounded-2xl bg-form-bg px-7 py-3.25 focus:outline-alerange focus:outline-none"
                                                id="email"
                                                required
                                                autoFocus
                                                tabIndex={1}
                                            />
                                            <InputError
                                                message={errors.email}
                                            />
                                        </div>
                                        <div>
                                            <Label className="block mb-2 text-base">
                                                Password
                                            </Label>

                                            <PasswordInput
                                                name="password"
                                                placeholder="Password"
                                                className="w-full rounded-2xl bg-form-bg px-7 py-3.25 focus:outline-alerange focus:outline-none"
                                                id="password"
                                                required
                                                tabIndex={2}
                                            />
                                            <InputError
                                                message={errors.password}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-7.5 grid space-y-3.5">
                                        <Button
                                            type="submit"
                                            className="w-full rounded-2xl bg-alerange py-3.25 text-center hover:bg-alerange/90"
                                            disabled={processing}
                                            tabIndex={3}
                                        >
                                            {processing && <Spinner />}
                                            <span className="text-base text-white">
                                                Start Watching
                                            </span>
                                        </Button>

                                        {canRegister && (
                                            <Link
                                                href={register()}
                                                tabIndex={4}
                                            >
                                                <Button
                                                    type="button"
                                                    className="w-full rounded-2xl border border-[#767676] py-3.25 text-center hover:bg-[#767676] hover:text-white"
                                                >
                                                    <span className="text-base text-white">
                                                        Create New Account
                                                    </span>
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </>
                            )}
                        </Form>

                        {status && (
                            <div className="mb-4 text-sm font-medium text-center text-green-600">
                                {status}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
