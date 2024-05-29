import NavBar from "../components/NavBar";
import Video from "../components/Video";

export default function Meditations({ src, alt }) {
  return (
    <>
      <div className="body">
        <NavBar
          src={src}
          alt={alt}
          title="Guided Meditation"
          link1="/breaths"
          link1Name="Breathing Techniques"
          link2="/goals"
          link2Name="Wellness Goals Chart"
        />
        <div className="videoDiv">
          <Video />
        </div>
      </div>
    </>
  );
}
