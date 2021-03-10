<?php

use App\Pelanggan;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class PelangganSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $faker = Faker::create();

        for ($i=0; $i < 100 ; $i++) { 
            
            $data = [
                'pelanggan' => $faker->name,
                'alamat' => $faker->address,
                'notelepon' => $faker->phoneNumber
            ];
    
            Pelanggan::create($data);   
        }
    }
}
