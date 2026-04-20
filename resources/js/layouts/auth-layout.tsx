import Sidebar from './sidebar';
import Topbar from './topbar';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <div className="flex items-center justify-between min-w-screen">
                <h1>wakwaw</h1>
                <h1>wakwaw</h1>
            </div> */}

            <div className="mx-auto hidden min-w-screen lg:block">
                {/* Start Sidebar */}
                <Sidebar />
                {/* End Sidebar */}
                {/* Start Content */}
                <div className="ml-75 flex flex-col gap-12.5 px-12.5 py-10">
                    <Topbar />
                    <main>{children}</main>
                </div>

                {/* End Content */}
            </div>
            <div className="mx-auto flex h-screen w-full bg-black px-4 lg:hidden">
                <div className="my-auto text-center text-2xl leading-snug font-medium text-white">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}
