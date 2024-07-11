import { Box } from "@mui/material"
import Price from "./Price"
import RadioInput from "../atoms/RadioInput"
import Flag from "./Flag"
import { Dispatch, SetStateAction } from "react"

const ParceledPaymentTab: React.FC<{ number: number, text: string, price: string, value: number, setValue: Dispatch<SetStateAction<number>> }> = (props) => {
    const { number, text, price, value, setValue } = props

    return (
        <>
            {number === 4 && value === 4 ? <Box className="border-b-2 py-3 border-2 bg-[#F4FBF9] border-[#03D69D]">
                <Box onClick={() => setValue(number)} className="flex justify-between w-[360px] px-5">
                    <Price number={number} text={text} price={price} />
                    <RadioInput value={value} number={number} />
                </Box>
                <Flag text={<span className="text-sm text-white"><b>-3% de juros:</b> Melhor opção de parcelamento</span>} />
            </Box> : number === 4 ? <Box className="border-b-2 py-3">
                <Box onClick={() => setValue(number)} className="flex justify-between w-[360px] px-5">
                    <Price number={number} text={text} price={price} />
                    <RadioInput value={value} number={number} />
                </Box>
                <Flag text={<span className="text-sm text-white"><b>-3% de juros:</b> Melhor opção de parcelamento</span>} />
            </Box> : number === value ? <Box className="border-b-2 py-4 border-2 bg-[#F4FBF9] border-[#03D69D]">
                <Box onClick={() => setValue(number)} className="flex justify-between w-[360px] px-5">
                    <Price number={number} text={text} price={price} />
                    <RadioInput value={value} number={number} />
                </Box>
            </Box> : <Box onClick={() => setValue(number)} className="flex justify-between w-[360px] px-5 py-4 border-b-2">
                <Price number={number} text={text} price={price} />
                <RadioInput value={value} number={number} />
            </Box>
            }
        </>
    )
}

export default ParceledPaymentTab
