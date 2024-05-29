import NavBar from "../components/NavBar";

export default function Breaths({ src, alt }) {
  return (
    <>
      <div className="body">
        <NavBar
          src={src}
          alt={alt}
          title="Breathing Techniques"
          link1="/goals"
          link1Name="Wellness Goals Chart"
          link2="/meditations"
          link2Name="Guided Meditation"
        />
        <h2>This is the Breaths Page</h2>
      </div>
    </>
  );
}
