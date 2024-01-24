import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { BsFillSendPlusFill } from 'react-icons/bs';

import FormWrapper from '../../styledComponents/form/form-wrapper.styled';
import IconAndStyleBtn from '../IconAndStyleBtn';
import Input from './Input';
import Typography from '../Typography';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter';
import FormField from '../../types/propsTypes/formField.type';
import Select from './Select';

interface FormComponentProps {
    formTitle: string;
    fields: FormField[];
    onSubmit: SubmitHandler<FieldValues>;
}

const Form: React.FC<FormComponentProps> = ({ formTitle, fields, onSubmit }) => {
    const { handleSubmit, register } = useForm();
    const [isFormValid, setIsFormValid] = useState(false);

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Typography
                childern={capitalizeFirstLetter(formTitle + ' form')}
                componnet="h2"
                sx={{ marginBottom: "10px" }}
            >
            </Typography>
            {fields.map((field) => (
                <span key={field.name}>
                    {field.type === 'select' ? (
                        <Select options={field.options!} />
                    ) : (
                        <Input type={field.type} title={field.label}
                            register={{ ...register(field.name) }}
                        />
                    )}
                </span>
            ))}
            <IconAndStyleBtn
                icon={<BsFillSendPlusFill />}
                btnprops={{ type: 'submit', disabled: false }} title="Submit" to="" />
        </FormWrapper>
    );
};

export default Form;
