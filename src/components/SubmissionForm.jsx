import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    reason: '',
    evidence: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      evidence: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(formData);
    toast.success("Submission received. It will be reviewed manually.");
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      contact: '',
      reason: '',
      evidence: null
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact">Email or Phone Number</Label>
        <Input id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="reason">Reason for Submission</Label>
        <Select name="reason" onValueChange={(value) => handleChange({ target: { name: 'reason', value } })} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="unresponsive">Unresponsive</SelectItem>
            <SelectItem value="no-show-pre-meeting">No-show pre-meeting</SelectItem>
            <SelectItem value="no-show-first-workday">No-show pre-first workday</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="evidence">Evidence (Screenshot)</Label>
        <Input id="evidence" name="evidence" type="file" onChange={handleFileChange} accept="image/*" required />
      </div>
      <Button type="submit" className="w-full">Submit for Review</Button>
    </form>
  );
};

export default SubmissionForm;
