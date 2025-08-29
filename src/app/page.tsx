import ThemeContainer from "@/components/Theme/ThemeContainer";

function HomePage() {
  return (
    <div className="h-dvh w-full  flex gap-10 items-center justify-center ">
      <ThemeContainer />
      {/* an html anchor element to fully refresh the page for checking flasher */}
      <a
        className="hover:underline border-3 font-semibold p-4 rounded-4xl text-blue-400 border-blue-400"
        href="/anotherpage"
      >
        Go to ANOTHER PAGE
      </a>
    </div>
  );
}

export default HomePage;
