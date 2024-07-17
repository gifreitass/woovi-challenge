"use client"

import { Box } from "@mui/material"
import Header from "../molecules/Header"
import { useStore } from "@/store/value"
import React from "react"
import FormConfirmation from "../organisms/FormConfirmation"
import PaymentTime from "../molecules/PaymentTime"
import TimelineBox from "../organisms/TimelineBox"
import PaymentInformations from "../organisms/PaymentInformations"
import Footer from "../molecules/Footer"

const ThirdStep = () => {
    const parcelNumber = useStore((state) => state.price.parcelNumber)
    
    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
            <Header text={<span>João, pague o restante em {parcelNumber - 1}x no <br />cartão</span>} />
            <FormConfirmation />
            <PaymentTime />
            <TimelineBox pixConfirmation={true} />
            <PaymentInformations />
            <Footer />
        </Box>
    )
}

export default ThirdStep