import "./Loading.css";
export default function Loading() {
  return (
    <>
      <div
        className="w-screen h-screen flex items-center justify-center no-select"
        style={{ backgroundColor: "rgb(241, 242, 243)" }}
      >
        <img
          draggable="false"
          className="no-select w-[10%]"
          src="/assets/icons/spinner.svg"
          alt="spinner"
        />
      </div>
    </>
  );
}
