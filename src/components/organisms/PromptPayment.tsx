import { Box } from "@mui/material"
import PaymentTitle from "../atoms/PaymentTitle"
import Price from "../molecules/Price"
import RadioInput from "../atoms/RadioInput"
import Flag from "../molecules/Flag"
import { useStore } from "@/store/value";

const PromptPayment = () => {
    const parcelPrice = useStore((state) => state.price.amount)
    const updatePriceStore = useStore((state) => state.updatePrice)

    return (
        <Box className="relative">
            {parcelPrice === '30.500,00' ? (<Box onClick={() => updatePriceStore({ amount: '30.500,00', total: '30.500,00', parcelNumber: 1 })} className="border-2 bg-[#F4FBF9] border-[#03D69D] rounded-lg py-5 mt-8">
                <PaymentTitle title="Pix" />
                <Box className="flex justify-between w-[360px] px-5">
                    <Price number={1} text={<span className="text-sm text-[#03D69D]">Ganhe <b>3%</b> de Cashback</span>} price="30.500,00" />
                    <RadioInput parcelPrice={parcelPrice} price='30.500,00' />
                </Box>
                <Flag text={<span className="text-sm text-white">🤑 <b>R$ 300,00</b> de volta no seu Pix na hora</span>} />
            </Box>) :
                (<Box onClick={() => updatePriceStore({ amount: '30.500,00', total: '30.500,00', parcelNumber: 1 })} className="border border-[#E5E5E5] rounded-lg py-5 mt-8">
                    <PaymentTitle title="Pix" />
                    <Box className="flex justify-between w-[360px] px-5">
                        <Price number={1} text={<span className="text-sm text-[#03D69D]">Ganhe <b>3%</b> de Cashback</span>} price="30.500,00" />
                        <RadioInput parcelPrice={parcelPrice} price='30.500,00' />
                    </Box>
                    <Flag text={<span className="text-sm text-white">🤑 <b>R$ 300,00</b> de volta no seu Pix na hora</span>} />
                </Box>)}
        </Box>
    )
}

export default PromptPayment