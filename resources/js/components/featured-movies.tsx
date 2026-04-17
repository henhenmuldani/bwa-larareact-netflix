export default function FeaturedMovies({
    slug,
    name,
    category,
    thumbnail,
    rating,
}: {
    slug: string;
    name: string;
    category: string;
    thumbnail: string;
    rating: number;
}) {
    return (
        <div className="group mr-7.5overflow-hidden absolute">
            <img
                src={thumbnail}
                className="h-85 w-130 rounded-[30px] object-cover"
                alt=""
            />
            <div className="rating absolute top-0 left-0">
                <div className="flex items-center gap-1 p-7.5">
                    <img src="/icons/ic_star.svg" alt="" />
                    <span className="mt-1 text-sm font-medium text-white">
                        {Number(rating.toFixed(1))}/5.0
                    </span>
                </div>
            </div>
            <div className="absolute right-0 bottom-0 left-0 flex h-25 items-center justify-between rounded-br-[28px] rounded-bl-[28px] bg-linear-to-t from-black px-7">
                <div>
                    <div className="text-[22px] font-medium text-white">
                        {name}
                    </div>
                    <p className="mb-0 text-sm font-light text-white">
                        {category}
                    </p>
                </div>
                <div className="translate-x-25 transition duration-500 ease-in-out group-hover:translate-x-0">
                    <img src="/icons/ic_play.svg" width="50" alt="" />
                </div>
            </div>
            <a href={slug} className="absolute inset-0 z-50">
                {slug}
            </a>
        </div>
    );
}
