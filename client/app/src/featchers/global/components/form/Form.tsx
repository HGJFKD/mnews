import React, { useEffect } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { BsFillSendPlusFill } from 'react-icons/bs';

import FormWrapper from '../../styledComponents/form/form-wrapper.styled';
import IconAndStyleBtn from '../IconAndStyleBtn';
import Input from './Input';
import Typography from '../Typography';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter';
import { SelectFormField } from '../../types/propsTypes/formField.type';
import CustomSelect from './CustomSelect';
import DataTable from '../../types/dataTable.type';

interface FormComponentProps {
    formTitle: string;
    fields: SelectFormField[]
    onSubmit: SubmitHandler<FieldValues>;
    initialValues?: string[];
}

const Form: React.FC<FormComponentProps> = ({ formTitle, fields, initialValues, onSubmit }) => {
    const { handleSubmit, register, setValue, getValues } = useForm();

    useEffect(() => {
        if (initialValues) {
            console.log(getValues()[1]);
            Object.keys(initialValues).forEach((fieldName) => {
                setValue(fieldName, initialValues[fieldName as any]);
            });
        }

    }, [initialValues, setValue]);

    const handleDataChange = (name: string, value: any) => {
        setValue(name, value)
    };

    const titleForm = capitalizeFirstLetter(formTitle + ' form')

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Typography
                children={initialValues ? 'Edit ' + titleForm : 'New ' + titleForm}
                component="h2"
                sx={{ marginBottom: "10px" }}
            >
            </Typography>
            {fields.map((field, i) => (
                <span key={i}>
                    {field.type === "select" ? (
                        <CustomSelect field={field}
                            register={{ ...register(field.name) }}
                            onDataChange={handleDataChange}
                        />
                    ) : (
                        <Input type={field.type} title={field.label} defaultValue={getValues()[0]}
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
