import { AnimatedSection } from './AnimatedSection';
import { CtaButton } from './ui/CtaButton';
import { cta } from '../content/cta';

export function CtaBanner() {
  return (
    <AnimatedSection className="cta-banner" aria-labelledby="cta-banner-title">
      <div className="container cta-banner__inner">
        <div className="cta-banner__text">
          <span className="cta-banner__eyebrow">{cta.bannerEyebrow}</span>
          <h2 id="cta-banner-title">{cta.bannerTitle}</h2>
          <p>{cta.bannerLead}</p>
        </div>
        <CtaButton href={cta.anchors.form} size="lg" className="cta-banner__action">
          {cta.bannerAction}
        </CtaButton>
      </div>
    </AnimatedSection>
  );
}
