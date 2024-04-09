import { AppIcons } from "../assets/exports"

type UserProps = {
  data: {
    name: string
    period: string
  }
}
export function User({ data }: UserProps) {
  return (
    <div className="absolute top-0 right-0 flex gap-6 px-6 py-2 border border-gray-700 rounded-sm">
      <div className="p-2 bg-blue-400 border-4 border-blue-900 rounded-full w-fit">
        <img src={AppIcons.user} className="w-8 h-8" alt="" />
      </div>
      <div className="flex flex-col mr-10">
        <p>{data?.name}</p>
        <span>{data?.period}</span>
      </div>
    </div>
  )
}
