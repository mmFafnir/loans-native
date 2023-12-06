import {FC} from 'react';
import {Control, Controller, FieldErrors} from 'react-hook-form';
import {View} from 'react-native';
import {validMax, validMin, validRequired} from '../../core/form-rools';
import Input from '../../components/UI/Form/Input';
import InputNumber from '../../components/UI/Form/InputNumber';
import {validPhoneNumber} from '../../assets/scripts/validNumbers';
import {FormValues} from '../../store/Slices/formSlice/interface';

interface IPropsJob {
  control: Control<FormValues, any>;
  errors: FieldErrors<FormValues>;
}

const DopFormJob: FC<IPropsJob> = ({control, errors}) => {
  return (
    <View>
      <Controller
        name="workCompanyName"
        control={control}
        // дописать регулярное выражение
        rules={{
          required: validRequired,
          minLength: validMin(2),
          maxLength: validMax(128),
        }}
        render={({field: {onChange, value}}) => (
          <Input
            label="What is your Employer's Name?"
            value={value}
            onChange={onChange}
            placeholder="Burmank"
            errorMassage={errors.workCompanyName?.message as string}
          />
        )}
      />
      <Controller
        name="workPhone"
        control={control}
        rules={{
          required: validRequired,
          minLength: {
            value: 14,
            message: ' Number must be 10 digits',
          },
          validate: value => validPhoneNumber(value),
        }}
        render={({field: {onChange, value = ''}}) => (
          <InputNumber
            label="My Social Security Number is"
            value={value}
            onChange={onChange}
            type="custom"
            validNumber={true}
            placeholder="(___) ___-____"
            options={{
              mask: '(999) 999-9999',
            }}
            errorMassage={errors.workPhone?.message as string}
          />
        )}
      />
    </View>
  );
};

export default DopFormJob;
