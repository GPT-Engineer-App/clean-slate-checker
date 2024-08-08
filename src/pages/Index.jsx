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
          <div className="flex justify-center space-x-4">
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
          <CardTitle className="text-center">No-show Protector</CardTitle>
          <CardDescription className="text-center">Cleaner Edition</CardDescription>
        </CardHeader>
        <CardContent>
          {renderContent()}
        </CardContent>
        <CardFooter className="flex justify-center">
          {selectedAction && (
            <Button variant="outline" onClick={() => setSelectedAction(null)}>
              Back to Selection
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
