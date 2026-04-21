import Sidebar from './sidebar';
import Topbar from './topbar';

export default function AuthLayout({
    auth,
    children,
}: {
    auth: any;
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <div className="flex items-center justify-between min-w-screen">
                <h1>wakwaw</h1>
                <h1>wakwaw</h1>
            </div> */}

            <div className="hidden mx-auto min-w-screen lg:block">
                {/* Start Sidebar */}
                <Sidebar />
                {/* End Sidebar */}
                {/* Start Content */}
                <div className="ml-75 flex flex-col gap-12.5 px-12.5 py-10">
                    <Topbar name={auth.user.name} />
                    <main>{children}</main>
                </div>

                {/* End Content */}
            </div>
            <div className="flex w-full h-screen px-4 mx-auto bg-black lg:hidden">
                <div className="my-auto text-2xl font-medium leading-snug text-center text-white">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}
