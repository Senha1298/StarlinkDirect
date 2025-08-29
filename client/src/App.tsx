import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Questionnaire from "@/pages/questionnaire";
import DeviceDetection from "@/pages/device-detection";
import LocationDetection from "@/pages/location-detection";
import Loading from "@/pages/loading";
import Offer from "@/pages/offer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Questionnaire} />
      <Route path="/device-detection" component={DeviceDetection} />
      <Route path="/location-detection" component={LocationDetection} />
      <Route path="/loading" component={Loading} />
      <Route path="/offer" component={Offer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
