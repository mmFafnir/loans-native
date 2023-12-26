import {FC, useState} from 'react';
import {View} from 'react-native';
import SelectButton from './SelectButton';
import SelectBody from './SelectBody';

interface IProps {
  title: string;
  text: string;
}

const Select: FC<IProps> = ({title, text}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={{overflow: 'visible'}}>
      <SelectButton open={isOpen} setOpen={setIsOpen} text={title} />
      <SelectBody open={isOpen} text={text} />
    </View>
  );
};

export default Select;
