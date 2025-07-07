'use client'

import { useState } from 'react'
import AssignTable from '@/app/components/tables/AssignTable'
import AddAssignForm from '@/app/components/forms/AddAssignForm'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const tabs = ['Active', 'Inactive', 'All', 'Trash']

export default function AssignPage() {
  const [activeTab, setActiveTab] = useState<'Active' | 'Inactive' | 'All' | 'Trash'>('Active')
  const handleSave = () => {
    console.log('Event saved:')
    // TODO: Add saving logic here
  }
  return (
    <div className="w-full pr-6  pt-6 pb-12">
      {/* Header and Create Organizer Sheet */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Assigns</h1>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-[#035D8A] hover:bg-[#02466b] text-white">
              Add Assign
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[400px] sm:w-[540px]">
            <AddAssignForm onSave={handleSave} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-4 text-sm text-gray-600 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as 'Active' | 'Inactive' | 'All' | 'Trash')}
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

      {/* Organizer Table */}
      {activeTab !== 'Trash' ? (
        <AssignTable activeTab={activeTab} />
      ) : (
        <p className="text-gray-500">Trash tab is not yet implemented.</p>
      )}
    </div>
  )
}