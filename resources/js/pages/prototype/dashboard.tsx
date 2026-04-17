import AuthLayout from '@/layouts/auth-layout';
import FeaturedMovies from '@/components/featured-movies';
import Flickity from 'react-flickity-component';
import { Head } from '@inertiajs/react';
import MovieCard from '@/components/movie-card';

const flickityOptions = {
    cellAlign: 'left',
    contain: true,
    groupCells: 1,
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false,
    draggable: '>1',
};
export default function Dashboard() {
    return (
        <AuthLayout>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="mb-4 text-[22px] font-semibold text-black">
                    Featured Movies
                </div>
                {/* <!-- Movie Thumbnail --> */}
                <Flickity
                    className="__scroll-selector gap-7.5"
                    elementType={'div'}
                    options={flickityOptions}
                    disableImagesLoaded
                    reloadOnUpdate
                    static
                >
                    {[1, 2, 3, 4].map((index) => (
                        <FeaturedMovies
                            key={index}
                            slug=""
                            name=""
                            thumbnail=""
                            category=""
                            rating={1}
                        />
                    ))}
                </Flickity>
            </div>

            <div>
                <div className="mb-4 text-[22px] font-semibold text-black">
                    Browse
                </div>
                <Flickity
                    className="__scroll-selector"
                    elementType={'div'}
                    options={flickityOptions}
                    disableImagesLoaded
                    reloadOnUpdate
                    static
                >
                    {[1, 2, 3, 4].map((index) => (
                        <MovieCard
                            key={index}
                            slug=""
                            name=""
                            thumbnail=""
                            category=""
                        />
                    ))}

                    <img
                        src="/images/browse-1.png"
                        className="h-[340px] w-[250px] rounded-[30px] object-cover"
                        alt=""
                    />
                    <div className="absolute right-0 bottom-0 left-0 rounded-br-[28px] rounded-bl-[28px] bg-linear-to-t from-black">
                        <div className="px-7 pb-7">
                            <div className="text-xl font-medium text-white">
                                Meong Golden
                            </div>
                            <p className="mt-2.5 mb-0 text-base text-gray-300">
                                Horror • Love
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-125 transition duration-500 ease-in-out group-hover:-translate-y-1/2">
                        <img
                            src="/icons/ic_play.svg"
                            className=""
                            width="50"
                            alt=""
                        />
                    </div>
                    <a href="watching.html" className="absolute inset-0 z-50">
                        aaa
                    </a>
                </Flickity>
            </div>
        </AuthLayout>
    );
}
