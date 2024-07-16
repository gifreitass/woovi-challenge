"use client"

import { Box } from "@mui/material"
import Header from "../molecules/Header"
import Footer from "../molecules/Footer"
import Image from "next/image"
import { useStore } from "@/store/value";
import CopyQrCode from "../molecules/CopyQrCode"
import PaymentTime from "../molecules/PaymentTime"
import TimelineBox from "../organisms/TimelineBox"
import { useRouter } from "next/navigation"
import PaymentInformations from "../organisms/PaymentInformations"

const SecondStep = () => {
    const parcelPrice = useStore((state) => state.price.amount)
    const router = useRouter()

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
            <Header styleProps="w-[60%]" text={<span>João, pague a entrada de R$ {parcelPrice} pelo Pix</span>} />
            <Image onClick={() => router.push('/confirmation')} className="p-1 mt-4 border-2 border-[#03D69D] rounded-lg" src="/images/qrcode.png" alt="payment qrcode" width={280} height={280} />
            <CopyQrCode />
            <PaymentTime />
            <TimelineBox pixConfirmation={false} />
            <PaymentInformations />
            <Footer />
        </Box>
    )
}

export default SecondStep