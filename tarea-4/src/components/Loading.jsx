export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-600 font-medium animate-pulse">
        Cargando personaje...
      </p>
    </div>
  );
};
