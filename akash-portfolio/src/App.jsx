import Hero from "./components/Hero"
import Section from "./components/Section"
import Card from "./components/Card"

function App() {
  return (
    <>
      <Hero />

      <Section title="About">
        <p>
          I am a Data Science graduate passionate about Machine Learning,
          Data Analysis, and Cloud technologies. I enjoy solving real-world
          problems using data-driven approaches.
        </p>
      </Section>

      <Section title="Skills">
        <div className="grid">
          <Card title="Programming" description="Python, Swift, SwiftUI" />
          <Card title="Machine Learning" description="Regression, Classification, SVM, Random Forest" />
          <Card title="Cloud" description="AWS S3, EC2, Lambda, VPC" />
          <Card title="Databases" description="MySQL, MongoDB" />
        </div>
      </Section>

      <Section title="Projects">
        <div className="grid">
          <Card
            title="Semiconductor Yield Prediction"
            description="ML models to predict manufacturing pass/fail using high-dimensional sensor data."
            tech="Python • Random Forest • SVM"
          />

          <Card
            title="Face Emotion Detection"
            description="Analyzed ADHD & depression patterns using ML on 10,000+ records."
            tech="ML • Classification"
          />

          <Card
            title="Crime Analysis on Women"
            description="Predicted crime trends with 90%+ accuracy to support safety initiatives."
            tech="Python • ML • Data Analysis"
          />
        </div>
      </Section>

      <Section title="Contact">
        <p>Email: akashpallam13@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/akash-pallam</p>
      </Section>

      <footer className="footer">
        © 2026 Pallam Akash
      </footer>
    </>
  )
}

export default App
