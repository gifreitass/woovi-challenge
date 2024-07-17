import { Box } from "@mui/material"
import Image from "next/image"

const Confirmation = () => {
    return (
        <Box className="h-screen flex justify-center items-center">
            <Image src="/images/confirmation.png" width={250} height={250} alt="confirmation image"/>
        </Box>
    )
}

export default Confirmation