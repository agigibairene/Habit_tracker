import { createSlice } from "@reduxjs/toolkit";

interface Habit{
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDate: string[];
    createdAt: string[];
}

interface InitialState{
    habits: Habit[];
}

const initialState: InitialState = {habits: []}

const habitSlice = createSlice({
    name: "Habit Slice",
    initialState,
    reducers:{
        addHabit(state, action){
            const newHabit = action.payload;
            const findHabit = state.habits.find(habit => habit.id === newHabit.id);
            if (!findHabit){
                state.habits.push({...newHabit})
            }
        },
        removeHabit(state, action){
            const oldHabit = action.payload;
            state.habits = state.habits.filter(item => item.id !== oldHabit.id);
        }
    }
});

export const habitReducer = habitSlice.reducer;
export const { addHabit, removeHabit } = habitSlice.actions;
