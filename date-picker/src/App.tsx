import { useState } from "react";
import DatePicker from "./components/DatePicker";

export default function App() {
  const [value, setValue] = useState<Date>(new Date());

  return (
    <div>
      <DatePicker value={value} onChange={setValue} />
    </div>
  );
}
