import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input"
function About() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <Input type="email" placeholder="Email" />
    </div>

    
  );
}

export default About;
