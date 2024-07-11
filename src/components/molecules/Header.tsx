import { Box } from "@mui/material"
import Image from "next/image"
import React from "react"

const Header: React.FC<{ text: string }> = (props) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
            <Image src="/images/Logo.png" alt="woovi logo" width={120} height={34} />
            <span className="text-xl font-extrabold text-[#4D4D4D]">{props.text}</span>
        </Box>
    )
}

export default Header