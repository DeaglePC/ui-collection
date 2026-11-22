export const IMG = (n: string) => `./republic/${n}`

export const deckPhotos = [
  { src: IMG("deck-kyoto.jpg"), title: "Lantern light after the rain", place: "Gion, Kyoto", note: "Go at dusk on a wet evening, when the stone holds every lantern twice." },
  { src: IMG("deck-lisbon.jpg"), title: "The tram that climbs Alfama", place: "Lisbon, Portugal", note: "Ride line 28 before nine and you get the street, and the light, to yourself." },
  { src: IMG("deck-lofoten.jpg"), title: "Red cabins under black peaks", place: "Reine, Lofoten", note: "Arctic light lasts for hours here, so there is no rush to find the shot." },
  { src: IMG("deck-cappadocia.jpg"), title: "Two hundred balloons at sunrise", place: "Göreme, Cappadocia", note: "Watch from the ridge above town rather than the basket, and bring a coat." },
  { src: IMG("deck-atlas.jpg"), title: "A village built into the hill", place: "High Atlas, Morocco", note: "The road up is slow, so stay the night and catch the snow line at first light." },
  { src: IMG("deck-patagonia.jpg"), title: "Granite towers over milky water", place: "Torres del Paine, Chile", note: "The wind drops for an hour after dawn. That hour is the whole trip." },
]

export const yearStops = [
  { month: 0, src: IMG("year-01.jpg"), title: "Frozen still", value: -12, valueSuffix: "°", valueLabel: "Average low" },
  { month: 3, src: IMG("year-02.jpg"), title: "The thaw starts", value: 4, valueSuffix: "°", valueLabel: "Average high" },
  { month: 6, src: IMG("year-03.jpg"), title: "Long gold evenings", value: 22, valueSuffix: "°", valueLabel: "Average high" },
  { month: 9, src: IMG("year-04.jpg"), title: "Larches turn", value: 9, valueSuffix: "°", valueLabel: "Average high" },
  { month: 11, src: IMG("year-05.jpg"), title: "Lights on early", value: -6, valueSuffix: "°", valueLabel: "Average low" },
]

export const testimonials = [
  {
    quote: "We stopped chasing confirmations by phone. Clients book, reschedule and pay in one place, and our Monday mornings finally start with the work instead of the inbox.",
    name: "Maya Okafor", role: "Founder, Okafor Physio", photo: IMG("face-maya.jpg"),
    stat: { value: 38, suffix: "%", label: "fewer missed appointments" },
  },
  {
    quote: "The setup took an afternoon. Six months later the team still has not asked for a training session, which tells you everything about how clear it is.",
    name: "Tom Lindqvist", role: "Operations lead, Nordvik Studios", photo: IMG("face-tom.jpg"),
    stat: { value: 12, suffix: "\u00a0hrs", label: "saved every week" },
  },
  {
    quote: "Our repeat clients used to drift away after one visit. Now the follow-ups go out on their own and they come back without us lifting a finger.",
    name: "Priya Raman", role: "Owner, Studio Raman", photo: IMG("face-priya.jpg"),
    stat: { value: 27, suffix: "%", label: "more repeat bookings" },
  },
  {
    quote: "Reviews were an afterthought. Now every happy client gets a gentle nudge at the right moment, and our profile looks like the business we actually run.",
    name: "Diego Alvarez", role: "Director, Alvarez Dental", photo: IMG("face-diego.jpg"),
    stat: { value: 64, label: "new reviews a month" },
  },
]

export const I = (n: string) => `./republic/${n}`

export const cities = [
  { src: I("city-lisbon.jpg"), label: "Lisbon", tags: ["Relocation", "Family moves"] },
  { src: I("city-copenhagen.jpg"), label: "Copenhagen", tags: ["Hiring abroad", "Team setup"] },
  { src: I("city-tokyo.jpg"), label: "Tokyo", tags: ["New office", "Local entity", "Payroll"] },
  { src: I("city-singapore.jpg"), label: "Singapore", tags: ["Regional hub", "Founders"] },
  { src: I("city-newyork.jpg"), label: "New York", tags: ["Expansion", "Senior hires"] },
  { src: I("city-capetown.jpg"), label: "Cape Town", tags: ["Remote teams", "Contracts"] },
  { src: I("city-dubai.jpg"), label: "Dubai", tags: ["Private clients", "Residency"] },
]

export const sectors = [
  { name: "Technology", note: "From seed-stage founders to listed software firms, we help tech teams hire and move people quickly." },
  { name: "Hospitality", note: "Seasonal hiring, chef visas and new openings, planned around your launch dates." },
  { name: "Healthcare", note: "Clinics and care groups recruiting specialists from abroad, with every check done properly." },
  { name: "Finance", note: "Funds, banks and fintechs moving senior people between offices without delays." },
  { name: "Education", note: "Schools and universities sponsoring staff and welcoming international students." },
  { name: "Manufacturing", note: "Engineers and skilled trades, sponsored with the paperwork kept simple." },
  { name: "Retail", note: "Store openings and head-office hires for brands growing into new markets." },
  { name: "Media", note: "Producers, writers and on-screen talent working across borders." },
  { name: "Energy", note: "Project teams for renewables and infrastructure, on tight timelines." },
  { name: "Property", note: "Developers and agencies bringing in specialists for large projects." },
  { name: "Agriculture", note: "Seasonal and permanent workers, sponsored with care for the details." },
  { name: "Legal", note: "Firms relocating partners and associates between jurisdictions." },
  { name: "Charities", note: "Non-profits sponsoring overseas staff on modest budgets." },
]

export const torn = [
  {
    title: "Advice that fits your life",
    body: "We start with your situation, not a template. Every plan is shaped around your family, your business and your timing.",
    photo: I("person-amara.jpg"),
    paper: "#c9d6ff",
    card: { title: "Recognised by our clients", rows: ["4.9 out of 5 average rating", "Recommended by 9 in 10"] },
  },
  {
    title: "One partner, start to finish",
    body: "The partner you meet on day one stays with you. No hand-offs, no repeating your story to someone new.",
    photo: I("person-lukas.jpg"),
    paper: "#f3d9a6",
    card: { title: "Your file is handled by", rows: ["A senior partner", "One named contact"] },
  },
  {
    title: "Senior people on the detail",
    body: "Small details matter most. A senior adviser checks every document before anything is sent.",
    photo: I("person-sofia.jpg"),
    paper: "#d8e6d2",
    card: { title: "Before we send", rows: ["Documents reviewed", "Dates confirmed", "Final sign-off"] },
  },
  {
    title: "Problems found early",
    body: "We look for the small things that cause big delays later, and fix them before they cost you time.",
    photo: I("person-ravi.jpg"),
    paper: "#ead8cf",
    card: { title: "Spotted in review", rows: ["Missing reference letter", "Resolved in two days"] },
  },
]


