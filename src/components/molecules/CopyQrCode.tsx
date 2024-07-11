import { Box } from "@mui/material"
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useRouter } from "next/navigation";

const CopyQrCode = () => {
    const router = useRouter();

    return (
        <Box onClick={() => router.push('/confirmation')} className="bg-[#133A6F] text-white mt-4 rounded-lg px-3 py-2">
            <span className="">Clique para copiar QR CODE </span>
            <FileCopyIcon />
        </Box>
    )
}

export default CopyQrCode