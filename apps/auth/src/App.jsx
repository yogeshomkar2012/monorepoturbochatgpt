function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <input
          className="w-full mb-3 px-3 py-2 border rounded"
          placeholder="Email"
        />

        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          placeholder="Password"
          type="password"
        />
        <button className="w-full cursor-pointer bg-primary text-white py-2 rounded">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default App;
