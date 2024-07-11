import { useStore } from "@/store/value";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import React from "react";

const FormConfirmation = () => {
    const parcelNumber = useStore((state) => state.price.parcelNumber)
    const parcelPrice = useStore((state) => state.price.amount)
    const arrayNumber = Array.from({ length: parcelNumber - 1 }, (_, index) => index + 1)
    const [parcels, setParcels] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setParcels(event.target.value as string);
    };

    return (
        <Box className="flex flex-col w-[80%] gap-4 mt-3">
            <TextField id="name" label="Nome completo" variant="outlined"/>
            <TextField id="cpf" label="CPF" variant="outlined" />
            <TextField id="card" label="Número do cartão" variant="outlined" />
            <Box className="flex gap-4">
                <TextField id="date" label="Vencimento" variant="outlined" />
                <TextField id="cvv" label="CVV" variant="outlined" />
            </Box>
            <FormControl fullWidth>
                <InputLabel id="parcels">Parcelas</InputLabel>
                <Select
                    labelId="labelParcels"
                    id="parcels"
                    value={parcels}
                    label="Parcelas"
                    onChange={handleChange}
                >
                    {arrayNumber.map((key, index) => {
                        return <MenuItem value={index}>{index + 1}x de {parcelPrice}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    )
}

export default FormConfirmation