import { AppIcons } from "../assets/exports"
import { useMediaQuery } from 'react-responsive'
import { FaBars } from 'react-icons/fa'


type UserProps = {
  data: {
    name: string
    period: string
  }
}

export function User({ data }: UserProps) {
  
  const isLowScreen = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <nav className="flex justify-between items-center mb-5 mt-3">
      <div className="">
      {!isLowScreen && <button><FaBars className="text-[#3160a2] text-[45px] p-[6px] rounded border-2 border-[#3160a2]"/></button>}
      </div>
      <div className="flex items-center gap-5">
        <div className="p-2 bg-blue-400 border-4 border-blue-900 rounded-full w-fit">
          <img src={AppIcons.user} className="w-8 h-8" alt=""/>
        </div>
        <div className="flex flex-col mr-6">
          <p>{data?.name}</p>
          <span>{data?.period}</span>
        </div>
      </div>
    </nav>
  )
}
