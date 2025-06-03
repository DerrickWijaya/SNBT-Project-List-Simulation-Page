import SimulationCard from './SimulationCard';

const simulationData = [
  {
    id: 1,
    title: "SIMULASI 1",
    imageUrl: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "SIMULASI 2",
    imageUrl: "https://images.pexels.com/photos/269724/pexels-photo-269724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "SIMULASI 3",
    imageUrl: "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function SimulationList() {
  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 space-y-6">
        {simulationData.map((sim) => (
          <SimulationCard 
            key={sim.id}
            id={sim.id}
            title={sim.title}
            imageUrl={sim.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}