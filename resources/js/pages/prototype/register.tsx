import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Link, Head } from '@inertiajs/react';

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
                        <form className="w-92.5">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label className="block mb-2 text-base">
                                        Full Name
                                    </Label>
                                    <Input
                                        type="text"
                                        name="fullname"
                                        className="w-full rounded-2xl bg-form-bg px-7 py-3.25 focus:outline-alerange focus:outline-none"
                                        placeholder="Your fullname..."
                                        value="Angga React"
                                    />
                                </div>
                                <div>
                                    <Label className="block mb-2 text-base">
                                        Email Address
                                    </Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-2xl bg-form-bg px-7 py-3.25 focus:outline-alerange focus:outline-none"
                                        placeholder="Your Email Address"
                                        value="anggaforreact@fb.com"
                                    />
                                </div>
                                <div>
                                    <Label className="block mb-2 text-base">
                                        Password
                                    </Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        className="w-full rounded-2xl bg-form-bg px-7 py-3.25 focus:outline-alerange focus:outline-none"
                                        placeholder="Your Password"
                                        value="eeeeeeeeeeeeeee"
                                    />
                                </div>
                            </div>
                            <div className="mt-7.5 grid space-y-3.5">
                                <Link href="/">
                                    <Button
                                        type="button"
                                        className="w-full rounded-2xl bg-alerange py-3.25 text-center hover:bg-alerange/90"
                                    >
                                        <span className="text-base text-white">
                                            Sign Up
                                        </span>
                                    </Button>
                                </Link>

                                <Link href="/prototype/login">
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
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
