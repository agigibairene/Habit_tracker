import { shallowEqual, useSelector } from "react-redux"
import { RootState } from "../reduxStore/store"

export default function ProgressBar(){

    const {colors, progress } = useSelector((state: RootState)=>({
        progress: state.habitStore.progress,
        colors: state.habitStore.colors,
    }), shallowEqual)

    console.log(colors)

    return(
        <div className="w-full h-1 rounded-lg bg-white m-4 mx-auto">
            <div style={{backgroundColor: colors, width: `${progress}%`}} className="h-full rounded-lg  progress-bar">
            </div>
            <p>{progress}</p>
        </div>
    )
}