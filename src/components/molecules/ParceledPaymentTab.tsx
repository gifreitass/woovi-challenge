import { Box } from "@mui/material"
import Price from "./Price"
import RadioInput from "../atoms/RadioInput"
import Flag from "./Flag"
import { useStore } from "@/store/value"

const ParceledPaymentTab: React.FC<{ number: number, text: string, price: string, total: string, flag?: boolean }> = (props) => {
    const { number, text, price, flag } = props
    const parcelPrice = useStore((state) => state.price.amount)
    const updatePriceStore = useStore((state) => state.updatePrice)

    return (
        <>
            {flag && parcelPrice === '7.725,00' ? (<Box className="border-b-2 py-3 border-2 bg-[#F4FBF9] border-[#03D69D]">
                <Box onClick={() => updatePriceStore({ amount: price, total: text, parcelNumber: number })} className="flex justify-between w-[360px] px-5">
                    <Price number={number} text={text} price={price} />
                    <RadioInput parcelPrice={parcelPrice} price={price} />
                </Box>
                <Flag text={<span className="text-sm text-white"><b>-3% de juros:</b> Melhor opção de parcelamento</span>} />
            </Box>) : flag ? (<Box className="border-b-2 py-3">
                <Box onClick={() => updatePriceStore({ amount: price, total: text, parcelNumber: number })} className="flex justify-between w-[360px] px-5">
                    <Price number={number} text={text} price={price} />
                    <RadioInput parcelPrice={parcelPrice} price={price} />
                </Box>
                <Flag text={<span className="text-sm text-white"><b>-3% de juros:</b> Melhor opção de parcelamento</span>} />
            </Box>) : price === parcelPrice ? (<Box className="border-b-2 py-4 border-2 bg-[#F4FBF9] border-[#03D69D]">
                <Box onClick={() => updatePriceStore({ amount: price, total: text, parcelNumber: number })} className="flex justify-between w-[360px] px-5">
                    <Price number={number} text={text} price={price} />
                    <RadioInput parcelPrice={parcelPrice} price={price} />
                </Box>
            </Box>) : (<Box onClick={() => updatePriceStore({ amount: price, total: text, parcelNumber: number })} className="flex justify-between w-[360px] px-5 py-4 border-b-2">
                <Price number={number} text={text} price={price} />
                <RadioInput parcelPrice={parcelPrice} price={price} />
            </Box>)
            }
        </>
    )
}

export default ParceledPaymentTab
