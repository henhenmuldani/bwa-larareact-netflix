<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic Plan',
                'price' => 1000,
                'active_period_in_months' => 1,
                'features' => json_encode(['Feature A', 'Feature B']),
            ],
            [
                'name' => 'Premium Plan',
                'price' => 9000,
                'active_period_in_months' => 12,
                'features' => json_encode(['Feature A', 'Feature B', 'Feature C', 'Feature D']),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
