import React from "react";
import "../App.css";

export default function Home() {
  return (
    <div>
      <div class="homeDiv">
        <img
          src="../assets/GuruCatLogo.svg"
          alt="yoga cat guru"
          height="200px"
        />
        <button onClick="sendToBreath()" class="btn2">
          Breathing Techniques
        </button>
        <button onClick="sendToWellnessWheel()" class="btn2">
          Wellness Goals Chart
        </button>
        <button onClick="sendToGuidedMeditation()" class="btn2">
          Guided Meditation
        </button>
      </div>
    </div>
  );
}
