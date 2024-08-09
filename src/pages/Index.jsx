import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SubmissionForm from '../components/SubmissionForm';
import LookupForm from '../components/LookupForm';

const Index = () => {
  const [activeForm, setActiveForm] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-6xl">
        <CardHeader>
          <CardTitle className="text-center">No-show Protector</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center space-x-4">
            <Button onClick={() => setActiveForm('lookup')}>Look somebody up</Button>
            <Button onClick={() => setActiveForm('report')}>Report somebody</Button>
          </div>
          {activeForm === 'lookup' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Look somebody up</h2>
              <LookupForm />
            </div>
          )}
          {activeForm === 'report' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Report somebody</h2>
              <SubmissionForm />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
