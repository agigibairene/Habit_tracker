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
    progress: number;
    colors: string;
}

const initialState: InitialState = {habits: [], progress: 0, colors: ""};

const habitSlice = createSlice({
    name: "Habit Slice",
    initialState,
    reducers:{
        addHabit(state, action){
            const newHabit = action.payload;
            const findHabit = state.habits.find(habit => habit.id === newHabit.id);
            if (!findHabit){
                state.habits.push({...newHabit, completedDate: []})
            }
        },
        removeHabit(state, action){
            const oldHabit = action.payload;
            state.habits = state.habits.filter(item => item.id !== oldHabit);
        },
        handleProgress(state){
            if (state.progress < 100){
                state.progress += 20
            }
            else{
                state.progress = 0
            }
        },
        progressBarColor(state){
            if (state.progress > 0){
                state.colors = "#0000FF"
            }
            else{
                state.colors = "#fff"
            }
        }
    }
});

export const habitReducer = habitSlice.reducer;
export const { addHabit, removeHabit, handleProgress, progressBarColor } = habitSlice.actions;
