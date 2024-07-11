import { Box } from "@mui/material"
import Image from "next/image"

const Footer = () => {
    return (
        <Box className="flex items-center m-7 gap-1 justify-center">
            <Image src="/images/security.png" alt="security icon" width={18} height={18} />
            <span className="text-sm text-[#B2B2B2] font-semibold">Pagamento 100% seguro via:</span>
            <Image src="/images/footerlogo.png" alt="woovi logo" width={58} height={18} /> 
        </Box>
    )
}

export default Footer