'use client'

import { useState } from 'react'
import VenuesCard from '@/app/components/VenuesCard'
import AddVenueForm from '@/app/components/forms/AddVenueForm'
import venuesData from '@/app/data/venuesData'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from "@/components/ui/button"

const tabs = ['Active', 'Inactive', 'All', 'Trash']

export default function VenuePage() {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState('Active')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredByTab = activeTab === 'All'
    ? venuesData
    : venuesData.filter(venue => venue.status === activeTab)

  const filteredEvents = filteredByTab.filter(venue =>
    venue.title.toLowerCase().includes(search.toLowerCase())
  )

  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage)
  const handleSave = (newEvent: any) => {
    console.log('Event saved:', newEvent)
    // TODO: Add saving logic here
  }

  return (
    <div className="w-full p-6">
      {/* Header with Sheet */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Venues</h1>

        <Sheet>
                  <SheetTrigger asChild>
                    <Button className="bg-[#035D8A] hover:bg-[#02466b] text-white">
                      Add Venue
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <AddVenueForm onSave={handleSave} />
                  </SheetContent>
                </Sheet>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-4 text-sm text-gray-600 border-b border-gray-200">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              setCurrentPage(1)
            }}
            className={`pb-2 border-b-2 transition-colors duration-200 ${
              tab === activeTab
                ? 'border-[#035D8A] text-[#035D8A] font-semibold'
                : 'border-transparent hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search event..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrentPage(1)
          }}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded shadow-sm"
        />
      </div>

      {/* Event Cards */}
      {filteredEvents.length > 0 ? (
        <div className="flex flex-col gap-4">
          {paginatedEvents.map(venue => (
            <VenuesCard key={venue.id} venue={venue} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No events found for this status/search.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded transition-colors duration-200 ${
                currentPage === i + 1
                  ? 'bg-[#035D8A] text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}