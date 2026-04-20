import AuthLayout from '@/layouts/auth-layout';
import { Head } from '@inertiajs/react';
import SubscriptionCard from '@/components/subscription-card';

export default function SubscriptionPlan() {
    return (
        <AuthLayout>
            <Head>
                <title>Subscription Plan</title>
            </Head>
            <div className="flex flex-col items-center py-20">
                <div className="mb-3 text-[26px] font-semibold text-black">
                    Pricing for Everyone
                </div>
                <p className="max-w-75.5 text-center text-base leading-7 text-gray-1">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="mt-17.5 flex justify-center gap-10">
                    <SubscriptionCard
                        isPremium={false}
                        name
                        features
                        durationInMonth
                        id
                        onSelectSubscription
                        price
                    />
                    <SubscriptionCard
                        isPremium
                        name
                        features
                        durationInMonth
                        id
                        onSelectSubscription
                        price
                    />
                </div>
            </div>
        </AuthLayout>
    );
}
