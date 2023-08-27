
export const Line = ({progress}: {progress: number;}) => {
    return <div className="w-full bg-gray-200 h-1.5 dark:bg-gray-700">
    <div className="bg-red-600 h-1.5 dark:bg-red-500" style={{width: progress + "%"}}></div>
  </div>
}