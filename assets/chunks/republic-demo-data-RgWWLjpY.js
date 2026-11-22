const e=[{path:"src/demos/data.ts",language:"typescript",content:`/**
 * Republic UI demo data
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/
 * https://github.com/rm-sjent/republic-ui
 */
export const IMG = (n: string) => \`\${import.meta.env.BASE_URL}img/\${n}\`

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
    stat: { value: 12, suffix: "\\u00a0hrs", label: "saved every week" },
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
`}],t="",a={files:e,prompt:t};export{a as default,e as files,t as prompt};
