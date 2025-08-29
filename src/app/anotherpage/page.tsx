function AnotherPage() {
  return (
    <div className="h-dvh w-screen flex   items-center justify-center">
      <h1>
        This is anotherPage to check if the theme flashes reload the page if you
        want or go
        {/* ignore this eslint error it's just demonstration to make the browser reload too when navigating */}
        <a
          className="border-3 border-blue-400 mx-5 hover:underline text-blue-400 font-semibold p-4 rounded-4xl"
          href="/"
        >
          Back
        </a>
      </h1>
    </div>
  );
}

export default AnotherPage;
