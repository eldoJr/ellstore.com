import InfoPage from './InfoPage'

export const SizingGuide = () => (
  <InfoPage
    title="Sizing Guide"
    eyebrow="Fit · Measurements"
    breadcrumb={[{ label: 'Sizing Guide' }]}
    intro="All pieces are cut with a considered fit. We recommend sizing up if you prefer a relaxed silhouette."
    sections={[
      {
        heading: 'How we size',
        body: 'Our sizing follows a consistent logic across all categories. Each piece is designed with a specific fit intention — structured, relaxed, or oversized — noted on the individual product page.',
      },
      {
        heading: 'Measurements',
        items: [
          'XS — Chest 82–87 cm · Waist 64–69 cm · Hip 88–93 cm',
          'S  — Chest 88–93 cm · Waist 70–75 cm · Hip 94–99 cm',
          'M  — Chest 94–99 cm · Waist 76–81 cm · Hip 100–105 cm',
          'L  — Chest 100–105 cm · Waist 82–87 cm · Hip 106–111 cm',
          'XL — Chest 106–111 cm · Waist 88–93 cm · Hip 112–117 cm',
        ],
      },
      {
        heading: 'How to measure',
        items: [
          'Chest — measure around the fullest part, keeping the tape horizontal',
          'Waist — measure around the narrowest part of your natural waist',
          'Hip — measure around the fullest part of your hips, about 20 cm below the waist',
        ],
      },
      {
        heading: 'Still unsure?',
        body: 'Write to us at hello@ellstore.com with your measurements and the piece you are considering. We will advise personally.',
      },
    ]}
  />
)

export const Shipping = () => (
  <InfoPage
    title="Shipping"
    eyebrow="Delivery · Logistics"
    breadcrumb={[{ label: 'Shipping' }]}
    intro="All orders are packed by hand and dispatched within two business days."
    sections={[
      {
        heading: 'Brazil',
        items: [
          'Standard — 5 to 8 business days · Free on orders above R$ 800',
          'Express — 2 to 3 business days · R$ 35',
          'Same day — Available in São Paulo · R$ 60',
        ],
      },
      {
        heading: 'International',
        items: [
          'South America — 7 to 14 business days · R$ 120',
          'North America and Europe — 10 to 18 business days · R$ 180',
          'Rest of world — 14 to 21 business days · R$ 220',
        ],
      },
      {
        heading: 'Packaging',
        body: 'Every order is wrapped in unbleached tissue and sealed with a wax stamp. The outer box is made from recycled board. We do not use plastic.',
      },
      {
        heading: 'Tracking',
        body: 'A tracking link is sent by email as soon as your order is dispatched. If you have not received it within 48 hours, contact us at hello@ellstore.com.',
      },
    ]}
  />
)

export const Returns = () => (
  <InfoPage
    title="Returns"
    eyebrow="Policy · Exchange"
    breadcrumb={[{ label: 'Returns' }]}
    intro="We accept returns within 14 days of delivery. Items must be unworn, unwashed, and in original condition."
    sections={[
      {
        heading: 'Eligibility',
        items: [
          'Items must be returned within 14 days of the delivery date',
          'Items must be unworn, unwashed, and with all original tags attached',
          'Sale items and limited pieces are final sale and cannot be returned',
          'Accessories are final sale',
        ],
      },
      {
        heading: 'How to return',
        items: [
          'Email hello@ellstore.com with your order number and reason for return',
          'We will send a prepaid return label within 24 hours',
          'Pack the item securely in its original packaging if possible',
          'Drop off at any authorised carrier location',
        ],
      },
      {
        heading: 'Refunds',
        body: 'Refunds are processed within 5 business days of receiving the returned item. The amount will be credited to your original payment method. Shipping costs are non-refundable.',
      },
      {
        heading: 'Exchanges',
        body: 'We do not process direct exchanges. If you need a different size, return the original item and place a new order. If the size you need is unavailable, contact us and we will do our best to help.',
      },
    ]}
  />
)

export const Stockists = () => (
  <InfoPage
    title="Stockists"
    eyebrow="Retail · Wholesale"
    breadcrumb={[{ label: 'Stockists' }]}
    intro="Ellstore is available at a small number of carefully selected retailers. We do not sell through department stores or mass-market platforms."
    sections={[
      {
        heading: 'São Paulo',
        items: [
          'Forma Livre — Rua Oscar Freire 540, Jardins',
          'Objeto Encontrado — Rua Aspicuelta 306, Vila Madalena',
        ],
      },
      {
        heading: 'Rio de Janeiro',
        items: [
          'Modo — Rua Garcia D\'Ávila 149, Ipanema',
        ],
      },
      {
        heading: 'International',
        body: 'We are currently in conversation with select retailers in Lisbon and Berlin. Updates will be announced via our newsletter.',
      },
      {
        heading: 'Wholesale enquiries',
        body: 'If you are a retailer interested in carrying Ellstore, write to us at wholesale@ellstore.com. We work with a limited number of partners and review applications twice a year.',
      },
    ]}
  />
)

export const Press = () => (
  <InfoPage
    title="Press"
    eyebrow="Media · Press"
    breadcrumb={[{ label: 'Press' }]}
    intro="For press enquiries, sample requests, and editorial collaborations, contact our press office directly."
    sections={[
      {
        heading: 'Press contact',
        items: [
          'Email — press@ellstore.com',
          'Response time — within 48 hours',
          'Sample requests — minimum 5 business days lead time',
        ],
      },
      {
        heading: 'Press kit',
        body: 'A full press kit including high-resolution imagery, brand guidelines, and collection notes is available on request. Write to press@ellstore.com with your publication and deadline.',
      },
      {
        heading: 'As seen in',
        body: 'Coverage and editorial features are listed in our press archive, available on request.',
      },
    ]}
  />
)

export const Privacy = () => (
  <InfoPage
    title="Privacy Policy"
    eyebrow="Legal · Privacy"
    breadcrumb={[{ label: 'Privacy' }]}
    intro="We collect only what we need and never sell your data. This policy explains what we collect, why, and how you can control it."
    sections={[
      {
        heading: 'What we collect',
        items: [
          'Name and email address when you place an order or contact us',
          'Shipping address for order fulfilment',
          'Payment information — processed securely by our payment provider, never stored by us',
          'Browsing data via anonymised analytics to improve the site',
        ],
      },
      {
        heading: 'How we use it',
        items: [
          'To process and fulfil your orders',
          'To respond to your enquiries',
          'To send order confirmations and shipping updates',
          'To send our newsletter, only if you have opted in',
        ],
      },
      {
        heading: 'Your rights',
        items: [
          'Request a copy of the data we hold about you',
          'Ask us to correct or delete your data',
          'Opt out of marketing communications at any time',
          'Lodge a complaint with the relevant data protection authority',
        ],
      },
      {
        heading: 'Contact',
        body: 'For any privacy-related requests, write to privacy@ellstore.com. We will respond within 5 business days.',
      },
    ]}
  />
)

export const Terms = () => (
  <InfoPage
    title="Terms of Service"
    eyebrow="Legal · Terms"
    breadcrumb={[{ label: 'Terms' }]}
    intro="By using this site and placing an order, you agree to the following terms."
    sections={[
      {
        heading: 'Orders',
        body: 'All orders are subject to availability. We reserve the right to cancel any order at our discretion, in which case a full refund will be issued. Prices are listed in Brazilian Reais and include applicable taxes.',
      },
      {
        heading: 'Intellectual property',
        body: 'All content on this site — including images, text, and design — is the property of Ellstore. It may not be reproduced, distributed, or used without written permission.',
      },
      {
        heading: 'Limitation of liability',
        body: 'Ellstore is not liable for any indirect, incidental, or consequential damages arising from the use of this site or the purchase of our products, to the extent permitted by applicable law.',
      },
      {
        heading: 'Governing law',
        body: 'These terms are governed by the laws of Brazil. Any disputes will be resolved in the courts of São Paulo.',
      },
      {
        heading: 'Changes',
        body: 'We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.',
      },
    ]}
  />
)

export const Cookies = () => (
  <InfoPage
    title="Cookie Policy"
    eyebrow="Legal · Cookies"
    breadcrumb={[{ label: 'Cookies' }]}
    intro="We use a minimal number of cookies to make this site work and to understand how it is used."
    sections={[
      {
        heading: 'Essential cookies',
        body: 'These are required for the site to function. They enable things like your shopping bag and session state. They cannot be disabled.',
      },
      {
        heading: 'Analytics cookies',
        body: 'We use anonymised analytics to understand how visitors use the site. No personally identifiable information is collected. You can opt out at any time.',
      },
      {
        heading: 'No third-party advertising',
        body: 'We do not use advertising cookies or share your data with advertising networks.',
      },
      {
        heading: 'Managing cookies',
        body: 'You can control cookies through your browser settings. Disabling essential cookies may affect site functionality. To opt out of analytics, write to privacy@ellstore.com.',
      },
    ]}
  />
)
