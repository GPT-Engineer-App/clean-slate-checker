import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SubmissionForm from '../components/SubmissionForm';
import LookupForm from '../components/LookupForm';

const Index = () => {
  const [selectedAction, setSelectedAction] = useState(null);

  const renderContent = () => {
    if (!selectedAction) {
      return (
        <div className="space-y-4">
          <CardTitle className="text-center">What would you like to do?</CardTitle>
          <div className="flex flex-col space-y-4">
            <Button onClick={() => setSelectedAction('lookup')}>Look somebody up</Button>
            <Button onClick={() => setSelectedAction('report')}>Report somebody</Button>
          </div>
        </div>
      );
    }

    return selectedAction === 'lookup' ? <LookupForm /> : <SubmissionForm />;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Cleaner Verification System</CardTitle>
          <CardDescription>Submit or lookup cleaner information</CardDescription>
        </CardHeader>
        <CardContent>
          {renderContent()}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          {selectedAction && (
            <Button variant="outline" onClick={() => setSelectedAction(null)} className="w-full">
              Back to Selection
            </Button>
          )}
          <a href="https://wise.com/pay/r/RSDBM2ru-fmLOOI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Make a payment
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
