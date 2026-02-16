export const useCardLook = (Component)=>{
    return (props)=>{
       <div className="bg-gray-700 p-10 rounded-2xl">
        <Component/>
       </div>
    }
}