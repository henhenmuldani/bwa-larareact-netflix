import { useState, useRef } from 'react';
import { logout } from '@/routes';
import { Link, router } from '@inertiajs/react';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';

export default function Topbar({ name }: { name: string }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // Added type generic and null initial value
    const dropdownTarget = useRef<HTMLDivElement>(null);

    const triggerDropdown = () => {
        if (dropdownOpen) {
            // Added '?' to ensure .current exists before accessing classList
            dropdownTarget.current?.classList.remove('hidden');
            dropdownTarget.current?.classList.add('block');
        } else {
            dropdownTarget.current?.classList.remove('block');
            dropdownTarget.current?.classList.add('hidden');
        }
        setDropdownOpen(!dropdownOpen);
    };

    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        <div className="flex items-center justify-between">
            <input
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
                // style={{
                //     backgroundImage: "url('/icons/ic_search.svg')",
                // }}
            />

            {/* <div style={{}}></div> */}
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-black">
                    Welcome, {name}
                </span>
                <div className="relative flex flex-col gap-2 collapsible-dropdown">
                    <button
                        className="dropdown-button w-15 cursor-pointer rounded-full p-1.25 outline-2 outline-gray-2"
                        onClick={triggerDropdown}
                    >
                        <img
                            src="/images/avatar.png"
                            className="object-cover w-full rounded-full"
                            alt=""
                        />
                    </button>
                    <div
                        className={`absolute top-20 right-0 z-999 flex min-w-45 flex-col gap-1 overflow-hidden rounded-2xl bg-white font-medium text-black ${dropdownOpen ? '' : 'hidden'}`}
                        id="dropdown-target"
                        ref={dropdownTarget}
                    >
                        <a
                            href="#!"
                            className="p-4 transition-all hover:bg-sky-100"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#!"
                            className="p-4 transition-all hover:bg-sky-100"
                        >
                            Settings
                        </a>

                        <Link
                            href={logout()}
                            as="button"
                            onClick={handleLogout}
                            className="p-4 text-left transition-all cursor-pointer hover:bg-sky-100"
                        >
                            Sign Out
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
