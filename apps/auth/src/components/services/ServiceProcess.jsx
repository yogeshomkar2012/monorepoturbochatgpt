const ServiceProcess = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-10">How It Works</h2>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
            <div
              className="text-center border border-border p-2 rounded-lg hover:bg-primary group"
            >
              <div className="text-primary text-3xl font-bold mb-4 group-hover:text-white">
                index + 1
              </div>
              <p className="font-medium group-hover:text-white">step</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
