"use client"

import { Box, FormControl } from "@mui/material"
import Header from "../molecules/Header"
import PromptPayment from "../organisms/PromptPayment"
import ParceledPayment from "../organisms/ParceledPayment"
import { useState } from "react"
import Footer from "../molecules/Footer"

const FirstStep = () => {
    const [value, setValue] = useState(1)

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
            <Header text="João, como você quer pagar?" />
            <FormControl>
                <PromptPayment value={value} setValue={setValue} />
                <ParceledPayment value={value} setValue={setValue} />
            </FormControl>
            <Box></Box>
            <Footer />
        </Box>
    )
}

export default FirstStep