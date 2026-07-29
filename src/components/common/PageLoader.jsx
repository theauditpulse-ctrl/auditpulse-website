function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 px-6">
      <div className="w-full max-w-md rounded-3xl border border-blue-100 bg-white/90 p-8 text-center shadow-xl backdrop-blur">
        <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-[#0F3D91]" />

        <h2 className="text-2xl font-semibold text-[#0F3D91]">
          Loading page...
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          Please wait while we prepare the content for you.
        </p>
      </div>
    </div>
  );
}

export default PageLoader;
