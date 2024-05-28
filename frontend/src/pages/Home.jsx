
import Button from "../components/Button";
import MainLogo from "../components/MainLogo";

export default function Home({ src, alt }) {
  return (
    <>
      <div className="homeDiv">
        <MainLogo src={src} alt={alt} />
        <Button to="/breaths" label="Breathing Techniques" />
        <Button to="/goals" label="Wellness Goal Chart" />
        <Button to="/meditations" label="Guided Meditation" />
      </div>
    </>
  );
}
