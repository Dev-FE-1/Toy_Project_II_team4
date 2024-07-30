import Heading from '../../components/Heading/Heading';
import DateButton from './DateButton';

export default function Calendar() {
  return (
    <div>
      <Heading title="업무관리" />
      <DateButton content="Today" />
      <DateButton content="Year" />
      <DateButton content="Month" />
      <DateButton content="Day" />
    </div>
  );
}
