import React from 'react'
import { Sparkles, Copy, RotateCcw, Search, Mic } from 'lucide-react'

interface ChatProps {
  currentView: string
}

const Chat: React.FC<ChatProps> = ({ currentView }) => {
  return (
    <div className={`
      xl:w-1/2 bg-white xl:border-r border-gray-100 flex flex-col 
      h-[calc(100vh-200px)] lg:h-[calc(100vh-220px)] order-1
      ${currentView === 'chat' ? 'block xl:block' : 'hidden xl:block'}
    `}>
      <div className="p-4 lg:p-6 flex-shrink-0">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="w-5 lg:w-6 h-5 lg:h-6 text-orange-400" />
          <h2 className="text-lg lg:text-xl font-semibold text-gray-800">Oslo chat</h2>
        </div>
      </div>

      <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
        <div className="space-y-4 lg:space-y-6">
          <div>
            <p className="text-sm lg:text-base text-gray-700 mb-2">Hello I&apos;m Oslo. Tell me what&apos;s on your mind</p>
            
            <div className="flex space-x-2">
              <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                <Copy className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className='flex text-right justify-end'>
            <div className="bg-gray-100 text-gray-700 p-3 rounded-lg max-w-xs">
              <p className="text-sm lg:text-base">Create leads on Tech targets</p>
            </div>
          </div>

          <div>
            <p className="text-sm lg:text-base text-gray-700 mb-2">
              ICP updated to target Tech Companies. If you want to specify roles,
              locations, or other criteria for decision-makers, please let me know
            </p>
            
            <div className="flex space-x-2">
              <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                <Copy className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-6 border-t border-gray-100 flex-shrink-0 bg-white">
        <div className="relative">
          <input 
            type="text"
            className="w-full px-10 py-3 pr-12 border border-gray-200 text-gray-400
            rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500
             focus:border-transparent text-sm lg:text-base"
          />
          <button className="absolute left-3 top-1/2 
          transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
            <Search className="w-4 lg:w-5 h-4 lg:h-5 text-gray-600" />
          </button>

          <button className="absolute right-3 top-1/2 
          transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
            <Mic className="w-4 lg:w-5 h-4 lg:h-5 text-amber-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
