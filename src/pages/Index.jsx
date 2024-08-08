import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SubmissionForm from '../components/SubmissionForm';
import LookupForm from '../components/LookupForm';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-6xl">
        <CardHeader>
          <CardTitle className="text-center">No-show Protector</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4">Look somebody up</h2>
            <LookupForm />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4">Report somebody</h2>
            <SubmissionForm />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
