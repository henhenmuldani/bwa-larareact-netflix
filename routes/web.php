<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::get('admin', function () {
    return 'Hi Admin';
})->middleware('role:admin');

Route::get('user', function () {
    return 'Hi User';
})->middleware('role:user');

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';
