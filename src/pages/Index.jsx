import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubmissionForm from '../components/SubmissionForm';
import LookupForm from '../components/LookupForm';

const Index = () => {
  const [activeTab, setActiveTab] = useState("submit");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Cleaner Verification System</CardTitle>
          <CardDescription>Submit or lookup cleaner information</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="submit">Submit Entry</TabsTrigger>
              <TabsTrigger value="lookup">Lookup</TabsTrigger>
            </TabsList>
            <TabsContent value="submit">
              <SubmissionForm />
            </TabsContent>
            <TabsContent value="lookup">
              <LookupForm />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setActiveTab("submit")}>Submit New Entry</Button>
          <Button variant="outline" onClick={() => setActiveTab("lookup")}>Lookup Names</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
