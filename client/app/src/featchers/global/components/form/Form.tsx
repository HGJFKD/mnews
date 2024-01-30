import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { BsFillSendPlusFill } from 'react-icons/bs';

import FormWrapper from '../../styledComponents/form/form-wrapper.styled';
import IconAndStyleBtn from '../IconAndStyleBtn';
import Input from './Input';
import Typography from '../Typography';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter';
import { SelectFormField } from '../../types/propsTypes/formField.type';
import CustomSelect from './CustomSelect';
import { useNavigate } from 'react-router-dom';

interface FormComponentProps {
    formTitle?: string;
    fields?: SelectFormField[]
    onSubmit?: SubmitHandler<FieldValues>;
    initialValues?: any[];
}

const Form: React.FC<FormComponentProps> = ({ formTitle, fields, initialValues, onSubmit }) => {

    const navigate = useNavigate();

    const { handleSubmit, register, setValue, getValues } = useForm();

    const handleDataChange = (name: string, value: any) => {
        setValue(name, value);
    };

    const titleForm = formTitle && capitalizeFirstLetter(formTitle) + ' Form';

    return (
        <FormWrapper onSubmit={
            onSubmit && handleSubmit(() => {
                onSubmit(getValues());
                navigate(-1)
            })}>
            <Typography
                children={initialValues ? 'Edit ' + titleForm : 'New ' + titleForm}
                component="h2"
                sx={{ marginBottom: "10px" }}
            >
            </Typography>
            {fields && fields.map((field, i) => (
                <span key={i}>
                    {field.type === "select" ? (
                        <CustomSelect field={field}
                            register={{ ...register(field.name) }}
                            onDataChange={handleDataChange}
                            initialValues={initialValues && initialValues[i]}
                        />
                    ) : (
                        <Input type={field.type} title={field.label}
                            initialValues={initialValues && initialValues[i]}
                            register={{ ...register(field.name) }}
                        />
                    )}
                </span>
            ))}
            <IconAndStyleBtn
                icon={<BsFillSendPlusFill />}
                btnprops={{ type: 'submit', disabled: false }}
                title="Submit"
                to="" />
        </FormWrapper>
    );
};

export default Form;
