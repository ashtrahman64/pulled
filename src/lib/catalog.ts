import type { FragranceFile } from "./types";
import { normalizeQuery } from "./utils";

export const CATALOG: FragranceFile[] = [
  {
    slug: "lattafa-asad",
    name: "Asad",
    brand: "Lattafa",
    aliases: ["asad", "lattafa asad", "asad elixir"],
    inspiredBy: "Dior Sauvage Elixir",
    concentration: "Eau de Parfum",
    priceBand: "$20–35",
    family: "spicy",
    juice: "#6b3d1c",
    bottle: "column",
    seasons: ["fall", "winter"],
    occasions: ["date", "night", "daily"],
    kidSimpleSmell:
      "Imagine a leather jacket hanging next to a bowl of pineapple. Someone just made dark coffee, then shook black pepper on a wooden table. It is warm like a campfire at night, not like soap or flowers. After a while it turns into vanilla cookies sitting on that same wooden table.",
    firstSniff:
      "A loud blast of black pepper, a juicy pineapple snap, and a little tobacco. It feels dark and spicy, not fresh like a shower gel.",
    middle:
      "Coffee, dry woods, and a powdery iris sit in the middle. It gets smoother and a bit sweeter, like warm cologne instead of a spice rack.",
    leftover:
      "Amber, vanilla, and patchouli hug the skin for hours. The pineapple is gone. What stays is a cozy, slightly sweet wood-and-vanilla warmth.",
    scores: { pull: 8.2, compliments: 8.4, longevity: 9.2, projection: 9.0, blindBuy: 7.2 },
    longevityHours: "10–12 hours",
    projectionLabel: "Beast",
    crowdTake:
      "One of the most-worn Lattafas on men. Reddit and X treat it as the cheap Sauvage Elixir: loud, spicy-sweet, and hard to ignore. Women who like warm spicy colognes tend to lean in. People who hate Sauvage will hate this too.",
    blindBuyVerdict:
      "Pretty safe if you already like Sauvage or other spicy-sweet night scents. Skip if you only want fresh, soapy, or quiet smells.",
    sprayAdvice: "Two sprays. Three if it is cold. This one yells.",
    warnings: [
      "Too heavy for hot weather.",
      "Fresh bottles can smell sharper until they sit for a few weeks.",
    ],
    similar: ["rayhaan-elixir", "lattafa-the-kingdom", "lattafa-asad-bourbon"],
    sources: "Fragrantica notes, r/fragranceclones wear reports, public X chatter 2025–2026.",
  },
  {
    slug: "lattafa-khamrah",
    name: "Khamrah",
    brand: "Lattafa",
    aliases: ["khamrah", "khamra", "lattafa khamrah"],
    inspiredBy: "Kilian Angels' Share",
    concentration: "Eau de Parfum",
    priceBand: "$25–45",
    family: "gourmand",
    juice: "#b07a2a",
    bottle: "flacon",
    seasons: ["fall", "winter"],
    occasions: ["date", "night"],
    kidSimpleSmell:
      "Someone baked cinnamon rolls, poured a little rum on them, then added sticky dates and vanilla ice cream. The whole kitchen is warm. It smells like holiday dessert, not like grass or the ocean. If a hug had a smell, this would be it.",
    firstSniff:
      "Cinnamon, nutmeg, and sweet dates jump out first, with a little citrus sparkle that fades fast.",
    middle:
      "Praline, vanilla, and a creamy floral note make it smell like dessert in a bottle. Boozy, not booze-on-your-breath.",
    leftover:
      "Amber, tonka, and myrrh leave a thick, sweet wood-and-vanilla trail that clings to clothes overnight.",
    scores: { pull: 9.1, compliments: 9.0, longevity: 9.1, projection: 8.8, blindBuy: 7.0 },
    longevityHours: "10–12 hours on skin, longer on clothes",
    projectionLabel: "Beast",
    crowdTake:
      "The most-cited Lattafa on Reddit, full stop. r/fragranceclones put it in S-tier. Women often like this on a man because it reads as cozy and edible, not cologne-bro. The knock is simple: it is very sweet. If you do not like dessert, you will not like Khamrah.",
    blindBuyVerdict:
      "Safe if you love sweet, spicy, bakery smells. Risky if you only wear fresh or woody colognes.",
    sprayAdvice: "Two sprays on a cold night. Do not bathe in it — people will taste it from across the room.",
    warnings: [
      "Can feel sticky and loud in heat.",
      "Leans unisex. Some men find it too sweet.",
    ],
    similar: ["lattafa-khamrah-qahwa", "french-avenue-liquid-brun", "lattafa-eclaire"],
    sources: "Fragrantica pyramid, Reddit clone tier list (2025), winter wear reports.",
  },
  {
    slug: "lattafa-khamrah-qahwa",
    name: "Khamrah Qahwa",
    brand: "Lattafa",
    aliases: ["qahwa", "khamrah qahwa", "khamrah coffee"],
    inspiredBy: "Khamrah with coffee / cardamom",
    concentration: "Eau de Parfum",
    priceBand: "$25–45",
    family: "gourmand",
    juice: "#4a2c18",
    bottle: "flacon",
    seasons: ["fall", "winter"],
    occasions: ["date", "night", "daily"],
    kidSimpleSmell:
      "Same cinnamon-roll kitchen as Khamrah, but now someone also brewed coffee and dropped a green cardamom pod in the cup. The dessert is still there. It just smells a little more like a grown-up breakfast.",
    firstSniff:
      "Coffee, cardamom, and cinnamon. Less candy than regular Khamrah in the first minute.",
    middle:
      "Dates, vanilla, and praline come back. The coffee note is more 'coffee shop' than espresso shot — some people barely get coffee at all.",
    leftover:
      "Sweet amber-vanilla with a roasted edge. Clothes keep it into the next day.",
    scores: { pull: 9.0, compliments: 8.9, longevity: 9.0, projection: 9.0, blindBuy: 7.4 },
    longevityHours: "8–12 hours",
    projectionLabel: "Beast",
    crowdTake:
      "Repeatedly called a girlfriend favorite in Reddit decant threads. A bit more masculine than original Khamrah because of the coffee-spice, so some men prefer it. Still a dessert bomb. Performance is nuclear after it sits in the bottle.",
    blindBuyVerdict:
      "Slightly safer than original Khamrah for men. Still a no if you dislike sweet scents.",
    sprayAdvice: "Two sprays. Let the bottle rest a few weeks if it smells thin at first.",
    warnings: ["Very sweet in warm rooms.", "Coffee note is not guaranteed on every skin."],
    similar: ["lattafa-khamrah", "lattafa-honor-and-glory", "lattafa-asad-bourbon"],
    sources: "Reddit girlfriend tests, Fragrantica, Qahwa vs original comparison threads.",
  },
  {
    slug: "afnan-9pm",
    name: "9pm",
    brand: "Afnan",
    aliases: ["9pm", "9 pm", "afnan 9pm", "nine pm"],
    inspiredBy: "Jean Paul Gaultier Ultra Male",
    concentration: "Eau de Parfum",
    priceBand: "$25–40",
    family: "sweet",
    juice: "#2a1a4a",
    bottle: "taper",
    seasons: ["fall", "winter", "spring"],
    occasions: ["date", "night"],
    kidSimpleSmell:
      "A shiny red apple sitting next to vanilla ice cream, with a little cinnamon sprinkled on top. It is sweet like candy, but also a bit like clean laundry. Imagine a night-time carnival apple, not a green apple from a tree.",
    firstSniff:
      "Juicy apple, a hint of cinnamon, and a soapy-lavender freshness. Loud and young.",
    middle:
      "Sweet florals melt into vanilla. It becomes a creamy fruit-and-sugar cloud.",
    leftover:
      "Vanilla, amber, and musk. The apple fades. What stays is a sweet, clean warmth that people notice when you hug them.",
    scores: { pull: 9.0, compliments: 9.2, longevity: 8.3, projection: 8.4, blindBuy: 8.1 },
    longevityHours: "8–10 hours",
    projectionLabel: "Strong",
    crowdTake:
      "A staple 'compliment king' on clone forums and YouTube. Youthful, sweet, night-out DNA. Women mention it often because it smells playful, not serious. Some fragrance snobs call it basic. Basic still gets stopped at the bar.",
    blindBuyVerdict:
      "One of the safer blind buys in the cheap-cologne world if you like sweet. Not for people who want leather, smoke, or office-quiet.",
    sprayAdvice: "Three sprays for a night out. Keep it off your clothes if you hate smelling it the next morning.",
    warnings: ["Too sweet and loud for most offices.", "Less great in high heat."],
    similar: ["rayhaan-lion", "lattafa-the-kingdom", "afnan-9am-dive"],
    sources: "Fragrantica, r/fragranceclones A-tier, night-out comparison reviews.",
  },
  {
    slug: "armaf-cdnim",
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    aliases: ["cdnim", "club de nuit", "cdnim edt", "cdnim parfum", "armaf cdnim"],
    inspiredBy: "Creed Aventus",
    concentration: "EDT / Parfum",
    priceBand: "$25–45",
    family: "woody",
    juice: "#cfc6a8",
    bottle: "slab",
    seasons: ["spring", "summer", "fall"],
    occasions: ["daily", "office", "night"],
    kidSimpleSmell:
      "A lemon and a pineapple were cut open on a picnic table, then someone started a little smoky campfire next to them. It smells like fruit and smoke together, which is weird until it is not. After a while the fruit calms down and it smells like clean wood and a black crayon.",
    firstSniff:
      "Sharp lemon-pineapple with a smoky, almost burnt birch note. New bottles can smell like a tire shop for twenty minutes. That is the famous harsh opening.",
    middle:
      "The smoke settles. Birch, musk, and a watery fruit note remain. This is the part people compliment.",
    leftover:
      "Dry woods, musk, and a ghost of pineapple. Clean, slightly smoky, very 'expensive man' once it behaves.",
    scores: { pull: 8.0, compliments: 9.1, longevity: 8.4, projection: 8.8, blindBuy: 5.2 },
    longevityHours: "8–12 hours (Parfum lasts longer)",
    projectionLabel: "Beast",
    crowdTake:
      "The king of clone-forum points. r/fragranceclones S-tier by volume. Massive compliment reports once the opening dies. Also the most complained-about opening in the category. Buy the Parfum or Limited Edition if you can. Let EDT macerate for weeks.",
    blindBuyVerdict:
      "Not a great blind buy. The first blast turns people off. If you have smelled Aventus and liked it, go. Otherwise sample.",
    sprayAdvice: "Spray, then wait 30 minutes before leaving the house if the bottle is young.",
    warnings: [
      "Harsh opening, especially on fresh EDT batches.",
      "EDT, EDP, and Parfum are not the same juice.",
    ],
    similar: ["afnan-supremacy-noi", "lattafa-asad", "afnan-turathi-blue"],
    sources: "Fragrantica, clone tier list 2025, years of batch-variation threads.",
  },
  {
    slug: "rasasi-hawas",
    name: "Hawas",
    brand: "Rasasi",
    aliases: ["hawas", "hawas for him", "rasasi hawas"],
    inspiredBy: "Paco Rabanne Invictus Aqua",
    concentration: "Eau de Parfum",
    priceBand: "$30–50",
    family: "aquatic",
    juice: "#3aa0c8",
    bottle: "column",
    seasons: ["spring", "summer"],
    occasions: ["daily", "gym", "date"],
    kidSimpleSmell:
      "A cold glass of fruit punch next to the ocean. There is apple, a little plum, and clean soapy bubbles. It smells like you just took a shower and then walked past a fruit stand. Bright, splashy, and happy — not dark, not spicy.",
    firstSniff:
      "Bergamot, apple, and a watery marine note. Fresh and loud in a friendly way.",
    middle:
      "Orange blossom and a sweet fruity musk. It stays clean, not dirty-ocean.",
    leftover:
      "Ambergris, musk, and a light vanilla. The fruit fades to a clean-skin sweetness that hugs you.",
    scores: { pull: 9.2, compliments: 9.3, longevity: 7.2, projection: 8.2, blindBuy: 8.8 },
    longevityHours: "6–8 hours (stronger in heat than you expect)",
    projectionLabel: "Strong",
    crowdTake:
      "The summer compliment magnet of the cheap-cologne world. Girlfriend-approved in thread after thread because it smells clean and fruity, not like 'old man cologne.' Not the longest-lasting bottle here, but while it is on, people notice.",
    blindBuyVerdict:
      "One of the safest blind buys for men who want mass appeal. Only skip if you hate sweet-fresh scents.",
    sprayAdvice: "Four to five sprays for a hot day. This one can take more than the winter beasts.",
    warnings: ["Not a 12-hour monster on most skin.", "Too beachy for a black-tie dinner."],
    similar: ["rasasi-hawas-ice", "afnan-9am-dive", "rayhaan-pacific"],
    sources: "Fragrantica, Reddit compliment threads, summer clone roundups.",
  },
  {
    slug: "rasasi-hawas-ice",
    name: "Hawas Ice",
    brand: "Rasasi",
    aliases: ["hawas ice", "ice hawas"],
    inspiredBy: "Invictus Victory Elixir (fresh-sweet)",
    concentration: "Eau de Parfum",
    priceBand: "$35–55",
    family: "fresh",
    juice: "#7ec8d4",
    bottle: "column",
    seasons: ["spring", "summer"],
    occasions: ["daily", "date", "gym"],
    kidSimpleSmell:
      "Cold vanilla ice cream dropped into fruit soda, then someone added a minty breeze. It is sweeter than regular Hawas, like a freezer-cold dessert instead of ocean fruit punch. Still clean, still happy.",
    firstSniff: "Icy fruit and a creamy vanilla-fresh opening. Brighter and a bit sweeter than Hawas.",
    middle: "Soft florals and a smooth sweet musk. Less marine, more 'cold dessert with soap.'",
    leftover: "Vanilla musk with a clean leftover glow. Not as long as the winter gourmands.",
    scores: { pull: 8.6, compliments: 8.5, longevity: 7.4, projection: 8.0, blindBuy: 8.3 },
    longevityHours: "7–9 hours",
    projectionLabel: "Strong",
    crowdTake:
      "Wearers call it a more compliment-friendly, slightly sweeter Hawas. Good for people who found original Hawas a little sharp. Still a freshie, still a warm-weather tool.",
    blindBuyVerdict:
      "Safe if you like Hawas or Invictus. Slightly sweeter — keep that in mind.",
    sprayAdvice: "Four sprays. Reapply after the gym.",
    warnings: ["Not a cold-weather star.", "If you already own Hawas, smell this first — overlap is real."],
    similar: ["rasasi-hawas", "afnan-9pm", "afnan-9am-dive"],
    sources: "Reddit decant reviews, Fragrantica, 2025–2026 summer lists.",
  },
  {
    slug: "afnan-supremacy-noi",
    name: "Supremacy Not Only Intense",
    brand: "Afnan",
    aliases: ["snoi", "supremacy not only intense", "supremacy noi", "hacivat clone"],
    inspiredBy: "Nishane Hacivat",
    concentration: "Eau de Parfum",
    priceBand: "$30–50",
    family: "woody",
    juice: "#6f8f4e",
    bottle: "slab",
    seasons: ["spring", "summer", "fall"],
    occasions: ["daily", "office", "night"],
    kidSimpleSmell:
      "Pineapple on a forest floor. Not candy pineapple — more like pineapple juice spilled on green moss and tree bark after rain. It smells expensive in a quiet way, like a wooden cabin with fruit on the table.",
    firstSniff: "Pineapple and a bitter green, almost grapefruit-oakmoss bite. Sharper than a sweet clone.",
    middle: "Cedar, moss, and a creamy woodiness. The fruit becomes a glow, not a smoothie.",
    leftover: "Dry woods and musk with a green halo. Clean, slightly sweet, very persistent.",
    scores: { pull: 7.4, compliments: 8.1, longevity: 9.0, projection: 8.3, blindBuy: 6.4 },
    longevityHours: "10–12+ hours",
    projectionLabel: "Strong",
    crowdTake:
      "The 'smoother CDNIM' for people who want Aventus-adjacent fruit-and-woods without the tire-shop opening. Enthusiasts rate the juice quality high. Mass appeal is a step under 9pm or Hawas because it is greener and more niche.",
    blindBuyVerdict:
      "Okay if you like woody-fresh pineapple. Not the safest if you only know sweet designer scents.",
    sprayAdvice: "Three sprays. This lasts all day; you do not need a shower of it.",
    warnings: ["Green/mossy DNA is not for everyone.", "Name is easy to mix up with other Supremacy bottles."],
    similar: ["armaf-cdnim", "afnan-turathi-blue", "lattafa-vintage-radio"],
    sources: "Fragrantica, clone vs Hacivat threads, performance reports.",
  },
  {
    slug: "afnan-turathi-blue",
    name: "Turathi Blue",
    brand: "Afnan",
    aliases: ["turathi", "turathi blue", "tygar clone"],
    inspiredBy: "Bvlgari Tygar",
    concentration: "Eau de Parfum",
    priceBand: "$25–40",
    family: "fresh",
    juice: "#1f6a8a",
    bottle: "taper",
    seasons: ["spring", "summer"],
    occasions: ["daily", "office", "date"],
    kidSimpleSmell:
      "You peeled a giant pink grapefruit and squeezed it over cold stones by the sea. There is a little pepper tickle, like from the dinner table, and a clean wind. It does not smell like candy. It smells like expensive soap and sunshine.",
    firstSniff: "Grapefruit and a sparkly citrus-pepper pop. Bright, dry, not sugary.",
    middle: "Ginger, woods, and a mineral ambergris vibe. Feels 'niche expensive' more than 'mall cologne.'",
    leftover: "Clean woody-amber skin scent. Not a dessert leftover.",
    scores: { pull: 8.1, compliments: 8.0, longevity: 7.3, projection: 7.2, blindBuy: 8.7 },
    longevityHours: "7–9 hours",
    projectionLabel: "Moderate",
    crowdTake:
      "Called a compliment king in 2026 clone roundups for the fresh-citrus lane. Office-safe, date-safe, summer-safe. Not beast mode, which is the point. People who are tired of sweet bombs like this.",
    blindBuyVerdict:
      "Very safe for a daily fresh bottle. Hard to offend anyone with grapefruit-wood.",
    sprayAdvice: "Four sprays. A refresher after lunch is fair game.",
    warnings: ["Will not fill a club.", "If you want vanilla-sweet, this is the wrong aisle."],
    similar: ["maison-alhambra-jean-lowe-immortal", "rasasi-hawas", "afnan-9am-dive"],
    sources: "Fragrantica, 2026 compliment-king lists, Tygar clone comparisons.",
  },
  {
    slug: "lattafa-vintage-radio",
    name: "Vintage Radio",
    brand: "Lattafa",
    aliases: ["vintage radio", "lattafa pride vintage radio", "paragon clone"],
    inspiredBy: "Initio Paragon",
    concentration: "Eau de Parfum",
    priceBand: "$30–50",
    family: "woody",
    juice: "#8a6a3b",
    bottle: "flacon",
    seasons: ["fall", "winter", "spring"],
    occasions: ["date", "daily", "night"],
    kidSimpleSmell:
      "Warm vanilla and cinnamon on a wooden radio that has been in the attic. There is a little lavender, like clean sheets, mixed with spicy cookie crumbs. It smells old in a good way — like a cozy room, not like a candy shop and not like a gym.",
    firstSniff: "Lavender, spice, and a boozy-vanilla hint. More grown than 9pm.",
    middle: "Cinnamon-wood and a smooth, almost incense vanilla. Unique for a $40 bottle.",
    leftover: "Woody vanilla that stays classy, not cupcake. All-day presence after maceration.",
    scores: { pull: 7.3, compliments: 7.5, longevity: 9.2, projection: 8.2, blindBuy: 6.2 },
    longevityHours: "10–12 hours",
    projectionLabel: "Strong",
    crowdTake:
      "S-tier on the big Reddit clone analysis for how often people rave, not just how loud it is. Enthusiasts call it one of Lattafa's best juices. Mass appeal is a notch below the dessert bombs because it is weirder and more 'niche.'",
    blindBuyVerdict:
      "Medium. Beautiful if you like spicy vanilla woods. Confusing if you wanted fresh apple.",
    sprayAdvice: "Two or three sprays. Let a new bottle sit — performance jumps after rest.",
    warnings: ["Not a crowd-pleaser in the Hawas/9pm sense.", "Unique DNA — sample if you can."],
    similar: ["french-avenue-liquid-brun", "lattafa-liam-grey", "afnan-supremacy-noi"],
    sources: "Reddit clone S-tier 2025, Fragrantica, Paragon comparison reviews.",
  },
  {
    slug: "french-avenue-liquid-brun",
    name: "Liquid Brun",
    brand: "French Avenue",
    aliases: ["liquid brun", "liquid brown", "althair clone"],
    inspiredBy: "Parfums de Marly Althair",
    concentration: "Eau de Parfum",
    priceBand: "$30–50",
    family: "gourmand",
    juice: "#7a4a22",
    bottle: "column",
    seasons: ["fall", "winter"],
    occasions: ["date", "night", "daily"],
    kidSimpleSmell:
      "Vanilla pudding mixed with cinnamon toast, then a little orange-blossom flower honey stirred in. It is creamy, not fruity. Imagine a warm sweater that somehow smells like a bakery and a fancy hotel lobby at the same time.",
    firstSniff: "Cinnamon, vanilla, and a bright orange-blossom lift. Smooth from the first second.",
    middle: "Praline, tonka, and creamy wood. Less rum-date than Khamrah, more vanilla-spice luxury.",
    leftover: "Thick vanilla-amber on skin. People walking past still catch it hours later.",
    scores: { pull: 8.9, compliments: 9.0, longevity: 9.0, projection: 8.4, blindBuy: 7.8 },
    longevityHours: "10–12 hours",
    projectionLabel: "Strong",
    crowdTake:
      "The 2025 breakout. Reddit S-tier alongside CDNIM and Khamrah. Wearers and partners both mention the creamy vanilla. One of the few cheap bottles that actually smells expensive instead of just loud.",
    blindBuyVerdict:
      "Safe if you like vanilla. Safer than Khamrah for men who fear 'too dessert.' Still sweet.",
    sprayAdvice: "Two to three sprays. This is a room-filler in a coat.",
    warnings: ["Winter/fall only unless you live in AC.", "Hype is high — still lives up for most people."],
    similar: ["lattafa-khamrah", "lattafa-asad-bourbon", "lattafa-the-kingdom"],
    sources: "r/fragranceclones 2025 S-tier, Althair dupe roundups, winter wear logs.",
  },
  {
    slug: "lattafa-the-kingdom",
    name: "The Kingdom",
    brand: "Lattafa",
    aliases: ["the kingdom", "lattafa kingdom", "le male elixir clone"],
    inspiredBy: "Jean Paul Gaultier Le Male Elixir",
    concentration: "Eau de Parfum",
    priceBand: "$20–35",
    family: "sweet",
    juice: "#5a3a18",
    bottle: "taper",
    seasons: ["fall", "winter"],
    occasions: ["date", "night"],
    kidSimpleSmell:
      "Honey drizzled on vanilla ice cream, with a little mint-lavender from a garden and a pinch of tobacco from a grandpa's jacket. Sweet and warm, like a night-time hug. Not fruit. Not ocean. More like candy and a cozy blanket.",
    firstSniff: "Lavender, mint, and a honeyed sweetness. Familiar if you know Le Male.",
    middle: "Tobacco, vanilla, and tonka. Smooth, sweet, masculine in a baritone way.",
    leftover: "Honey-vanilla on clothes. Soft, not sharp.",
    scores: { pull: 8.4, compliments: 8.5, longevity: 8.8, projection: 8.2, blindBuy: 7.6 },
    longevityHours: "8–11 hours",
    projectionLabel: "Strong",
    crowdTake:
      "Regularly listed in 'Lattafa that got you compliments from women' threads. The Elixir DNA is already a date-night cheat code; this is the cheap ticket. Slightly less refined than Rayhaan Elixir to some noses, still a puller.",
    blindBuyVerdict:
      "Safe if you like sweet honey-vanilla. Skip if lavender-barbershop bothers you.",
    sprayAdvice: "Three sprays for a date. Two for a small room.",
    warnings: ["Sweet. Heat will turn it cloying.", "Close to other Elixir clones — you do not need all of them."],
    similar: ["rayhaan-elixir", "afnan-9pm", "lattafa-asad"],
    sources: "Reddit Lattafa compliment thread, Fragrantica, Elixir dupe comparisons.",
  },
  {
    slug: "lattafa-honor-and-glory",
    name: "Honor & Glory",
    brand: "Lattafa",
    aliases: ["honor and glory", "honor & glory", "badee al oud honor"],
    inspiredBy: "Bond No. 9 New Haarlem",
    concentration: "Eau de Parfum",
    priceBand: "$20–35",
    family: "gourmand",
    juice: "#c4a15a",
    bottle: "flacon",
    seasons: ["fall", "winter"],
    occasions: ["date", "daily"],
    kidSimpleSmell:
      "Pancakes on a Saturday morning. You can smell the vanilla syrup, a little coffee, and warm butter. Then someone zested a pineapple over the plate, which is a strange topping, but it works. It is breakfast in a bottle.",
    firstSniff: "Pineapple and rum-ish sweetness over coffee-vanilla. Loud and unusual.",
    middle: "Coffee, vanilla, cinnamon. The pancake thing is real. Some people only get coffee-vanilla.",
    leftover: "Sweet woody vanilla. The pineapple leaves. Breakfast stays.",
    scores: { pull: 6.6, compliments: 7.2, longevity: 8.3, projection: 8.1, blindBuy: 5.0 },
    longevityHours: "8–10 hours",
    projectionLabel: "Strong",
    crowdTake:
      "Love-it-or-leave-it. When it clicks, people ask what you are wearing because it does not smell like every other clone. When it does not click, it smells like a diner. Not a mass-appeal machine.",
    blindBuyVerdict:
      "Risky. Sample or buy only if the pancake-coffee idea sounds good to you on purpose.",
    sprayAdvice: "Two sprays. This is a statement, not a background track.",
    warnings: ["Polarizing DNA.", "Can read gourmand-food rather than cologne."],
    similar: ["lattafa-khamrah-qahwa", "lattafa-vintage-radio", "lattafa-eclaire"],
    sources: "Fragrantica, Reddit 'most unique Lattafa' threads, New Haarlem comparisons.",
  },
  {
    slug: "lattafa-fakhar-black",
    name: "Fakhar Black",
    brand: "Lattafa",
    aliases: ["fakhar", "fakhar black", "fakhar lattafa"],
    inspiredBy: "Yves Saint Laurent Y EDP",
    concentration: "Eau de Parfum",
    priceBand: "$20–35",
    family: "fresh",
    juice: "#1a1a1c",
    bottle: "column",
    seasons: ["spring", "summer", "fall"],
    occasions: ["daily", "office", "gym"],
    kidSimpleSmell:
      "A green apple and some sage from the garden, plus a clean shirt just out of the wash. It smells like a person who is ready for school or work. Not dessert. Not smoke. Just fresh, a little sweet, a little green.",
    firstSniff: "Apple, bergamot, and ginger. Bright designer-fresh.",
    middle: "Sage, geranium, and a smooth woody-amber. Very Y-like.",
    leftover: "Clean musk and woods. Office-safe leftover.",
    scores: { pull: 7.2, compliments: 6.6, longevity: 7.0, projection: 6.4, blindBuy: 8.4 },
    longevityHours: "6–8 hours",
    projectionLabel: "Moderate",
    crowdTake:
      "A solid daily driver, not a magnet. People who want 'I smell good' without 'what is that' usually land here. Compliment rate is polite, not chaotic. That is useful.",
    blindBuyVerdict:
      "Safe. Hard to hate. Hard to be the most interesting person in the room, too.",
    sprayAdvice: "Four sprays for a full day. Reapply if you need a night shift.",
    warnings: ["Will not compete with Khamrah for attention.", "Performance is good, not legendary."],
    similar: ["afnan-9am-dive", "afnan-turathi-blue", "rasasi-hawas"],
    sources: "Fragrantica, Y EDP clone comparisons, daily-wear lists.",
  },
  {
    slug: "armaf-cdn-untold",
    name: "Club de Nuit Untold",
    brand: "Armaf",
    aliases: ["untold", "cdn untold", "club de nuit untold", "br540 clone"],
    inspiredBy: "Maison Francis Kurkdjian Baccarat Rouge 540",
    concentration: "Eau de Parfum",
    priceBand: "$30–50",
    family: "amber",
    juice: "#d8c4a8",
    bottle: "slab",
    seasons: ["fall", "winter", "spring"],
    occasions: ["date", "night", "daily"],
    kidSimpleSmell:
      "Burnt sugar and a red candy, with a little medicine-cabinet saffron (it smells like a fancy band-aid in a good way, which is a weird sentence). Then wood and sweet air. Some people think it is the most beautiful smell. Some people think it is a Sharpie.",
    firstSniff: "Saffron, jasmine, and that famous BR540 cotton-candy-amber blast.",
    middle: "Amberwood and a mineral-sweet glow. Airy, not thick gourmand.",
    leftover: "Woody-sweet skin that clings forever on clothes.",
    scores: { pull: 7.5, compliments: 7.6, longevity: 8.6, projection: 8.2, blindBuy: 5.1 },
    longevityHours: "8–12 hours, longer on fabric",
    projectionLabel: "Strong",
    crowdTake:
      "Excellent BR540 clone for the money. The DNA itself is famously split: half the internet wants to live in it, half gets a band-aid / Sharpie. If you already like BR540, Untold is an easy yes. If you have never smelled it, do not gamble a full bottle.",
    blindBuyVerdict:
      "Unsafe unless you know you like Baccarat Rouge 540.",
    sprayAdvice: "Two sprays. This one follows you into elevators.",
    warnings: ["Extremely polarizing DNA.", "You will smell it on other people — it is everywhere."],
    similar: ["al-haramain-amber-oud-gold", "lattafa-eclaire", "lattafa-khamrah"],
    sources: "Fragrantica, BR540 clone tests, Armaf performance reputation.",
  },
  {
    slug: "lattafa-eclaire",
    name: "Eclaire",
    brand: "Lattafa",
    aliases: ["eclaire", "eclair", "bianco latte clone"],
    inspiredBy: "Giardini di Toscana Bianco Latte",
    concentration: "Eau de Parfum",
    priceBand: "$25–40",
    family: "gourmand",
    juice: "#e8d8b8",
    bottle: "flacon",
    seasons: ["fall", "winter"],
    occasions: ["date", "daily"],
    kidSimpleSmell:
      "Warm milk, honey, and caramel candy. Like a vanilla latte with extra syrup, or a caramel pudding cup from the fridge. Soft, thick, and sweet. A five-year-old would say it smells like dessert, not like a dad.",
    firstSniff: "Honey, caramel, and a milky vanilla. Instant gourmand.",
    middle: "Tonka, musk, and more caramel. Creamy, not spicy.",
    leftover: "Sweet milky vanilla on clothes. Can be sticky-sweet in a closed car.",
    scores: { pull: 7.4, compliments: 7.5, longevity: 8.4, projection: 7.4, blindBuy: 5.3 },
    longevityHours: "8–10 hours",
    projectionLabel: "Strong",
    crowdTake:
      "Women often wear this; on a man it is a statement. Partners who love gourmands melt. Strangers who expect 'cologne' may be confused. High accuracy to Bianco Latte in clone tests. Unisex in the strongest sense.",
    blindBuyVerdict:
      "Only if you want to smell like caramel milk on purpose. Not a safe first cologne.",
    sprayAdvice: "One or two sprays. This is frosting, not cologne in the old sense.",
    warnings: ["Very sweet and unisex.", "Heat + this = dessert fog."],
    similar: ["lattafa-khamrah", "french-avenue-liquid-brun", "lattafa-honor-and-glory"],
    sources: "Clone accuracy tests 2026, Fragrantica, gourmand dupe lists.",
  },
  {
    slug: "rayhaan-lion",
    name: "Lion",
    brand: "Rayhaan",
    aliases: ["lion", "rayhaan lion", "rahaan lion"],
    inspiredBy: "Jean Paul Gaultier Ultra Male",
    concentration: "Eau de Parfum",
    priceBand: "$25–40",
    family: "sweet",
    juice: "#c45c18",
    bottle: "taper",
    seasons: ["fall", "winter", "spring"],
    occasions: ["date", "night"],
    kidSimpleSmell:
      "A ripe pear and a red apple next to vanilla frosting, with cinnamon and a little minty-lavender toothpaste freshness in the first sniff. Sweet like candy, loud like a lion (yes, really). After a while it is mostly vanilla and warm wood.",
    firstSniff: "Pear, lavender, mint, and a spicy-sweet rush. Bolder than some 9pm batches.",
    middle: "Cinnamon, sage, and creamy fruit. A slightly more mature Ultra Male than Afnan 9pm to many noses.",
    leftover: "Vanilla, amber, patchouli. Beast leftover on clothes.",
    scores: { pull: 8.5, compliments: 8.6, longevity: 9.1, projection: 8.9, blindBuy: 8.0 },
    longevityHours: "9–12 hours, longer on fabric",
    projectionLabel: "Beast",
    crowdTake:
      "Rayhaan's calling card. Fragrantica and Parfumo users talk about 8–14 hour wear and first-wear compliments. Often compared directly to 9pm: some say Lion is smoother and stronger. Same sweet-night DNA, so the pull profile is similar.",
    blindBuyVerdict:
      "Safe if you like 9pm / Ultra Male. You do not need both unless you are collecting.",
    sprayAdvice: "Two sprays. People will know you walked in.",
    warnings: ["Cloying in heat.", "Overlaps hard with Afnan 9pm."],
    similar: ["afnan-9pm", "rayhaan-elixir", "lattafa-the-kingdom"],
    sources: "Fragrantica Rayhaan Lion, Parfumo, Ultra Male dupe comparisons.",
  },
  {
    slug: "rayhaan-elixir",
    name: "Elixir",
    brand: "Rayhaan",
    aliases: ["rayhaan elixir", "elixir rayhaan"],
    inspiredBy: "Jean Paul Gaultier Le Male Elixir",
    concentration: "Eau de Parfum",
    priceBand: "$25–40",
    family: "sweet",
    juice: "#4a2e14",
    bottle: "taper",
    seasons: ["fall", "winter"],
    occasions: ["date", "night"],
    kidSimpleSmell:
      "Honey, vanilla frosting, and a little mint-lavender like a fancy bar of soap. Warm, sweet, and proud. Imagine a teddy bear that smells like dessert and clean clothes. Night-time only, like a campfire made of candy.",
    firstSniff: "Mint, lavender, and honeyed sweetness. Close to Le Male Elixir.",
    middle: "Vanilla, tonka, a soft tobacco-honey. Creamy and masculine.",
    leftover: "Sweet vanilla-honey skin. 8–10 hours is common.",
    scores: { pull: 8.3, compliments: 8.4, longevity: 8.5, projection: 8.3, blindBuy: 8.0 },
    longevityHours: "8–10 hours",
    projectionLabel: "Strong",
    crowdTake:
      "Reviewers call it a date-night cheat with wife/girlfriend approval. Not as honey-tobacco thick as the original Elixir, still the same compliment shape. Easy mass appeal in cold weather.",
    blindBuyVerdict:
      "Safe for sweet-leaning men. Skip in a summer-only wardrobe.",
    sprayAdvice: "Two to four sprays depending on how much room you want to own.",
    warnings: ["Do not stack with The Kingdom and Lion on the same night — pick a lane."],
    similar: ["lattafa-the-kingdom", "rayhaan-lion", "lattafa-asad"],
    sources: "YouTube wear tests, Amazon/partner comments, Elixir dupe writeups.",
  },
  {
    slug: "rayhaan-pacific",
    name: "Pacific",
    brand: "Rayhaan",
    aliases: ["pacific", "rayhaan pacific", "pacific pour homme"],
    inspiredBy: "Fresh aquatic designers (Invictus / Dylan Blue lane)",
    concentration: "Eau de Parfum",
    priceBand: "$25–40",
    family: "aquatic",
    juice: "#2f7f8e",
    bottle: "column",
    seasons: ["spring", "summer"],
    occasions: ["daily", "gym", "office"],
    kidSimpleSmell:
      "The ocean on a sunny day, plus clean soap and a little lemon. It smells like a cold shower after the beach. Light, splashy, and friendly. Nobody would say it smells like cookies.",
    firstSniff: "Citrus and a watery marine breeze. Easy, clean, daytime.",
    middle: "Soft florals and aquatic musk. Stays masculine-fresh.",
    leftover: "Clean musk. Shorter than Rayhaan's sweet bottles.",
    scores: { pull: 7.1, compliments: 6.9, longevity: 6.2, projection: 6.0, blindBuy: 8.5 },
    longevityHours: "6–8 hours (reports vary; some get less)",
    projectionLabel: "Moderate",
    crowdTake:
      "The daytime half of the Rayhaan pair. People like the smell; they argue about how long it lasts. Good 'I just smell clean' bottle. Not a magnet on the level of Hawas.",
    blindBuyVerdict:
      "Safe for a fresh daily. Do not expect beast mode.",
    sprayAdvice: "Five sprays, and do not be shy about a reapply.",
    warnings: ["Longevity is the weak grade.", "Easy to own something better in this lane (Hawas)."],
    similar: ["rasasi-hawas", "afnan-9am-dive", "lattafa-fakhar-black"],
    sources: "Retail reviews, fresh-aquatic comparisons, Rayhaan bundle feedback.",
  },
  {
    slug: "lattafa-asad-bourbon",
    name: "Asad Bourbon",
    brand: "Lattafa",
    aliases: ["asad bourbon", "bourbon asad"],
    inspiredBy: "Bourbon vanilla / Althair-adjacent gourmand",
    concentration: "Eau de Parfum",
    priceBand: "$25–40",
    family: "gourmand",
    juice: "#5c2e12",
    bottle: "column",
    seasons: ["fall", "winter"],
    occasions: ["date", "night"],
    kidSimpleSmell:
      "Vanilla extract spilled on a wooden bar, with a sip of sweet bourbon (it smells brown and warm, not like brushing your teeth with alcohol). Cinnamon and caramel sit next to it. It is a grown-up cookie. Darker than Khamrah, creamier than original Asad.",
    firstSniff: "Bourbon-vanilla, spice, and a toasted-sugar opening.",
    middle: "Creamy woods, tonka, a little tobacco-vanilla. Smooth, not peppery like Asad.",
    leftover: "Sweet vanilla-amber. Cold-weather glue.",
    scores: { pull: 8.3, compliments: 8.2, longevity: 8.8, projection: 8.1, blindBuy: 7.3 },
    longevityHours: "8–11 hours",
    projectionLabel: "Strong",
    crowdTake:
      "Girlfriend comments in decant reviews often land on 'chocolate / vanilla / warm.' Different from original Asad — do not buy it expecting Sauvage Elixir. Closer to the Liquid Brun / dessert-night family.",
    blindBuyVerdict:
      "Safe for vanilla lovers. Wrong buy if you wanted spicy Asad.",
    sprayAdvice: "Two or three sprays on a cold date.",
    warnings: ["Name tricks people into expecting Asad. Smell profile is not the same."],
    similar: ["french-avenue-liquid-brun", "lattafa-khamrah", "lattafa-asad"],
    sources: "Reddit decant girlfriend tests, Lattafa winter releases, gourmand comparisons.",
  },
  {
    slug: "al-haramain-amber-oud-gold",
    name: "Amber Oud Gold Edition",
    brand: "Al Haramain",
    aliases: ["amber oud gold", "al haramain gold", "gold edition"],
    inspiredBy: "Maison Francis Kurkdjian Baccarat Rouge 540",
    concentration: "Eau de Parfum",
    priceBand: "$30–55",
    family: "amber",
    juice: "#d4b46a",
    bottle: "flacon",
    seasons: ["fall", "winter", "spring"],
    occasions: ["date", "night", "daily"],
    kidSimpleSmell:
      "The same burnt-sugar and red-candy smell as Club de Nuit Untold, with a little extra honey. Sweet air, wood, and that strange fancy band-aid saffron. If you have walked through a mall and thought 'what is that sweet smell everyone is wearing,' this is that family.",
    firstSniff: "Saffron, amber, and a sweet-woody flash. Very BR540.",
    middle: "Amberwood, jasmine, a mineral sweetness.",
    leftover: "Sweet woods that live on scarves.",
    scores: { pull: 7.6, compliments: 7.7, longevity: 8.5, projection: 8.0, blindBuy: 5.0 },
    longevityHours: "8–12 hours",
    projectionLabel: "Strong",
    crowdTake:
      "A classic cheap BR540. Some prefer it to Untold, some do not. Same polarizing DNA. High compliment potential among people who already love that smell; instant reject from people who do not.",
    blindBuyVerdict:
      "Do not blind buy unless you know Baccarat Rouge 540.",
    sprayAdvice: "Two sprays. Saffron-sweet projects farther than you think.",
    warnings: ["Polarizing.", "Redundant if you already own Untold."],
    similar: ["armaf-cdn-untold", "lattafa-khamrah", "lattafa-eclaire"],
    sources: "Fragrantica, BR540 clone ladders, long-term wearer notes.",
  },
  {
    slug: "maison-alhambra-jean-lowe-immortal",
    name: "Jean Lowe Immortal",
    brand: "Maison Alhambra",
    aliases: ["jean lowe immortal", "immortal", "l immensite clone", "jean lowe"],
    inspiredBy: "Louis Vuitton L'Immensité",
    concentration: "Eau de Parfum",
    priceBand: "$25–40",
    family: "fresh",
    juice: "#3d7a6a",
    bottle: "slab",
    seasons: ["spring", "summer"],
    occasions: ["daily", "office", "date"],
    kidSimpleSmell:
      "Grapefruit soda with spicy ginger from a cookie, poured over cold glass. Clean, sparkly, and a little bit like a fancy hotel gym. Not sweet like candy. More like squeezed fruit and a fresh shirt.",
    firstSniff: "Grapefruit and ginger. Bright, expensive-fresh.",
    middle: "Ambroxan-style clean woods and a mineral freshness.",
    leftover: "Soft, clean skin musk. Office-perfect.",
    scores: { pull: 7.5, compliments: 7.2, longevity: 7.1, projection: 6.8, blindBuy: 8.2 },
    longevityHours: "7–9 hours",
    projectionLabel: "Moderate",
    crowdTake:
      "Maison Alhambra's best-known freshie. People buy it to smell 'quiet rich' instead of 'club sweet.' Compliments are the 'you smell good' kind, not the 'what is that' kind. Fine by most.",
    blindBuyVerdict:
      "Safe for daily fresh. A good office bottle.",
    sprayAdvice: "Four sprays in the morning.",
    warnings: ["Not a beast.", "If you wanted a party scent, look at 9pm or Hawas."],
    similar: ["afnan-turathi-blue", "lattafa-fakhar-black", "afnan-9am-dive"],
    sources: "LV clone roundups, Maison Alhambra reputation, office-scent threads.",
  },
  {
    slug: "afnan-9am-dive",
    name: "9am Dive",
    brand: "Afnan",
    aliases: ["9am dive", "9 am dive", "nine am dive"],
    inspiredBy: "Fresh aquatic / Dylan Blue lane",
    concentration: "Eau de Parfum",
    priceBand: "$25–40",
    family: "aquatic",
    juice: "#1c6ea0",
    bottle: "taper",
    seasons: ["spring", "summer"],
    occasions: ["daily", "gym", "office"],
    kidSimpleSmell:
      "A swimming pool, a squeezed lemon, and a little grapefruit. It smells like vacation morning — sunscreen-adjacent freshness without the coconut. Light, splashy, daytime.",
    firstSniff: "Citrus, aquatic notes, a cool minty-fresh air.",
    middle: "Clean woods and a soapy musk. Stays sporty.",
    leftover: "Soft aquatic musk. Average leftover.",
    scores: { pull: 7.0, compliments: 6.5, longevity: 6.4, projection: 6.2, blindBuy: 8.3 },
    longevityHours: "6–8 hours",
    projectionLabel: "Moderate",
    crowdTake:
      "The daytime twin to 9pm. Useful, not legendary. Good first freshie. Hawas usually wins the same job on compliments.",
    blindBuyVerdict:
      "Safe. Low drama, low ceiling.",
    sprayAdvice: "Five sprays. Freshies need more than the winter tanks.",
    warnings: ["Easy to skip if you already own Hawas.", "Not a night scent."],
    similar: ["rasasi-hawas", "rayhaan-pacific", "afnan-turathi-blue"],
    sources: "Afnan line reviews, fresh clone lists, daytime roundups.",
  },
  {
    slug: "lattafa-liam-grey",
    name: "Liam Grey",
    brand: "Lattafa",
    aliases: ["liam grey", "liam gray", "tea fig lattafa"],
    inspiredBy: "Tea / fig unisex niche (Grey Vetiver-adjacent vibe, tea-fig DNA)",
    concentration: "Eau de Parfum",
    priceBand: "$25–40",
    family: "woody",
    juice: "#9aa080",
    bottle: "flacon",
    seasons: ["spring", "fall"],
    occasions: ["daily", "office", "date"],
    kidSimpleSmell:
      "Someone made a cup of warm tea with honey, then sat under a fig tree. It smells soft, a little sweet, a little leafy. Like a quiet library with a cookie on the table. Not loud. Not fruity-candy. A calm smell.",
    firstSniff: "Bergamot-tea and a green fig. Gentle, unisex.",
    middle: "Honey, tea, woods. Smooth and 'expensive quiet.'",
    leftover: "Soft musky tea-wood. Close to skin, still pretty.",
    scores: { pull: 7.4, compliments: 7.3, longevity: 8.0, projection: 6.2, blindBuy: 6.3 },
    longevityHours: "8–10 hours (closer to skin after a few hours)",
    projectionLabel: "Intimate",
    crowdTake:
      "Shows up in Lattafa compliment lists, but it is a different kind of compliment — 'you smell expensive' more than 'you smell like a party.' Some girlfriends love it. Club kids will not notice it. A grown, niche-leaning cheap bottle.",
    blindBuyVerdict:
      "Medium. Beautiful if you like tea and fig. Wrong if you wanted a bomb.",
    sprayAdvice: "Four sprays because it sits closer to the skin.",
    warnings: ["Not a projector.", "Unisex — some men want more spice/sweet."],
    similar: ["lattafa-liam-grey", "maison-alhambra-jean-lowe-immortal", "lattafa-fakhar-black"],
    sources: "Reddit Lattafa compliment thread, Fragrantica, tea-fig wearer notes.",
  },
  {
    slug: "lattafa-qaed-al-fursan",
    name: "Qaed Al Fursan",
    brand: "Lattafa",
    aliases: ["qaed al fursan", "qaaed al fursan", "fursan", "lattafa fursan"],
    inspiredBy: "Sweet pineapple original (loose Aventus fruit DNA)",
    concentration: "Eau de Parfum",
    priceBand: "$15–30",
    family: "sweet",
    juice: "#d6b24a",
    bottle: "flacon",
    seasons: ["spring", "summer"],
    occasions: ["daily", "date", "night"],
    kidSimpleSmell:
      "A big juicy pineapple that never leaves. Like fruit punch or pineapple candy, with a little wood underneath so it does not feel like baby shampoo. Sunny, sticky, tropical. At the end it is still pineapple, just warmer, like the fruit sitting on a wooden table.",
    firstSniff:
      "A loud, sweet pineapple blast with a pinch of spice. Not smoky. Not fresh-ocean. Just fruit.",
    middle:
      "Still pineapple, with a little balsam-wood and a soft floral. Linear on purpose.",
    leftover:
      "Sweet pineapple over cedar and amber. Clothes keep it. Skin is more of a maybe.",
    scores: { pull: 8.0, compliments: 8.1, longevity: 6.2, projection: 6.4, blindBuy: 7.8 },
    longevityHours: "5–8 hours (better on clothes)",
    projectionLabel: "Moderate",
    crowdTake:
      "A budget hit if you want pineapple and nothing else. Reddit likes the fun and the price. People who bought it as an Aventus clone are disappointed — it is its own syrupy pineapple, not smoky birch. Performance is the argument: some get a day, some get a couple of hours until the bottle sits.",
    blindBuyVerdict:
      "Safe if you know you like loud sweet pineapple. Skip if you wanted CDNIM/Aventus or a quiet office scent.",
    sprayAdvice: "Four to six sprays. Clothes hold it better than skin.",
    warnings: [
      "Very sweet and one-note.",
      "Skin longevity is batchy. Give a new bottle time.",
    ],
    similar: ["armaf-cdnim", "rasasi-hawas", "afnan-9pm"],
    sources: "Fragrantica, r/fragranceclones, clone blogs, live X/web pass 2026.",
  },
];

export const BRANDS = [...new Set(CATALOG.map((item) => item.brand))].sort();

export function getBySlug(slug: string) {
  return CATALOG.find((item) => item.slug === slug);
}

export function searchCatalog(query: string) {
  const q = normalizeQuery(query);
  if (!q) return [];
  const tokens = q.split(" ").filter((token) => token.length >= 3);

  return CATALOG.map((item) => {
    const hay = normalizeQuery(
      [item.name, item.brand, item.inspiredBy, item.aliases.join(" ")].join(" "),
    );
    const hitCount = tokens.filter((token) => hay.includes(token)).length;
    const exactName = normalizeQuery(`${item.brand} ${item.name}`) === q;
    const aliasHit = item.aliases.some((alias) => normalizeQuery(alias) === q);
    const score = (exactName ? 10 : 0) + (aliasHit ? 8 : 0) + hitCount;
    return { item, score };
  })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((row) => row.item);
}

export function bestMatch(query: string) {
  const hits = searchCatalog(query);
  if (!hits.length) return null;
  const q = normalizeQuery(query);
  const first = hits[0];
  const exact =
    first.aliases.some((alias) => normalizeQuery(alias) === q) ||
    normalizeQuery(`${first.brand} ${first.name}`) === q ||
    normalizeQuery(first.name) === q;
  return { file: first, exact, hits };
}

export function relatedFiles(file: FragranceFile) {
  return file.similar
    .map((slug) => getBySlug(slug))
    .filter((item): item is FragranceFile => Boolean(item));
}
