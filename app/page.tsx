import Header from '@/components/Header';
import Explanation from '@/components/Explanation';
import SimulationList from '@/components/SimulationList';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col">
        <Explanation />
        <SimulationList />
      </main>
      
      <footer className="w-full py-4 bg-gray-50 border-t">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} ExamGo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}