// FILE: src/components/home/VehicleTypeGrid.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const vehicleTypes = [
  { name: 'Car & Passenger', href: '/shop?type=Automotive+Batteries+(Car%2FBakkie)', imageUrl: '/images/vehicles/car-passenger.jpg' },
  { name: 'Trucks & Commercial', href: '/shop?type=Truck+%26+Commercial', imageUrl: '/images/vehicles/trucks-commercial.jpg' },
  { name: 'Motorcycles', href: '/shop?type=Motorcycle+Batteries', imageUrl: '/images/vehicles/motorcycle.jpg' },
  { name: 'Solar & Deep-Cycle', href: '/shop?type=Solar+%26+Deep-Cycle', imageUrl: '/images/vehicles/solar-deep-cycle.jpg' },
  { name: 'Leisure & Marine', href: '/shop?type=Leisure+%26+Marine', imageUrl: '/images/vehicles/leisure-marine.jpg' },
  { name: 'Gate, Alarm & UPS', href: '/shop?type=Security%2C+Gate+%26+UPS+Batteries', imageUrl: '/images/vehicles/gate-alarm-ups.jpg' },
];

const VehicleTypeGrid = () => (
  <div className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold text-center mb-10 text-navy-800">Shop by Vehicle Type</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {vehicleTypes.map((vehicle) => (
        <Link key={vehicle.name} href={vehicle.href} className="group block text-center">
          <div className="relative w-full h-32 overflow-hidden rounded-lg shadow-lg mb-3 transform group-hover:scale-105 transition-transform duration-300">
            <Image src={vehicle.imageUrl} alt={vehicle.name} layout="fill" objectFit="cover" />
          </div>
          <h3 className="font-semibold text-gray-800 group-hover:text-navy-700">{vehicle.name}</h3>
        </Link>
      ))}
    </div>
  </div>
);

export default VehicleTypeGrid;