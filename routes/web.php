<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;

// Route::get('admin', function () {
//     return 'Hi Admin';
// })->middleware('role:admin');

// Route::get('user', function () {
//     return 'Hi User';
// })->middleware('role:user');

// Route::inertia('/', 'welcome', [
//     'canRegister' => Features::enabled(Features::registration()),
// ])->name('home');

Route::redirect('/', '/login');

Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('/login', function () {
        return Inertia::render('prototype/login');
    })->name('login');

    route::get('/register', function () {
        return Inertia::render('prototype/register');
    })->name('register');

    route::get('/dashboard', function () {
        return Inertia::render('prototype/dashboard');
    })->name('dashboard');

    route::get('/subscription-plan', function () {
        return Inertia::render('prototype/subscription-plan');
    })->name('subscription-plan');

    route::get('/movie/{slug}', function () {
        return Inertia::render('prototype/movie/show');
    })->name('movie.show');
});

// Route::middleware(['auth', 'verified'])->group(function () {
//     // Route::inertia('dashboard', 'dashboard')->name('dashboard');
//     // Route::inertia('dashboard', 'user/dashboard')->name('dashboard');
// });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware('role:user')->prefix('dashboard')->name('user.dashboard.')->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('index');
        Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show');
        // Route::inertia('/', [DashboardController::class, 'index'])->name('index');
    });
});

require __DIR__ . '/settings.php';
