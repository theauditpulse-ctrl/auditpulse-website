function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-[#0F3D91]" />
        <p className="text-lg font-semibold text-[#0F3D91]">Loading</p>
        <p className="mt-2 text-sm text-gray-600">Preparing the next page...</p>
      </div>
    </div>
  );
}

export default Loading;
