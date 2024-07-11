import { Box } from "@mui/material"
import Image from "next/image"
import React from "react"

const Header: React.FC<{ text: React.ReactNode }> = (props) => {
    return (
        <Box className="relative flex flex-col items-center gap-3">
            <Image src="/images/Logo.png" alt="woovi logo" width={120} height={34} />
            <span className="text-center text-xl font-extrabold text-[#4D4D4D]">{props.text}</span>
        </Box>
    )
}

export default Header