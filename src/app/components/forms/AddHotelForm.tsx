'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { SheetClose, SheetContent } from "@/components/ui/sheet";

// Define the type for the venue form data
type VenueFormData = {
  venueName: string;
  address: string;
  uploadImage: string;
  city: string;
  state: string;
  country: string;
  website: string;
  googleMapLink: string;
  distanceFromAirport: string;
  distanceFromRailwayStation: string;
  nearestMetroStation: string;
};

// Props type for the component
type AddVenueFormProps = {
  onSave: (venue: VenueFormData & { id: number; status: string }) => void;
};

export default function AddVenueForm({ onSave }: AddVenueFormProps) {
  const [formData, setFormData] = useState<VenueFormData>({
    venueName: '',
    address: '',
    uploadImage: '',
    city: '',
    state: '',
    country: '',
    website: '',
    googleMapLink: '',
    distanceFromAirport: '',
    distanceFromRailwayStation: '',
    nearestMetroStation: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave({ ...formData, id: Date.now(), status: 'Live' });
  };

  return (
    <SheetContent className="w-[400px] sm:w-[540px] p-0">
      <div className="flex flex-col h-screen bg-white">
        {/* Header */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Add Hotel</h2>
        </div>

        {/* Scrollable form content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
          <div>
            <label className="block font-medium">Hotel Name *</label>
            <input
              type="text"
              name="venueName"
              placeholder="Enter hotel name"
              required
              value={formData.venueName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Address *</label>
            <input
              type="text"
              name="address"
              placeholder="Enter hotel address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Upload Image *</label>
            <input
              type="file"
              name="uploadImage"
              placeholder='Upload venue image'
              required
              value={formData.uploadImage}
              onChange={handleChange}
              className="block w-full h-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white file:h-full file:bg-[#EFEFEF] file:text-gray-700 file:font-medium file:border-1 file:rounded-l-md file:rounded-r-md file:px-4 file:cursor-pointer file:text-center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">City *</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city name"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">State *</label>
              <input
                type="text"
                name="state"
                placeholder="Enter state name"
                required
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">Country *</label>
              <select
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Website *</label>
              <input
                type="text"
                name="website"
                required
                value={formData.website}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium">Google Map Link *</label>
            <input
              type="text"
              name="googleMapLink"
              placeholder="Enter Google Map link"
              required
              value={formData.googleMapLink}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Distance From Airport *</label>
            <input
              type="text"
              name="distanceFromAirport"
              placeholder="Enter distance from airport"
              required
              value={formData.distanceFromAirport}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Distance From Railway Station *</label>
            <input
              type="text"
              name="distanceFromRailwayStation"
              placeholder="Enter distance from railway station"
              required
              value={formData.distanceFromRailwayStation}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Nearest Metro Station *</label>
            <input
              type="text"
              name="nearestMetroStation"
              placeholder="Enter nearest metro station"
              required
              value={formData.nearestMetroStation}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
        </form>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 left-0 right-0 bg-white border-t px-6 py-4 flex justify-between">
          <SheetClose asChild>
            <Button type="button" variant="outline" className="border border-gray-400">
              Close
            </Button>
          </SheetClose>
          <Button type="submit" form="form" className="bg-sky-800 text-white hover:bg-sky-900">
            Save
          </Button>
        </div>
      </div>
    </SheetContent>
  );
}
