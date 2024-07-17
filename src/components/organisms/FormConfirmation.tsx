import { useStore } from "@/store/value";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";

const schema = Yup.object().shape({
    name: Yup.string().required('Esse campo é obrigatório'),
    cpf: Yup.string().required('Esse campo é obrigatório').min(11, 'Deve conter no mínimo 11 caracteres'),
    card_number: Yup.string().required('Esse campo é obrigatório'),
    card_due_date: Yup.string().required('O campo vencimento é obrigatório'),
    cvv: Yup.string().required('O campo CVV é obrigatório').min(3, 'O CVV conter no mínimo 3 caracteres'),
})

const FormConfirmation = () => {
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            name: '',
            cpf: '',
            card_number: '',
            card_due_date: '',
            cvv: '',
        },
        validationSchema: schema,
        onSubmit: () => {
            router.push('/confirmation')
        }
    })
    const parcelNumber = useStore((state) => state.price.parcelNumber)
    const parcelPrice = useStore((state) => state.price.amount)
    const arrayNumber = Array.from({ length: parcelNumber - 1 }, (_, index) => index + 1)
    const [parcels, setParcels] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setParcels(event.target.value as string);
    };

    return (
        <Box component="form" className="flex flex-col w-[80%] gap-4 mt-3">
            <TextField value={formik.values.name} onChange={formik.handleChange} id="name" label="Nome completo" variant="outlined"/>
            {formik.errors.name && <span className="text-red-700 text-sm">{formik.errors.name}</span>}
            <TextField value={formik.values.cpf} onChange={formik.handleChange}  id="cpf" label="CPF" variant="outlined" />
            {formik.errors.cpf && <span className="text-red-700 text-sm">{formik.errors.cpf}</span>}
            <TextField value={formik.values.card_number} onChange={formik.handleChange}  id="card_number" label="Número do cartão" variant="outlined" />
            {formik.errors.card_number && formik.touched.card_number && <span className="text-red-700 text-sm">{formik.errors.card_number}</span>}
            <Box className="flex gap-4">
                <TextField value={formik.values.card_due_date} onChange={formik.handleChange}  id="card_due_date" label="Vencimento" variant="outlined" />
                <TextField value={formik.values.cvv} onChange={formik.handleChange}  id="cvv" label="CVV" variant="outlined" />
            </Box>
            {formik.errors.card_due_date && formik.touched.card_due_date && <span className="text-red-700 text-sm">{formik.errors.card_due_date}</span>}
            {formik.errors.cvv && formik.touched.cvv && <span className="text-red-700 text-sm">{formik.errors.cvv}</span>}
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
                        return <MenuItem key={key} value={index}>{index + 1}x de {parcelPrice}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <Box onClick={() => formik.handleSubmit()} className="bg-[#133A6F] text-white mt-4 rounded-lg px-3 py-2 text-center">Pagar</Box>
        </Box>
    )
}

export default FormConfirmation