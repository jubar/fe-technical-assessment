import WorkflowGrid from './components/ui/grid/WorkflowGrid';
import PageHeader from './components/ui/PageHeader';
import Sidebar from './components/ui/sidebar/Sidebar';
import TopBar from './components/ui/TopBar';

function App() {
  return (
    <div className="flex flex-1 flex-col md:flex-row w-full min-h-screen max-h-screen">
      <TopBar />
      <Sidebar />

      <main className="flex w-full flex-col overflow-y-auto pb-10">
        <PageHeader title="Workflows" />

        <WorkflowGrid />

        <span className="flex items-center text-center text-xs text-gray-400 whitespace-nowrap fixed bottom-1 left-1/2  transform -translate-x-1/2">
          Made with <span className="text-xl mx-2">🫶</span> by Jubar
        </span>
      </main>
    </div>
  );
}

export default App;
