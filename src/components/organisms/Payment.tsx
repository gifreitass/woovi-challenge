import { Box } from "@mui/material"
import PaymentTitle from "../atoms/PaymentTitle"
import Flag from "../molecules/Flag"
import PaymentTab from "../molecules/PaymentTab"

const Payment = () => {
    return (
        <Box className="md:flex md:gap-20 md:items-start">
            <Box className="relative border border-[#E5E5E5] rounded-lg mt-8">
                <PaymentTitle title="Pix"/>
                <PaymentTab total="R$ 30.500,00" styleProps="pt-5" flag={<Flag text={<span className="text-sm text-white">🤑 <b>R$ 300,00</b> de volta no seu Pix na hora</span>} />} number={1} price="30.500,00" text={<span className="text-sm text-[#03D69D]">Ganhe <b>3%</b> de Cashback</span>} />
            </Box>
            <Box className="relative border border-[#E5E5E5] rounded-lg mt-8">
                <PaymentTitle title="Pix parcelado" />
                <PaymentTab total="R$ 30.600,00" styleProps="border-b-2 pt-5 pb-3" number={2} text="Total: R$ 30.600,00" price="15.300,00" />
                <PaymentTab total="R$ 30.620,00" styleProps="border-b-2 py-3" number={3} text="Total: R$ 30.620,00" price="10.196,66" />
                <PaymentTab total="R$ 30.900,00" flag={<Flag text={<span className="text-sm text-white"><b>-3% de juros:</b> Melhor opção de parcelamento</span>} />} styleProps="pt-3" number={4} text="Total: R$ 30.900,00" price="7.725,00" />
                <PaymentTab total="R$ 31.500,00" styleProps="border-b-2 py-3 border-t-2" number={5} text="Total: R$ 31.500,00" price="6.300,00" />
                <PaymentTab total="R$ 31.699,98" styleProps="border-b-2 py-3" number={6} text="Total: R$ 31.699,98" price="5.283,33" />
                <PaymentTab total="R$ 31.800,00" styleProps="py-3" number={7} text="Total: R$ 31.800,00" price="4.542,85" />
            </Box>
        </Box>
    )
}

export default Payment