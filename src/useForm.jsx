import{useState} from 'react';
export const useForm =(initialValues)=>{ //cunstom hook
    const [email, setEmail] = useState(initialValues);
    const [values, setValues] = useState(initialValues);

return [values, e => setValues ({
    ...values,
    [e.target.name]:e.target.value
})]
}