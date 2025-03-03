import React, { useState } from "react";

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


    return(
        <section className="flex flex-col w-2/4 max-h-screen mx-auto justify-center my-10">
            <h1 className="font-bold text-3xl text-center mb-4">Habit Tracker</h1>
            <form>
                <input 
                    className="px-4 py-3 outline-1 outline-blue-300 w-full border my-4"
                    type="text" 
                    placeholder="Enter your Habit"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setHabit(e.target.value)}
                />
                <label>
                   
                    <select name="freq" className="w-full border py-3 my-4 px-4">
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

                <button className="bg-blue-400 text-white uppercase py-3 w-full rounded-md font-bold">Add Habit</button>
            </form>


        </section>
    )
}