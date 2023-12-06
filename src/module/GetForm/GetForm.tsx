import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Input from '../../components/UI/Form/Input';
import styled from 'styled-components/native';
import InputDate from '../../components/UI/Form/InputDate';
import {Controller, useForm} from 'react-hook-form';
import InputCheckbox from '../../components/UI/Form/InputCheckbox';
import {Button} from 'react-native-paper';
import InputSelect from '../../components/UI/Form/InputSelect';
import {
  validEmail,
  validMax,
  validMin,
  validNotNumber,
  validRequired,
} from '../../core/form-rools';
import InputNumber from '../../components/UI/Form/InputNumber';
import RadioGroup from '../../components/UI/Form/RadioGroup';
import DopFormJob from './DopForm';
import {getOnlyNum} from '../../assets/scripts/getOnlyNum';
import dayjs from 'dayjs';
import {getDate, isWeekend} from '../../assets/scripts/date';
import {validPhoneNumber} from '../../assets/scripts/validNumbers';
import {useTypeSelector} from '../../hooks/useTypeSelector';
import {FormValues} from '../../store/Slices/formSlice/interface';
import {useTypeDispatch} from '../../hooks/useTypeDispatch';
import {postForm} from '../../store/Slices/formSlice/asyncActions';
import {EnumStatus} from '../../types/Enums';

const GetForm = () => {
  const {range} = useTypeSelector(state => state.range);
  const {status} = useTypeSelector(state => state.form);
  const dispatch = useTypeDispatch();
  const [incomeTypeJob, setIncomeTypeJob] = useState<boolean>(false);
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const {
    handleSubmit,
    control,

    formState: {errors, isValid},
  } = useForm<FormValues>({
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    if (status === EnumStatus.LOADING) return;
    // console.log(data);
    dispatch(postForm(data));
  };

  return (
    <FormView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Controller
          name="loanAmount"
          control={control}
          rules={{required: true}}
          defaultValue={range}
          render={({field: {onChange}}) => (
            <InputSelect
              onChange={onChange}
              label="How much Cash do you need?"
              contentStyles={styles.firstInput}
              defaultValue={range}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{required: validRequired, pattern: validEmail}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              onChange={onChange}
              value={value}
              label="My email address is..."
              placeholder={'example@mail.ru'}
              errorMassage={errors.email?.message as string}
            />
          )}
        />
        <Controller
          name="firstName"
          control={control}
          rules={{
            required: validRequired,
            minLength: validMin(2),
            maxLength: validMax(64),
            pattern: validNotNumber,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              onChange={onChange}
              value={value}
              label="First name"
              placeholder={'John'}
              errorMassage={errors.firstName?.message as string}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          rules={{
            required: validRequired,
            minLength: validMin(2),
            maxLength: validMax(64),
            pattern: validNotNumber,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              onChange={onChange}
              value={value}
              label="Last name"
              placeholder={'Smith'}
              errorMassage={errors.lastName?.message as string}
            />
          )}
        />
        <Controller
          name="homePhone"
          control={control}
          // дописать регулярное выражение
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
              label="My mobile number is..."
              value={value}
              onChange={onChange}
              type="custom"
              validNumber={true}
              placeholder="(___) ___-____"
              options={{
                mask: '(999) 999-9999',
              }}
              errorMassage={errors.homePhone?.message as string}
            />
          )}
        />
        <Controller
          name="zip"
          control={control}
          rules={{
            required: validRequired,
            minLength: validMin(5),
          }}
          render={({field: {onChange, value}}) => (
            <InputNumber
              label="Zip Code"
              value={value}
              onChange={onChange}
              type="custom"
              placeholder="______"
              options={{
                mask: '99999',
              }}
              errorMassage={errors.zip?.message as string}
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          rules={{
            required: validRequired,
            maxLength: validMax(256),
          }}
          render={({field: {onChange, value}}) => (
            <Input
              onChange={onChange}
              value={value}
              label="What Street in city?"
              placeholder={'my address'}
              errorMassage={errors.address?.message as string}
            />
          )}
        />
        <Controller
          name="dob"
          control={control}
          rules={{
            required: validRequired,
          }}
          defaultValue={getDate({nextDate: -6543})}
          render={({field: {onChange}}) => (
            <InputDate
              onChange={onChange}
              label="What is your Date Of Birth?"
              defaultValue={getDate({nextDate: -6543})}
              maxDate={getDate({nextDate: -6543})}
            />
          )}
        />
        <Controller
          name="ssn"
          control={control}
          rules={{
            required: validRequired,
            minLength: validMin(9),
          }}
          render={({field: {onChange, value}}) => (
            <InputNumber
              label="My Social Security Number is"
              value={value}
              onChange={onChange}
              type="custom"
              placeholder="_________"
              options={{
                mask: '999999999',
              }}
              errorMassage={errors.ssn?.message as string}
            />
          )}
        />
        <Controller
          name="activeMilitary"
          control={control}
          rules={{
            required: validRequired,
          }}
          render={({field: {onChange, value}}) => (
            <RadioGroup
              label="Are you in the Military?"
              value={value}
              onChange={onChange}
              errorMassage={errors.activeMilitary?.message as string}
              items={[
                {label: 'Yes', value: 'YES'},
                {label: 'No', value: 'NO'},
              ]}
            />
          )}
        />
        <Controller
          name="driversLicenseNumber"
          control={control}
          rules={{
            required: validRequired,
            minLength: validMin(2),
            maxLength: validMax(25),
          }}
          render={({field: {onChange, value}}) => (
            <InputNumber
              label="What's your Drivers License Number?"
              value={value}
              onChange={value => onChange(value)}
              type="custom"
              placeholder="123123123"
              options={{
                mask: '9999999999999999999999999',
              }}
              errorMassage={errors.driversLicenseNumber?.message as string}
            />
          )}
        />
        <Controller
          name="incomeType"
          control={control}
          rules={{
            required: validRequired,
          }}
          render={({field: {onChange, value}}) => (
            <RadioGroup
              label="What is your Income Source?"
              value={value}
              onChange={value => {
                setIncomeTypeJob(value == 'EMPLOYMENT');
                onChange(value);
              }}
              errorMassage={errors.incomeType?.message as string}
              items={[
                {label: 'Job Income', value: 'EMPLOYMENT'},
                {label: 'Benefits', value: 'BENEFITS'},
              ]}
            />
          )}
        />
        {incomeTypeJob && <DopFormJob control={control} errors={errors} />}
        <Controller
          name="incomeNetMonthly"
          control={control}
          defaultValue="100"
          rules={{
            required: validRequired,
            max: {value: 100000, message: 'Maximum amount 100.000$'},
          }}
          render={({field: {onChange, value = '100'}}) => (
            <InputNumber
              label="What is your Monthly Net Income?"
              value={value}
              onChange={value => onChange(getOnlyNum(value))}
              type="money"
              options={{
                unit: '$',
                precision: 0,
              }}
              placeholder="40000$"
              errorMassage={errors.incomeNetMonthly?.message as string}
            />
          )}
        />
        <Controller
          name="incomePaymentFrequency"
          control={control}
          rules={{
            required: validRequired,
          }}
          render={({field: {onChange, value}}) => (
            <RadioGroup
              label="How often are you paid?"
              value={value}
              onChange={onChange}
              errorMassage={errors.incomePaymentFrequency?.message as string}
              items={[
                {label: 'Weekly', value: 'WEEKLY'},
                {
                  label: 'Bi-weekly (e.g. Every other Friday)',
                  value: 'BIWEEKLY',
                },
                {
                  label: 'Semi-monthly (e.g. 15th & last day)',
                  value: 'TWICEMONTHLY',
                },
                {label: 'Monthly', value: 'MONTHLY'},
              ]}
            />
          )}
        />
        <Controller
          name="incomeNextDate1"
          control={control}
          rules={{
            required: validRequired,
            validate: value => !isWeekend(new Date(value)),
          }}
          defaultValue={getDate({nextDate: 3})}
          render={({field: {onChange}}) => (
            <InputDate
              onChange={onChange}
              label="My next paydate is..."
              defaultValue={getDate({nextDate: 3})}
              validWeekend={true}
              minDate={getDate({nextDate: 3})}
              maxDate={getDate({nextDate: 63})}
            />
          )}
        />
        <Controller
          name="bankAccountType"
          control={control}
          rules={{
            required: validRequired,
          }}
          render={({field: {onChange, value}}) => (
            <RadioGroup
              label="How often are you paid?"
              value={value}
              onChange={onChange}
              errorMassage={errors.bankAccountType?.message as string}
              items={[
                {label: 'Savings', value: 'SAVING'},
                {label: 'Checking', value: 'CHECKING'},
              ]}
            />
          )}
        />
        <Controller
          name="bankDirectDeposit"
          control={control}
          rules={{
            required: validRequired,
          }}
          render={({field: {onChange, value}}) => (
            <RadioGroup
              label="Is your pay a Direct Deposit?"
              value={value}
              onChange={onChange}
              errorMassage={errors.bankDirectDeposit?.message as string}
              items={[
                {label: 'Yes', value: 'YES'},
                {label: 'No', value: 'NO'},
              ]}
            />
          )}
        />
        <Controller
          name="creditRating"
          control={control}
          render={({field: {onChange, value}}) => (
            <RadioGroup
              label="Is your pay a Direct Deposit?"
              value={value}
              onChange={onChange}
              items={[
                {label: 'Great (700+)', value: 'GREAT'},
                {label: 'Good (600 - 699)', value: 'GOOD'},
                {label: 'Fair (500 - 599)', value: 'FAIR'},
                {label: 'Poor (500 and below)', value: 'POOR'},
              ]}
            />
          )}
        />
        <Controller
          name="bankName"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input onChange={onChange} value={value} label="Bank name" />
          )}
        />
        <Controller
          name="bankAba"
          control={control}
          rules={{
            required: validRequired,
            maxLength: validMax(15),
            minLength: validMin(5),
          }}
          render={({field: {onChange, value}}) => (
            <InputNumber
              label="ABA routing number"
              value={value}
              onChange={value => onChange(getOnlyNum(value))}
              type="only-numbers"
              placeholder="e.g. 2341536435"
              errorMassage={errors.bankAba?.message as string}
            />
          )}
        />
        <Controller
          name="bankAccountNumber"
          control={control}
          rules={{
            required: validRequired,
            maxLength: validMax(15),
            minLength: validMin(5),
          }}
          render={({field: {onChange, value}}) => (
            <InputNumber
              label="Account number"
              value={value}
              onChange={value => onChange(getOnlyNum(value))}
              type="only-numbers"
              placeholder="e.g. 2341536435"
              errorMassage={errors.bankAccountNumber?.message as string}
            />
          )}
        />

        {/* <InputDate label="Enter your date of birth" /> */}
        <View style={styles.footer}>
          <InputCheckbox
            label="I consent to the processing of personal data"
            setValue={setIsAgree}
          />
          <Button
            loading={status === EnumStatus.LOADING}
            labelStyle={{color: '#fff'}}
            onPress={handleSubmit(onSubmit as any)}
            style={[styles.button, !isAgree || !isValid ? styles.disable : {}]}
            mode="elevated"
            disabled={!isAgree || !isValid}
            elevation={4}>
            <TextButton>Get a loan</TextButton>
          </Button>
        </View>
      </ScrollView>
    </FormView>
  );
};

export default GetForm;

const FormView = styled.View`
  flex: 1;
`;

const TextButton = styled.Text`
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
`;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#73a7fc',
  },
  disable: {
    backgroundColor: '#73a7fc79',
  },

  footer: {
    marginLeft: 6,
    marginBottom: 20,
  },

  firstInput: {
    marginTop: 20,
  },
});
