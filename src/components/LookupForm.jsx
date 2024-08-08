import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

const LookupForm = () => {
  const [names, setNames] = useState('');
  const [results, setResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameList = names.split(',').map(name => name.trim());
    const cost = nameList.length;
    
    // Here you would typically send a request to your backend
    // For now, we'll simulate a response
    const mockResults = nameList.map(name => ({
      name,
      inDatabase: Math.random() > 0.5
    }));

    setResults(mockResults);
    toast.success(`Lookup complete. Cost: ${cost} euro${cost > 1 ? 's' : ''}.`);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="names">Names to Lookup (comma-separated)</Label>
          <Input 
            id="names" 
            value={names} 
            onChange={(e) => setNames(e.target.value)} 
            placeholder="John Doe, Jane Smith"
            required 
          />
        </div>
        <Button type="submit" className="w-full">Lookup (1€ per name)</Button>
      </form>
      
      {results && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Results:</h3>
          <ul className="list-disc pl-5">
            {results.map((result, index) => (
              <li key={index}>
                {result.name}: {result.inDatabase ? "Found in database" : "Not found"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LookupForm;
