import AuthLayout from '@/layouts/auth-layout';
import FeaturedMovies from '@/components/featured-movies';
import Flickity from 'react-flickity-component';
import { Head, Link, usePage } from '@inertiajs/react';
import MovieCard from '@/components/movie-card';
import { index as userDashboard } from '@/routes/user/dashboard';
import { Movie } from '@/types/movie';

export default function Dashboard({
    featuredMovies,
    movies,
}: {
    featuredMovies: Movie[];
    movies: Movie[];
}) {
    //ambil data auth dari props menggunakan usePage
    const { auth } = usePage().props;

    // console.log('Featured Movies:', featuredMovies);
    // console.log('Movies:', movies);

    const flickityOptions = {
        cellAlign: 'left',
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: '>1',
    };

    return (
        <AuthLayout auth={auth}>
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
                    {featuredMovies.map((featuredMovie) => (
                        <FeaturedMovies
                            key={featuredMovie.id}
                            slug={featuredMovie.slug}
                            name={featuredMovie.name}
                            thumbnail={featuredMovie.thumbnail}
                            category={featuredMovie.category}
                            rating={featuredMovie.rating}
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
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            slug={movie.slug}
                            name={movie.name}
                            thumbnail={movie.thumbnail}
                            category={movie.category}
                        />
                    ))}
                </Flickity>
            </div>
        </AuthLayout>
    );
}
