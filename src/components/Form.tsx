"use client"
import React, { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'

const initialData = {
  companyHeadcount: '',
  companyLocation: '',
  revenueRange: '',
  department: ''
};

interface FormProps {
  currentView: string;
  onFormSubmit?: (data: typeof initialData) => void;
}

const Form: React.FC<FormProps> = ({ currentView, onFormSubmit }) => {
  const [data, setData] = useState(initialData);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(data.companyHeadcount && data.companyLocation && data.revenueRange && data.department)) {
      toast.error("Please fill the field.");
      return;
    } else {
      console.log(data);
      toast.success("Form submitted.");
      onFormSubmit?.(data); // Pass data to parent
      setData(initialData); // Reset form
    }
  }

  return (
    <div className={`
      xl:w-1/2 bg-gray-50 h-[calc(100vh-200px)] lg:h-[calc(100vh-220px)] overflow-y-auto order-2
      ${currentView === 'form' ? 'block xl:block' : 'hidden xl:block'}
    `}>
      <form onSubmit={submitHandler}>
        <div className="p-4 lg:p-6 xl:p-8">
          <div className="max-w-full lg:max-w-md xl:max-w-lg mx-auto">
            <div className="mb-6 lg:mb-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                Let&apos;s define your <span className="text-orange-400">targets</span>
              </h2>
              <p className="text-gray-600 text-xs lg:text-sm">
                Focus on the most relevant fields to shape your ICP — all fields are optional
              </p>
            </div>

            <div className="mb-6 lg:mb-8">
              <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">Company Profile</h3>

              <div className="space-y-5 border p-4 rounded-lg border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Headcount
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-3 lg:px-4 py-3 pr-10 text-gray-400 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white text-sm lg:text-base"
                      value={data.companyHeadcount}
                      onChange={(e) => setData({ ...data, companyHeadcount: e.target.value })}
                    >
                      <option value="">1-10...</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 lg:w-5 h-4 lg:h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company HQ Locations
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-3 lg:px-4 py-3 pr-10 border text-gray-400 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white text-sm lg:text-base"
                      value={data.companyLocation}
                      onChange={(e) => setData({ ...data, companyLocation: e.target.value })}
                    >
                      <option value="">India...</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 lg:w-5 h-4 lg:h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Revenue range
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-3 lg:px-4 py-3 pr-10 border text-gray-400 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white text-sm lg:text-base"
                      value={data.revenueRange}
                      onChange={(e) => setData({ ...data, revenueRange: e.target.value })}
                    >
                      <option value="">50L - 1Cr...</option>
                      <option value="1Cr - 10Cr">1Cr - 10Cr</option>
                      <option value="10Cr - 50Cr">10Cr - 50Cr</option>
                      <option value="50Cr - 100Cr">50Cr - 100Cr</option>
                      <option value="100Cr+">100Cr+</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 lg:w-5 h-4 lg:h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">Prospect Profile</h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search department..."
                    className="w-full px-3 lg:px-4 py-3 pr-10 border text-gray-400 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm lg:text-base"
                    value={data.department}
                    onChange={(e) => setData({ ...data, department: e.target.value })}
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 lg:w-5 h-4 lg:h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="pb-4">
              <button
                type="submit"
                className="w-full px-6 py-3 lg:py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 text-sm lg:text-base flex items-center justify-center space-x-2"
              >
                <span>Submit Target Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form;
