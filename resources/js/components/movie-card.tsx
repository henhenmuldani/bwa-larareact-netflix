import { Link } from '@inertiajs/react';
import { show } from '@/routes/prototype/movie';

export default function MovieCard({
    slug,
    name,
    category,
    thumbnail,
}: {
    slug: string;
    name: string;
    category: string;
    thumbnail: string;
}) {
    return (
        <div className="group absolute mr-7.5 overflow-hidden">
            <img
                src={thumbnail}
                className="h-85 w-62.5 rounded-[30px] object-cover"
                alt=""
            />
            <div className="absolute right-0 bottom-0 left-0 rounded-br-[28px] rounded-bl-[28px] bg-linear-to-t from-black">
                <div className="px-7 pb-7">
                    <div className="text-xl font-medium text-white">{name}</div>
                    <p className="mt-2.5 mb-0 text-base text-gray-300">
                        {category}
                    </p>
                </div>
            </div>
            <div className="-translate-y-125transition absolute top-1/2 left-1/2 z-20 -translate-x-1/2 duration-500 ease-in-out group-hover:-translate-y-1/2">
                <img src="/icons/ic_play.svg" className="" width="50" alt="" />
            </div>
            <Link href={show(slug)} className="absolute inset-0 z-50">
                {slug}
            </Link>
        </div>
    );
}
