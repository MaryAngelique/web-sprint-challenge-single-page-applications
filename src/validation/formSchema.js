import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required.')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['S', 'M', 'L', 'XL'], 'Size is required'),

    sauce: yup
        .string()
        .oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'Sauce is required'),

    instructions: yup.string(),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),
    extraCheese: yup.boolean()


})

export default formSchema;