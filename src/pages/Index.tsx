import { Header } from "@/components/Header";
import { ApplicationTracker } from "@/components/ApplicationTracker";
import { RecommendationsSection } from "@/components/RecommendationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Application Tracker Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24">
              <ApplicationTracker />
            </div>
          </aside>
          
          {/* Main Content */}
          <section className="lg:col-span-8 xl:col-span-9">
            <RecommendationsSection />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
