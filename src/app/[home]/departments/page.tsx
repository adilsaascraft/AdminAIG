'use client'

import { useState } from 'react'
import DepartmentTable from '@/app/components/tables/DepartmentTable'
import AddDepartmentForm from '@/app/components/forms/AddDepartmentForm'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const tabs = ['Active', 'Inactive', 'All', 'Trash']

export default function DepartmentPage() {
  const [activeTab, setActiveTab] = useState<'Active' | 'Inactive' | 'All' | 'Trash'>('Active')
  const handleSave = () => {
    console.log('Event saved:')
    // TODO: Add saving logic here
  }

  return (
    <div className="w-full p-6">
      {/* Header and Create Organizer Sheet */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Departments</h1>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-[#035D8A] hover:bg-[#02466b] text-white">
              Add Department
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Add New Department</SheetTitle>
            </SheetHeader>
            <AddDepartmentForm onSave={handleSave} />
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
        <DepartmentTable activeTab={activeTab} />
      ) : (
        <p className="text-gray-500">Trash tab is not yet implemented.</p>
      )}
    </div>
  )
}