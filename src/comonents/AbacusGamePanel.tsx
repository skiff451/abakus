'use client'
import Select from "@/ui/Select";
import {Button} from "@/ui/Button";
import {Label} from "@/ui/Label";
import {createAbacusDirectCountExercise} from "@/helpers/abakusLogic/createAbacusDirectCountExercise";
import {Range} from "@/ui/Range";
import {useState} from "react";
import {CountType, DifficultyType, Token} from "@/types/abacusTypes";

export const AbacusGamePanel = () => {
    const countItems = [2, 3, 4, 5, 6, 7, 8, 9]
    const difficultyItems = [1, 10, 100, 1000]

    const [count, setCount] = useState<string>("2")
    const [amount, setAmount] = useState<string>("5")
    const [difficulty, setDifficulty] = useState<string>("1")
    const [exercise, setExercise] = useState<Token[]>([])


    return (
        <div className="flex flex-col  h-full mt-20 w-[700px]">
            <h1 className="p-5 text-4xl text-gray-600 font-bold text-center">Direct Count</h1>
            <div className="flex items-center gap-5 p-5">
                <Label name="Count"/>
                <Select items={countItems} setValue={setCount}/>
            </div>
            <div className="flex items-center gap-5 p-5">
                <Label name="Anount"/>
                <Range min={5} max={99} defaultValue={5} step={1} setValue={setAmount}/>
                <Label name={amount}/>
            </div>
            <div className="flex items-center gap-5 p-5">
                <Label name="Difficulty"/>
                <Select items={difficultyItems} setValue={setDifficulty}/>
            </div>
            <div className="p-5 flex justify-center flex-grow">
                <Button name={"Start"} type={"submit"} onClick={() => {
                    setExercise(createAbacusDirectCountExercise(
                        Number(count) as CountType,
                        Number(amount),
                        Number(difficulty) as DifficultyType))
                }}/>
            </div>
            <div className="flex gap-4 max-w-2xl flex-wrap py-10 ">
                {exercise.map((i, index) => (<Label key={index} name={i}/>))}
            </div>
        </div>
    )
}
