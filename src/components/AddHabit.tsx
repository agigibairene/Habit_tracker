import { FaCircleCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";


interface HabitTile{
    habit: string;
    frequency: string;
    streak: string;
}



export default function AddHabit({habit, frequency, streak} : HabitTile){
    return(
        <div className="flex flex-col my-4 w-full bg-gray-300 px-4 py-6 gap-3 rounded-md">
            <div className="flex justify-between">
                <div>
                    <p className="text-xl font-bold">{habit}</p>
                    <p className="text-gray-500">{frequency}</p>
                </div>

                <div className="flex gap-4">
                    <button className="uppercase px-2 py-3 border rounded-md border-green-500 flex gap-3">
                        <FaCircleCheck color="green" size={25}/>
                        completed
                    </button>
                    <button className="uppercase  px-2 py-3 border rounded-md border-red-500 flex gap-3">
                        <MdDeleteOutline color="red" size={25}/>
                        remove
                    </button>
                </div>
            </div>

            <p>Current streak: {streak}</p>
        </div>
    )
}