"use client"

import { Box, CircularProgress, FormControl } from "@mui/material"
import Header from "../molecules/Header"
import PromptPayment from "../organisms/PromptPayment"
import ParceledPayment from "../organisms/ParceledPayment"
import { useEffect, useState } from "react"
import Footer from "../molecules/Footer"
import { useRouter } from "next/navigation"
import { useStore } from "@/store/value"

const FirstStep = () => {
    const parcelPrice = useStore((state) => state.price.amount)
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (parcelPrice !== '') {
            setLoading(true)

            const timer = setTimeout(() => {
                router.push("/payment");
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [parcelPrice, router]);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
            {loading ? (
                <>
                    <CircularProgress className="fixed top-[50%] z-50" />
                    <Header text="João, como você quer pagar?" />
                    <PromptPayment />
                    <ParceledPayment />
                    <Footer />
                </>      
            ) : (
                <>
                    <Header text="João, como você quer pagar?" />
                    <PromptPayment />
                    <ParceledPayment />
                    <Footer />
                </>
            )}
        </Box>
    )
}

export default FirstStep