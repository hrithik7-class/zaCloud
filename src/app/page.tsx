'use client'
import { Toaster } from 'react-hot-toast';
import React, { useState } from 'react'
import {
  Home,
  Rocket,
  FileText,
  Users,
  Clipboard,
  Mail,
  Settings,
  LogOut,
  Sparkles,
  Menu,
  X,
  Edit,
  MessageSquare,
  FormInput
} from 'lucide-react'
import Image from 'next/image'
import Chat from '@/components/Chat'
import Form from '@/components/Form'

// TypeScript interfaces
interface NavigationItem {
  id: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

interface ProgressStep {
  id: string
  label: string
}




const Dashboard: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  const [currentView, setCurrentView] = useState<string>('chat')
  const [activeStep, setActiveStep] = useState<string>('who')
  const [formData, setFormData] = useState({
    companyHeadcount: '',
    companyLocation: '',
    revenueRange: '',
    department: ''
  })

  // Form submit handler (optional if submit handled fully in Form)
  const handleFormSubmit = (data: typeof formData) => {
    console.log('Form data submitted:', data)
    // You can do extra work here on submit, e.g. API call
  }

  // Main navigation items (Home to Mail)
  const mainNavigationItems: NavigationItem[] = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'rocket', icon: Rocket, label: 'Campaigns' },
    { id: 'documents', icon: FileText, label: 'Documents' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'clipboard', icon: Clipboard, label: 'Tasks' },
    { id: 'mail', icon: Mail, label: 'Messages' },
  ]

  // Bottom navigation items (Settings and Logout)
  const bottomNavigationItems: NavigationItem[] = [
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'logout', icon: LogOut, label: 'Logout' },
  ]

  const progressSteps: ProgressStep[] = [
    { id: 'who', label: 'Who' },
    { id: 'what', label: 'What/Why' },
    { id: 'where', label: 'Where' },
    { id: 'when', label: 'When' },
  ]

  const renderNavigationButton = (item: NavigationItem) => {
    const Icon = item.icon
    const isActive = activeNav === item.id

    return (
      <li key={item.id}>
        <button
          onClick={() => {
            setActiveNav(item.id)
            setIsSidebarOpen(false)
            if (item.id === 'home') {
              setCurrentView('chat')
            }
          }}
          className={`
            w-full lg:w-12 lg:h-12 h-10 rounded-full flex items-center
            transition-all duration-200 group relative
            ${isActive
              ? 'bg-orange-100 text-gray-600 shadow-lg shadow-purple-200'
              : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }
            lg:justify-center justify-start px-3 lg:px-0
          `}
        >
          <Icon className={`w-5 h-5 ${isActive ? 'text-orange-300' : ''} lg:mr-0 mr-3`} />
          <span className="lg:hidden font-medium">{item.label}</span>

          {/* Desktop Tooltip */}
          <div className="hidden lg:block absolute left-16 bg-gray-800 text-white px-2 py-1
           rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 
           pointer-events-none whitespace-nowrap z-50">
            {item.label}
          </div>
        </button>
      </li>
    )
  }

  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 lg:w-16 xl:w-20
        bg-white shadow-lg lg:shadow-sm border-r border-gray-100
        transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        lg:flex-shrink-0
      `}>
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-lg 
            flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-800">Dashboard</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col h-full py-4 lg:py-6">
          <div className="hidden lg:flex justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-lg 
            flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="hidden lg:flex justify-center mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-gray-300">
              <Image
                src="/images/img.png"
                alt="Profile picture"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <nav className="flex-1 px-2 lg:px-2">
            <ul className="space-y-2 lg:space-y-3">
              {mainNavigationItems.map(renderNavigationButton)}
            </ul>
          </nav>

          <nav className="px-2 lg:px-2 pb-4">
            <ul className="space-y-2 lg:space-y-3">
              {bottomNavigationItems.map(renderNavigationButton)}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex-1 p-4 lg:p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 h-full flex flex-col">
          <div className="bg-white border-b border-gray-100 px-4 lg:px-6 xl:px-8 py-3 
          lg:py-4 flex-shrink-0 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-gray-600 rounded-lg 
                  hover:bg-gray-50"
                >
                  <Menu className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-2">
                  <span className="text-base lg:text-xl font-semibold text-gray-800 
                  truncate">Untitled List</span>
                  <Edit className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
              </div>

              <div className="flex xl:hidden items-center space-x-1">
                <button
                  onClick={() => setCurrentView('chat')}
                  className={`p-2 rounded-lg transition-colors duration-200 flex items-center
                     ${currentView === 'chat' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
                >
                  <MessageSquare className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentView('form')}
                  className={`p-2 rounded-lg transition-colors duration-200 flex items-center
                     ${currentView === 'form' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
                >
                  <FormInput className="w-5 h-5" />
                </button>
              </div>

              <div className="hidden lg:flex items-center space-x-3">
                <button className="px-4 py-2 text-base text-gray-600 font-medium hover:bg-gray-50 rounded-lg 
                transition-colors">
                  Save
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400
                 text-white font-medium rounded-lg hover:shadow-lg transition-shadow duration-200 text-base whitespace-nowrap">
                  Make Campaign
                </button>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto">
              <div className="flex items-center justify-center space-x-3 lg:space-x-8 min-w-max px-2">
                {progressSteps.map((step: ProgressStep) => (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => setActiveStep(step.id)}
                        className={`px-3 py-2 lg:px-4 rounded-full text-xs lg:text-sm font-medium
                           transition-colors duration-200 whitespace-nowrap
                            ${step.id === activeStep ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                      >
                        {step.label}
                      </button>
                      <div className={`w-full h-1 mt-2 rounded-full transition-all duration-200
                         ${step.id === activeStep ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-transparent'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col xl:flex-row">
            <Chat currentView={currentView} />
            <Form currentView={currentView}
        data={formData}
        setData={setFormData}
        onFormSubmit={handleFormSubmit}/>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />

    </div>
  )
}

export default Dashboard
