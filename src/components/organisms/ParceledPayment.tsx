import { Box } from "@mui/material"
import PaymentTitle from "../atoms/PaymentTitle"
import Price from "../molecules/Price"
import RadioInput from "../atoms/RadioInput"
import ParceledPaymentTab from "../molecules/ParceledPaymentTab"
import { Dispatch, SetStateAction } from "react"

const ParceledPayment = () => {
    return (
        <Box className="relative">
            <Box className="border border-[#E5E5E5] rounded-lg mt-8">
                <PaymentTitle title="Pix Parcelado" />
                <ParceledPaymentTab total="30.600,00" number={2} price="15.300,00" text="Total: R$ 30.600,00" />
                <ParceledPaymentTab total="30.620,00" number={3} price="10.196,66" text="Total: R$ 30.620,00" />
                <ParceledPaymentTab total="30.900,00" flag={true} number={4} price="7.725,00" text="Total: R$ 30.900,00" />
                <ParceledPaymentTab total="31.500,00" number={5} price="6.300,00" text="Total: R$ 31.500,00" />
                <ParceledPaymentTab total="31.699,98" number={6} price="5.283,33" text="Total: R$ 31.699,98" />
                <ParceledPaymentTab total="31.800,00" number={7} price="4.542,85" text="Total: R$ 31.800,00" />
            </Box>
        </Box>
    )
}

export default ParceledPayment