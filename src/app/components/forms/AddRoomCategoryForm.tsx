'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { SheetClose, SheetContent } from '@/components/ui/sheet'

interface DepartmentFormData {
  departmentName: string
  contactPersonName: string
  contactPersonEmail: string
  contactPersonMobile: string
}

interface AddDepartmentFormProps {
  onClose: () => void
  onSave: (department: DepartmentFormData & { id: number; status: string }) => void
}

export default function AddDepartmentForm({ onClose, onSave }: AddDepartmentFormProps) {
  const [formData, setFormData] = useState<DepartmentFormData>({
    departmentName: '',
    contactPersonName: '',
    contactPersonEmail: '',
    contactPersonMobile: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSave({ ...formData, id: Date.now(), status: 'Live' })
    onClose()
  }

  return (
    <SheetContent className="w-[400px] sm:w-[540px] p-0">
      <div className="flex flex-col h-screen bg-white">
        {/* Header without custom close button */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Add Rooms</h2>
        </div>

        {/* Scrollable Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-6 space-y-4"
        >
          <div>
            <label className="block font-medium">Hotel Name *</label>
            <input
              type="text"
              name="organizerName"
              placeholder='Enter hotel name'
              required
              value={formData.departmentName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Room Category *</label>
            <input
              type="text"
              name="organizerName"
              placeholder='Enter room category name'
              required
              value={formData.departmentName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Room Type *</label>
            <input
              type="text"
              name="contactPersonName"
              placeholder='Enter room type'
              required
              value={formData.contactPersonName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Status *</label>
            <input
              type="email"
              name="contactPersonEmail"
              placeholder='Enter status'
              required
              value={formData.contactPersonEmail}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
        </form>

        {/* Sticky Footer Buttons */}
        <div className="sticky bottom-0 left-0 right-0 bg-white border-t px-6 py-4 flex justify-between">
          <SheetClose asChild>
            <Button
              type="button"
              variant="outline"
              className="border border-gray-400"
            >
              Close
            </Button>
          </SheetClose>

          <Button
            type="submit"
            className="bg-sky-800 text-white hover:bg-sky-900"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </div>
    </SheetContent>
  )
}
