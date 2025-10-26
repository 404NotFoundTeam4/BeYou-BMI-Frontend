import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input"
import { useState } from "react";
import BMICard from "../components/BMICard";

function About() {
  const [weight, setWeight] = useState<string>(""); // ✅ เริ่มต้นเป็นค่าว่าง
  const [height, setHeight] = useState<string>(""); // ✅ เริ่มต้นเป็นค่าว่าง
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const w = Number(weight);
    const h = Number(height);

    if (w > 0 && h > 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
      alert("กรุณากรอกน้ำหนักและส่วนสูงให้ครบ");
    }
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <Input type="email" placeholder="Email" />
    </div>

    
  );
}

export default About;
