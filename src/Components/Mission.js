import React from 'react';
import './Mission.css';

function AimObjectiveSection() {
  return (
    <div className="aim-objective-section">
      <h1 className="section-title">AIMS AND OBJECTIVES</h1>
      <div className="aim-objective-container">
        <div className="aim-objective-item" id="aim1">
          <h2 className="highlight-heading">1. Promoting Social Welfare</h2>
          <div className="content">
            <p>Many NGOs work towards the betterment of society and address issues such as poverty, education, healthcare, and social justice.</p>
          </div>
        </div>

        <div className="aim-objective-item" id="aim2">
          <h2 className="highlight-heading">2. Advocating for Human Rights</h2>
          <div className="content">
            <p>NGOs often work towards promoting and protecting human rights, such as the right to freedom of speech, assembly, and religion.</p>
          </div>
        </div>

        <div className="aim-objective-item" id="aim3">
          <h2 className="highlight-heading">3. Environmental Conservation</h2>
          <div className="content">
            <p>NGOs focus on environmental issues, such as climate change, deforestation, and pollution.</p>
          </div>
        </div>

        <div className="aim-objective-item" id="aim4">
          <h2 className="highlight-heading">4. Providing Humanitarian Aid</h2>
          <div className="content">
            <p>NGOs provide emergency relief and support to people affected by natural disasters, conflicts, and other crises.</p>
          </div>
        </div>

        <div className="aim-objective-item" id="aim5">
          <h2 className="highlight-heading">5. Advancing Education</h2>
          <div className="content">
            <p>Education plays a major role in the betterment of society. NGOs provide education and skill development to marginalized communities.</p>
          </div>
        </div>

        <div className="aim-objective-item" id="aim6">
          <h2 className="highlight-heading">6. Empowerment of Women</h2>
          <div className="content">
            <p>NGOs prioritize women's safety and support females to overcome situations such as cruelty, dowry, etc.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AimObjectiveSection;
