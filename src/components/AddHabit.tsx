import { FaCircleCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../reduxStore/store";
import { removeHabit, handleProgress, progressBarColor } from "../reduxStore/habitSlice";
import ProgressBar from "./ProgressBar";


interface HabitTile{
    habitName: string;
    frequency: string;
    streak: string;
    id: string;
}



export default function AddHabit({habitName, frequency, streak, id} : HabitTile){

    const dispatch = useDispatch<AppDispatch>();

    return(
        <div className="flex flex-col my-4 w-full bg-gray-300 px-4 py-6 gap-3 rounded-md">
            <div className="flex justify-between">
                <div>
                    <p className="text-xl font-bold">{habitName}</p>
                    <p className="text-gray-500">{frequency}</p>
                </div>

                <div className="flex gap-4">
                    <button 
                        onClick={()=>{dispatch(handleProgress()); dispatch(progressBarColor())}}
                        className="uppercase px-1 py-2 border md:px-2 md:py-3 md:text-lg text-sm rounded-md border-green-500 flex items-center gap-3"
                    >
                        <FaCircleCheck color="green" size={15}/>
                        completed
                    </button>
                    <button 
                        className="uppercase  px-1 py-2 md:px-2 md:py-3 md:text-lg border rounded-md border-red-500 flex text-sm items-center gap-3"
                        onClick={()=>dispatch(removeHabit(id))}
                    >
                        <MdDeleteOutline color="red" size={25}/>
                        remove
                    </button>
                </div>
            </div>

            <p>Current streak: {streak}</p>

            <ProgressBar />
        </div>
    )
}