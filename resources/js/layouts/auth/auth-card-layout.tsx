import { Link } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import AppLogoIcon from '@/components/app-logo-icon';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
// import { home } from '@/routes';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    return (
        <div className="flex flex-col items-center justify-center gap-6 p-6 min-h-svh bg-muted md:p-10">
            <div className="flex flex-col w-full max-w-md gap-6">
                {/* <Link
                    href={home()}
                    className="flex items-center self-center gap-2 font-medium"
                >
                    <div className="flex items-center justify-center h-9 w-9">
                        <AppLogoIcon className="text-black fill-current size-9 dark:text-white" />
                    </div>
                </Link> */}

                <div className="flex flex-col gap-6">
                    <Card className="rounded-xl">
                        <CardHeader className="px-10 pt-8 pb-0 text-center">
                            <CardTitle className="text-xl">{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                        <CardContent className="px-10 py-8">
                            {children}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
