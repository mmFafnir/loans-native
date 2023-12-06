import {FC, useState} from 'react';
import {View} from 'react-native';
import SelectButton from './SelectButton';
import SelectBody from './SelectBody';

const Select: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={{overflow: 'visible'}}>
      <SelectButton open={isOpen} setOpen={setIsOpen} />
      <SelectBody open={isOpen} />
    </View>
  );
};

export default Select;
