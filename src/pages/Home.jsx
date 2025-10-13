import { Hero } from '../components/sections/Hero'
import { UrgencyBanner } from '../components/sections/UrgencyBanner'
import { ProblemSection } from '../components/sections/ProblemSection'
import { SolutionOverview } from '../components/sections/SolutionOverview'
import { HowItWorks } from '../components/sections/HowItWorks'
import { IndustryTimeline } from '../components/sections/IndustryTimeline'
import { SocialProof } from '../components/sections/SocialProof'
import { CTASection } from '../components/sections/CTASection'

export const Home = () => {
  return (
    <>
      <Hero />
      <UrgencyBanner />
      <ProblemSection />
      <SolutionOverview />
      <HowItWorks />
      <IndustryTimeline />
      <SocialProof />
      <CTASection />
    </>
  )
}
