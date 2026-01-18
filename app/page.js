import Hero from "./components/Hero";
import MetricCounter from "./components/MetricCounter";
import Products from "./components/Products";
import AppsBuilt from "./components/AppsBuilt";
import CostEstimator from "./components/CostEstimator";
import ComparePlans from "./components/ComparePlans";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <MetricCounter />
      <Products />
      <AppsBuilt />
      <CostEstimator />
      <ComparePlans />
      <Testimonial />
      <Faq />
      <CTA />
    </main>
  );
}
