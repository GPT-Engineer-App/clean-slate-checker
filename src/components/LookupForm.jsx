import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

const LookupForm = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send a request to your backend
    // For now, we'll simulate a response
    const inDatabase = Math.random() > 0.5;

    setResult({ name, inDatabase });
    toast.success(`Lookup complete. Cost: 1 euro.`);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name to Lookup</Label>
          <Input 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="John Doe"
            required 
          />
        </div>
        <Button type="submit" className="w-full">Lookup (1€)</Button>
      </form>
      
      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Result:</h3>
          <p>
            {result.name}: {result.inDatabase ? "Found in database" : "Not found"}
          </p>
        </div>
      )}
    </div>
  );
};

export default LookupForm;
