import React, { useState } from "react";
import AddHabit from "./AddHabit";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../reduxStore/store";
import { addHabit } from "../reduxStore/habitSlice";

interface frequency {
    value: string;
    name: string;
}


const selectedOptions : frequency[] = [
    {value: "daily", name: "Daily"},
    {value: "weekly", name: "Weekly"}
]

export default function Habit(){
    const [habit, setHabit] = useState<string>("")
    const dispatch = useDispatch<AppDispatch>();
    const habitArr = useSelector((state:RootState) =>state.habitStore.habits);
    const [selectedOption, setSelectedOption] = useState<string>("")


    function handleAddHabit(){
        if (habit.trim() && selectedOption.trim()){
           dispatch(addHabit({
            id: Date.now().toString(),
            name: habit,
            frequency: selectedOption,
            createdAt: new Date().toISOString(),
           }))
        }
        setHabit("");
    }

    return(
        <section className="flex flex-col w-2/4  mx-auto justify-center my-10">
            <h1 className="font-bold text-3xl text-center mb-4">Habit Tracker</h1>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>e.preventDefault()}>
                <input 
                    className="px-4 py-3 outline-1 outline-blue-300 w-full border my-4"
                    type="text" 
                    placeholder="Enter your Habit"
                    value={habit}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setHabit(e.target.value)}
                />
                <label>
                   
                    <select 
                        name="freq" 
                        className="w-full border py-3 my-4 px-4"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setSelectedOption(e.target.value)}
                    >
                        {
                            selectedOptions.map((item)=>{
                                const {value, name} = item;
                                return (
                                    <option key={value} value={value}>{name}</option>
                                )
                            })
                        }
                    </select>
                </label>

                <button 
                    onClick={handleAddHabit}
                    className="bg-blue-400 text-white outline-none uppercase py-3 w-full rounded-md font-bold"
                >
                    Add Habit
                </button>

                {
                    habitArr && habitArr.map((habits)=>{
                        const {name, id,  frequency} = habits;
                        return (
                            <AddHabit habitName={name} key={id} id={id} frequency={frequency} streak="1" />
                        )
                    })
                }

            </form>

        </section>
    )
}