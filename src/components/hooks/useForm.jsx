import {useState} from 'react';

const useForm = (initialValue = {}) => {
    const [dataForm, setDataForm] = useState(initialValue);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDataForm({...dataForm, [name]:value});
    }

    const resetForm = () => {
        setDataForm(initialValue);
    }

    return [dataForm, handleChange, resetForm];
}

export default useForm;