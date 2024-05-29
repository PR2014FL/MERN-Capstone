import NavBar from "../components/NavBar";

export default function Goals({src, alt}) {
  return (
    <>
      <div className="body">
        <NavBar
          src={src}
          alt={alt}
          title="Wellness Goal Chart"
          link1="/breaths"
          link1Name="Breathing Techniques"
          link2="/meditations"
          link2Name="Guided Meditation"
        />
        <h2>This is the Goal Chart Page</h2>
      </div>
    </>
  );
}
