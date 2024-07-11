import { useStore } from "@/store/value"
import { Box } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const PaymentInformations = () => {
    const totalPrice = useStore((state) => state.price.total)

    return (
        <>
            <Box className="w-[80%] flex mt-3 justify-between items-center pb-3 border-b-2 border-b-[#E5E5E5]">
                <span className="text-sm text-[#4D4D4D]">CET: 0,5%</span>
                <span className="text-lg text-[#4D4D4D] font-semibold">{totalPrice}</span>
            </Box>
            <Box className="w-[80%] flex mt-3 justify-between items-center pb-3 border-b-2 border-b-[#E5E5E5]">
                <span className="text-[#4D4D4D] font-extrabold">Como funciona?</span>
                <KeyboardArrowUpIcon />
            </Box>
            <Box className="flex flex-col mt-3 items-center">
                <span className="text-[#B2B2B2] font-semibold text-sm">Identificador:</span>
                <span className="text-[#4D4D4D] font-extrabold text-sm">2c1b951f356c4680b13ba1c9fc889c47</span>
            </Box>
        </>
    )
}

export default PaymentInformations