import { Box } from "@mui/material"
import Price from "./Price"
import RadioInput from "../atoms/RadioInput"
import { useStore } from "@/store/value"
import { ReactNode } from "react"

const PaymentTab: React.FC<{ text: ReactNode, number: number, price: string, flag?: ReactNode, styleProps?: string }> = (props) => {
    const { text, number, price, flag, styleProps } = props
    const parcelPrice = useStore((state) => state.price.amount)
    const updatePriceStore = useStore((state) => state.updatePrice)

    return (
        <Box className={price === parcelPrice ? 'border-2 border-[#03D69D] rounded-md' : ''}>
            <Box onClick={() => updatePriceStore({ amount: price, total: text, parcelNumber: number })} className={`${styleProps} flex justify-between w-[360px] px-5`}>
                <Price number={number} text={text} price={price} />
                <RadioInput parcelPrice={parcelPrice} price={price} />
            </Box>
            {flag}
        </Box>
    )
}

export default PaymentTab