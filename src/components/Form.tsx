import React from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

interface FormProps {
  currentView: string
}

const Form: React.FC<FormProps> = ({ currentView }) => {
  return (
    <div className={`
      xl:w-1/2 bg-gray-50 h-[calc(100vh-200px)] lg:h-[calc(100vh-220px)] overflow-y-auto order-2
      ${currentView === 'form' ? 'block xl:block' : 'hidden xl:block'}
    `}>
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
                  <select className="w-full px-3 lg:px-4 py-3 pr-10 text-gray-400
                   border border-gray-200 rounded-lg focus:outline-none 
                   focus:ring-2 focus:ring-purple-500 focus:border-transparent
                    appearance-none bg-white text-sm lg:text-base">
                    <option>1-10...</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 
                  transform -translate-y-1/2 w-4 lg:w-5 h-4 lg:h-5
                   text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company HQ Locations
                </label>
                <div className="relative">
                  <select className="w-full px-3 lg:px-4 py-3 pr-10 border text-gray-400
                   border-gray-200 rounded-lg focus:outline-none focus:ring-2
                    focus:ring-purple-500 focus:border-transparent appearance-none
                     bg-white text-sm lg:text-base">
                    <option>India...</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2
                   transform -translate-y-1/2 w-4 lg:w-5 h-4 lg:h-5
                    text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Revenue range
                </label>
                <div className="relative">
                  <select className="w-full px-3 lg:px-4 py-3 pr-10 border text-gray-400
                   border-gray-200 rounded-lg focus:outline-none focus:ring-2
                    focus:ring-purple-500 focus:border-transparent appearance-none
                     bg-white text-sm lg:text-base">
                    <option>50L - 1Cr...</option>
                    <option>1Cr - 10Cr</option>
                    <option>10Cr - 50Cr</option>
                    <option>50Cr - 100Cr</option>
                    <option>100Cr+</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 
                  transform -translate-y-1/2 w-4 lg:w-5 h-4 lg:h-5
                   text-gray-400 pointer-events-none" />
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
                  className="w-full px-3 lg:px-4 py-3 pr-10 border text-gray-400
                   border-gray-200 rounded-lg focus:outline-none focus:ring-2
                    focus:ring-purple-500 focus:border-transparent text-sm lg:text-base"
                />
                <ChevronDown className="absolute right-3 top-1/2 
                transform -translate-y-1/2 w-4 lg:w-5 h-4 lg:h-5
                 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="pb-4">
            <button className="w-full px-6 py-3 lg:py-4 
            bg-gradient-to-r from-purple-500 to-purple-600
             text-white font-semibold rounded-lg hover:shadow-lg
              hover:from-purple-600 hover:to-purple-700 
              transition-all duration-200 text-sm lg:text-base
               flex items-center justify-center space-x-2">
              <span>Submit Target Profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
