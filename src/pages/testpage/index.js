import Button from '@/components/atoms/Button';
import { getAseanCountries } from '@/services/getCountries';

export default function Test() {
  async function handleClick() {
    const data = await getAseanCountries();
    console.log(data);
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Button onClick={handleClick}>Log</Button>
    </div>
  );
}
