<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Route::get('admin', function () {
//     return 'Hi Admin';
// })->middleware('role:admin');

// Route::get('user', function () {
//     return 'Hi User';
// })->middleware('role:user');

// Route::inertia('/', 'welcome', [
//     'canRegister' => Features::enabled(Features::registration()),
// ])->name('home');

Route::redirect('/', '/prototype/login');

Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('/login', function () {
        return Inertia::render('prototype/login');
    })->name('login');

    route::get('/register', function () {
        return Inertia::render('prototype/register');
    })->name('register');
});




Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';
