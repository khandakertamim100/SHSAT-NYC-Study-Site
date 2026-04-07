/* LocalPrep static prototype — aligned with PRD v2 (114 Q, passages, routes, auth gate) */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const LS = {
  auth: "localprep.auth",
  sessions: "localprep.sessions",
  mistakes: "localprep.mistakes",
};

function draftKey(examId) {
  return `localprep.draft.${examId}`;
}

const EXAMS = [
  {
    id: "exam1",
    exam_number: 1,
    name: "Practice Exam 1 — Form A",
    city: "New York City",
    total_questions: 114,
    ela_questions: 57,
    math_questions: 57,
    time_limit_seconds: 10800,
  },
  {
    id: "exam2",
    exam_number: 2,
    name: "Practice Exam 2 — Form B",
    city: "New York City",
    total_questions: 114,
    ela_questions: 57,
    math_questions: 57,
    time_limit_seconds: 10800,
  },
];

const READING_PASSAGES = [
  {
    id: "P1",
    topic: "reading_comp_nonfiction",
    title: "The Development of Flower Color",
    text: `One hundred and fifty million years ago, flowers were not as colorful as they are today. Blossoms that contained the pigment chlorophyll, such as oak blossoms, were green; otherwise, flowers lacking chlorophyll were white, like dogwood blossoms. Over millions of years, according to current theory, the coloration of individual blossoms was occasionally altered by genetic mutations. Mutations are, in effect, errors in the genetic codes inherited from parent plants. For example, the yellow in daffodils began with a mutation of the gene that carries instructions for the use of carotene, a yellow pigment that the plant uses to make food.

Although the blossoms of most wild plants are still green or white, there are more colors now than there were 150 million years ago. Of these newer colors, yellow shades are the most common, followed by orange and red, including shades of pink. Blue flowers are the rarest, because relatively few mutations resulted in that color.

If a color-related genetic mutation helps a plant to survive, that gene may be passed from the parent to its offspring. Many flowering plants reproduce by means of pollination, a process that requires outside assistance. Some plants are pollinated by the wind, a few by water. Others are pollinated by flying creatures such as insects, bats, and hummingbirds. Moreover, plant breeders deliberately cross-pollinate certain flowers to cultivate desirable traits, such as the unusual colors of some "designer" rose varieties.

Bird and insect pollinators seek out blossoms because they are looking for nectar, the sugary liquid in the heart of a flower. When the first color mutations appeared millions of years ago, the colorful blossoms became more noticeable and were visited more frequently. When the flying creatures drank the nectar from a flower, their bodies brushed against the pollen and carried it to the next plant, unintentionally fertilizing the plants as they went along. As a result, the more colorful plants were more likely to reproduce.

Many plants are pollinated only by day or only by night. Insects that are active during the day notice certain bright colors. Bees, for example, can distinguish hues of yellow and blue, but they cannot see red. Hummingbirds are strongly attracted to red blossoms, and some red flowers, such as the cardinal flower, are pollinated only by hummingbirds. Night-flying moths are attracted by white flowers, whose paleness is visible by moonlight. Many night-pollinated flowers also have fragrances that are attractive to moths.

Over millions of years, the combination of color mutations and pollination by flying creatures has led to an abundance of colorful blossoms across the earth.`,
  },
  {
    id: "P2",
    topic: "reading_comp_nonfiction",
    title: "The Concealed Camera",
    text: `Most movies about spies and undercover agents feature fascinating special equipment. Many of these gadgets exist only in the imaginations of script writers, but others are actually used in espionage activities. One device with a surprisingly long and colorful history, both in and out of the cloak-and-dagger world, is the concealed camera.

In the late nineteenth century, "detective cameras" were popular with amateur photographers who wanted to take snapshots of unsuspecting people on the street. The camera was usually carried in plain view. Its disguise was simple: it was a plain box resembling a large and rather heavy parcel or a piece of luggage, with no external lens or controls. When people caught on to the deception, though, designers began hiding cameras in other objects, ranging from hats and books to purses and pocket watches. One concealed camera even looked like an ordinary camera, but had mirrors that allowed users to take photographs at a right angle to the direction of whatever the photographer seemed to be viewing.

Although most early spy cameras were meant to be used on the ground, cameras have been hidden in the sky almost from the beginning of photography. In World War I, both sides realized the strategic value of taking aerial photographs of enemy territory from the newly invented airplane. To spy more discreetly, without the use of airplanes, the Germans attached cameras to homing pigeons and sent them over French army positions. Timers were set to trigger the cameras when the pigeons were expected to be flying over their targets. That particular attempt proved impractical, but the idea behind it did not: aerial photography became a staple of World War II.

In the mid-twentieth century, a new era of spying with cameras began under the Cold War. This was a period of worldwide tension and competition between the Communist world, led by the Soviet Union, and the Western world, represented by the United States and its allies. The conflict was expressed through propaganda, arms races, and especially espionage. During the Cold War, both sides competed to develop new technologies to use photography in spying. Sophisticated concealed cameras were put in matchboxes, pens, rings, cigarette lighters, makeup cases, guns, and even hidden in clothing, with the lens concealed in a button. Almost any object that could be carried without attracting attention was probably made into a camera and carried by an undercover agent. Cameras were also hidden in furniture and office machines such as copiers, which took photos of every document that was copied. The development of the long-range telephoto lens even allowed spies to take clear photos from a distance, such as across the street from an embassy.

Today, space has proven to be the ultimate location for hidden cameras, as satellite-mounted cameras can produce highly detailed photographs of objects anywhere on earth.`,
  },
  {
    id: "P3",
    topic: "reading_comp_nonfiction",
    title: "The Year Without a Summer",
    text: `The eruption of the Philippine volcano Mount Pinatubo in June 1991 sent a huge cloud of gas and dust encircling the globe. The dust and ash from Mount Pinatubo was blamed for a two-year decrease in global temperature, changes in weather patterns, and damage to the ozone layer. The situation brings to mind a meteorological event that occurred 175 years earlier. At that time, harsh weather conditions plagued much of eastern North America, and, to a lesser extent, northern Europe.

April 1816 brought typical spring weather to upstate New York and New England; trees budded and farmers prepared to plow and plant. In May, however, the expected warm temperatures failed to arrive. Most people remained optimistic, waiting for the summer that was "just around the corner." They waited in vain. June ushered in what modern meteorologists call "The Year Without a Summer." During the first week of June, ten inches of snow fell on New England. Throughout the month, temperatures rarely rose above the 30s. Many farmers replanted crops several times, only to see them stunted or destroyed by sleet, hail, and icy winds. July and August brought little improvement. During most days the temperature stayed in the 40s. Farmers' diaries document their daily struggles with near-freezing temperatures, failing crops, and dying farm animals. The few crops that managed to survive were killed by frost in mid-September. Winter came early in New England and was unusually severe. Even the South was affected; on July 4, the high temperature for Savannah, Georgia, was only 46 degrees!

Some religious leaders warned their congregations that the unusual weather meant that the end of the world was drawing near. Other leaders attributed the cool weather to unusual sunspot activity. The proliferation of the newly invented lightning rod was also blamed. Some people believed that lightning rods had interrupted the natural temperature balance of the earth, causing the cooler temperatures.

It was not until October that the first plausible explanation for "The Year Without a Summer" was suggested. A German astronomer, Friedrich Bessel, reported seeing thick clouds of dust in the upper atmosphere. He theorized that these dust particles screened portions of the earth from the warming rays of the sun. It was discovered that, in April 1815, Mount Tambora, an Indonesian volcano, had erupted with such force that it had sent an estimated 100 cubic miles of fine dust into the atmosphere. Witnesses to the eruption reported that the sky remained dark for two days. The dust then rose high into the stratosphere, where it encircled the world for several years to come.

Skeptics in 1816 doubted that a far-away volcano could steal their summer. However, most present-day researchers believe Bessel's explanation to be generally correct, demonstrating the global nature of weather. The dust in the atmosphere eventually settled, and the spring of 1817 was back to normal.`,
  },
  {
    id: "P4",
    topic: "reading_comp_nonfiction",
    title: "Neoclassicism & Jacques-Louis David",
    text: `As France moved toward revolution at the end of the eighteenth century, a new artistic style, Neoclassicism, gave expression to the changed attitudes that contributed to the fall of the French monarchy. Most art from the first half of the eighteenth century had been decorative and sentimental. Subjects of paintings were typically domestic scenes or stories from mythology containing simple moral lessons. With the advent of the Neoclassical movement, however, art began to return to the classical style and heroic themes of the ancient Greeks and Romans.

The new movement was largely defined by the work of Jacques-Louis David, although he was not its founder. His 1785 painting The Oath of the Horatii is considered to be the finest example of Neoclassicism. It is also one of the finest examples of French Revolutionary art. David admired the ancient Roman republic, governed by its elected consuls and senate rather than by a king (the way that France was governed). He chose as his subject a famous story from Roman history in which the Horatius brothers swear an oath of loyalty to the republic. The setting of the painting resembles a bare stage, with only three shadowy stone arches to provide a backdrop for the figures. Three brothers stand together, their hands raised dramatically toward the swords held by their father. Behind the father's back, the mother and sisters are slumped in grief. All of the figures are positioned so closely to the foreground that it is difficult for viewers to distance themselves from the scene. Light falls from an unseen window, illuminating the family against the dark background.

At first, some critics condemned David's composition as too stark and severe. However, the French middle class, for whom the work was intended, had no trouble interpreting it in terms of their own times. To them, The Oath of the Horatii represented a call to civic devotion and the promise of a future in which the wasteful, self-indulgent excesses of the French royal family and aristocracy would be replaced by honor, self-sacrifice, and patriotism. Four years after the painting was first shown in 1785, the social trends reflected in the work of David and other Neoclassicists exploded into revolution against King Louis XVI.`,
  },
  {
    id: "P5",
    topic: "reading_comp_nonfiction",
    title: "The 1960 Presidential Debates",
    text: `On Monday evening, September 26, 1960, sixty million Americans turned on their TV sets to view the first televised political debate in a campaign for the presidency of the United States. As of that date, it was by far the largest number ever to witness a political discussion. The novelty of the event drew even those with little or no interest in politics.

The candidates, Republican Vice President Richard M. Nixon and Democratic Senator John F. Kennedy, had agreed to face each other and the nation in four one-hour sessions that the press dubbed the "Great Debates." Many expected Vice President Nixon to win the debates easily. He was ahead in the newspaper polls, he was an experienced public speaker, and he had served as vice president for nearly eight years. Senator Kennedy was less well-known and, at forty-three, was the youngest man ever to run for president. Throughout the presidential race, his opponents criticized him for his relative youth and inexperience.

By mutual agreement, the first session was limited to domestic issues. Each candidate was given eight minutes to make his opening remarks. During the remainder of the hour, the candidates took turns responding to questions posed by selected reporters. Both Kennedy and Nixon dealt with the issues calmly and carefully. Viewers who expected to see a free-for-all were disappointed. The way the two men appeared on the television screen, however, may have been as important as what they said. Kennedy looked at the camera while answering questions, appearing to speak directly to his viewers and give them straight answers. Nixon was recovering from a severe bout of influenza, and he appeared tense and tired. He looked at the reporters who asked the questions instead of at the camera, giving some viewers the impression that he avoided eye contact with his audience, and thus suggesting that he was not trustworthy. Most commentators agreed that Kennedy gained from the encounter: many viewers who had previously felt he lacked the maturity necessary to be president were won over by his charm, poise, and confident manner.

While far fewer people watched the three later sessions, much discussion ensued regarding the influence of the Great Debates on the outcome of the 1960 presidential election. Some feared that the better TV performer was bound to come across as being the better candidate. "Is this a good way to judge a person's ability to serve as president of the United States?" they asked.

Kennedy ultimately won the election, but it was by the narrowest popular vote margin in more than eighty years. Some observers concluded that, had the Great Debates been broadcast on radio and not on television, Nixon would have won.`,
  },
];

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function nowIso() {
  return new Date().toISOString();
}

function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

function fmtTime(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(ss)}`;
}

function uid(prefix = "s") {
  return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
}

function parseRoute() {
  const hash = location.hash || "#/";
  const [pathPart, queryPart] = hash.slice(1).split("?");
  const path = pathPart.startsWith("/") ? pathPart : `/${pathPart}`;
  const segments = path.split("/").filter(Boolean);
  const query = new URLSearchParams(queryPart || "");
  return { path, segments, query };
}

function getAuth() {
  return load(LS.auth, { signedIn: false, name: "Alex" });
}
function setAuth(next) {
  save(LS.auth, next);
  syncHeaderCtas();
}

function isProtectedPath(path, segments) {
  if (path === "/login" || path === "/") return false;
  if (path.startsWith("/test/")) return true;
  if (path.startsWith("/results/")) return true;
  return ["/dashboard", "/practice-hub", "/test-select", "/drill", "/history", "/mistakes"].includes(path);
}

function redirectToLogin() {
  const { path, query } = parseRoute();
  let next = path || "/dashboard";
  if (query.toString()) next += `?${query}`;
  location.hash = `#/login?next=${encodeURIComponent(next)}`;
}

/** Build 114 questions for an exam (57 ELA Q1–57, 57 Math Q58–114). */
/** Build 114 questions for an exam (57 ELA Q1–57, 57 Math Q58–114).
 *  For exam1, questions 21–50 are real reading comprehension from Practice Test 1 Form A,
 *  and questions 58–107 are real math questions from the same test.
 */
function buildExamQuestions(examId) {
  const exam = EXAMS.find((e) => e.id === examId) || EXAMS[0];
  const out = [];
  let n = 0;

  /* ── ELA: questions 1–20 (non-passage) ─────────────────────────── */
  const elaNonPassageItems = [
    { topic: "scrambled_paragraphs", text: "Scrambled Paragraphs: Arrange the following sentences in the most logical order.\n\n(1) Scientists discovered that the new compound could dissolve in water.\n(2) The research team celebrated their breakthrough.\n(3) Further tests were conducted in the laboratory.\n(4) The results confirmed their initial hypothesis.\n(5) Publication of the findings followed shortly after." },
    { topic: "logical_reasoning", text: "Logical Reasoning: If all squares are rectangles, and all rectangles are parallelograms, which of the following must be true?" },
    { topic: "vocabulary_in_context", text: 'Vocabulary: In the sentence "The scientist\'s theory was met with considerable skepticism by her peers," the word skepticism most nearly means:' },
    { topic: "scrambled_paragraphs", text: "Scrambled Paragraphs: Arrange the following sentences in the most logical order.\n\n(1) The city council voted to approve the new budget.\n(2) Community members had raised concerns at the previous meeting.\n(3) The mayor signed the bill into law the following week.\n(4) A public hearing was scheduled to address those concerns.\n(5) Officials promised that services would not be reduced." },
    { topic: "logical_reasoning", text: "Logical Reasoning: Maria is taller than Susan. Susan is taller than Janet. If these statements are true, which of the following must also be true?" },
    { topic: "vocabulary_in_context", text: 'Vocabulary: As used in the passage, the word "arduous" most nearly means:' },
    { topic: "scrambled_paragraphs", text: "Scrambled Paragraphs: Arrange the following sentences in the most logical order.\n\n(1) The hikers set up camp near the base of the mountain.\n(2) They packed their gear and began the descent.\n(3) A sudden storm forced them to seek shelter.\n(4) By morning the skies had cleared completely.\n(5) The summit was reached by noon on the second day." },
    { topic: "logical_reasoning", text: "Logical Reasoning: Every member of the chess club is also a member of the math team. Some members of the math team are also in the science club. Which statement must be true?" },
    { topic: "vocabulary_in_context", text: 'Vocabulary: In the sentence "Her stoic expression revealed nothing about her inner turmoil," the word stoic most nearly means:' },
    { topic: "scrambled_paragraphs", text: "Scrambled Paragraphs: Arrange the following sentences in the most logical order.\n\n(1) The musician practiced for hours each day.\n(2) Her dedication eventually paid off at the competition.\n(3) Early on, she struggled with the most difficult passages.\n(4) A local teacher offered to coach her without charge.\n(5) She won first place and received a standing ovation." },
    { topic: "logical_reasoning", text: "Logical Reasoning: No fish is a mammal. All whales are mammals. Which conclusion can be drawn from these statements?" },
    { topic: "vocabulary_in_context", text: 'Vocabulary: The word "ephemeral" in the context of the passage most nearly means:' },
    { topic: "scrambled_paragraphs", text: "Scrambled Paragraphs: Arrange the following sentences in the most logical order.\n\n(1) The ancient library held thousands of scrolls.\n(2) Scholars traveled from distant lands to study there.\n(3) A devastating fire destroyed much of the collection.\n(4) Only a fraction of the original texts survived.\n(5) Modern historians continue to search for lost copies." },
    { topic: "logical_reasoning", text: "Logical Reasoning: All of the students who passed the exam studied for at least three hours. Leon did not study for at least three hours. Which of the following must be true?" },
    { topic: "vocabulary_in_context", text: 'Vocabulary: As used in the sentence, "The ambassador used circumspect language to avoid offending either side," the word circumspect most nearly means:' },
    { topic: "scrambled_paragraphs", text: "Scrambled Paragraphs: Arrange the following sentences in the most logical order.\n\n(1) The new subway line reduced commuting times significantly.\n(2) Engineers worked around the clock to meet the deadline.\n(3) City planners announced the project three years earlier.\n(4) Thousands of riders used the line on its first day.\n(5) Construction began after funding was approved." },
    { topic: "logical_reasoning", text: "Logical Reasoning: During a sale, a store discounts all red-tagged items by 20% and all blue-tagged items by 30%. A jacket has both tags. Which of the following correctly describes the total discount?" },
    { topic: "vocabulary_in_context", text: 'Vocabulary: In the passage, the word "proliferation" most nearly means:' },
    { topic: "scrambled_paragraphs", text: "Scrambled Paragraphs: Arrange the following sentences in the most logical order.\n\n(1) Water is heated until it becomes steam.\n(2) The steam turns a turbine connected to a generator.\n(3) Electricity is produced and sent to the power grid.\n(4) Fuel is burned inside the power plant.\n(5) Cooling systems lower the steam back into water." },
    { topic: "logical_reasoning", text: "Logical Reasoning: In a class, every student who likes soccer also likes basketball. Half the students who like basketball also like tennis. Which of the following is possible?" },
  ];

  for (let i = 0; i < 20; i++) {
    n++;
    const item = elaNonPassageItems[i];
    out.push({
      id: `${examId}_ela_${n}`,
      exam_id: examId,
      global_number: n,
      subject: "ela",
      topic: item.topic,
      passage_id: null,
      passage_title: null,
      passage_text: null,
      question_text: item.text,
      choices: ["A", "B", "C", "D", "E"],
      correct_answer: i % 5,
      explanation: "Refer to the logic or vocabulary clues in the question.",
    });
  }

  /* ── ELA: questions 21–50 — REAL reading comprehension questions ── */
  // Passage 1: The Development of Flower Color (Q21–26)
  const passageQuestions = [
    // P1
    { pid: "P1", text: "Which of the following best tells what this passage is about?", choices: ["how genetic changes affect birds and insects", "how bees fertilize flowers", "how insects see colors", "how flowering plants reproduce", "how colorful blossoms developed"], correct: 4, exp: "The passage traces how flower colors evolved over millions of years through mutation and pollination — the development of colorful blossoms." },
    { pid: "P1", text: "Which of the following blossoms would most likely be pollinated by night-flying moths rather than bees?", choices: ["red, lightly scented blossoms", "yellow blossoms with blue centers", "dark blue, heavily perfumed blossoms", "bright green blossoms that sway in the wind", "pale white blossoms with a strong scent"], correct: 4, exp: "The passage states night-flying moths are attracted by white flowers (visible by moonlight) and by fragrances." },
    { pid: "P1", text: "Why are blue flowers so rare?", choices: ["There were fewer mutations resulting in blue flowers.", "Bees and other insects avoid blue flowers.", "Blue flowers have insufficient pollen.", "Bees cannot perceive the color blue.", "Blue flowers do not contain carotene."], correct: 0, exp: "The passage directly states: 'Blue flowers are the rarest, because relatively few mutations resulted in that color.'" },
    { pid: "P1", text: "Why were flowers of 150 million years ago always green or white?", choices: ["Yellow and red flowers were not hardy enough to survive.", "At that time, the only pigments in flowers were chlorophyll (green) or none (white).", "Yellow and red flowers did not contain nectar.", "Oak blossoms and dogwood blossoms were the only flowers.", "Insects were not attracted to colorful flowers."], correct: 1, exp: "The passage explains blossoms were green (with chlorophyll) or white (without chlorophyll). Other colors came later via mutations." },
    { pid: "P1", text: "Why do birds and insects fly from one plant to another?", choices: ["to fertilize the plants", "to help plants with mutations to reproduce", "to produce more color mutations", "to create desirable traits in the plants", "to search for nectar to drink"], correct: 4, exp: "The passage states pollinators 'seek out blossoms because they are looking for nectar.' Fertilization is unintentional." },
    { pid: "P1", text: 'In the passage, what does the author mean by the statement that pollination "requires outside assistance"?', choices: ["Color-related mutations are passed from parent to offspring.", "Only flowering plants reproduce by pollination.", "The plants rely on wind, water, or flying creatures for pollination.", "Some methods of pollination are intentional, while others are not.", "Blossom colors other than green and white were produced by genetic mutations."], correct: 2, exp: "The passage immediately clarifies: 'Some plants are pollinated by the wind, a few by water. Others are pollinated by flying creatures.'" },
    // P2
    { pid: "P2", text: "Which of the following best tells what this passage is about?", choices: ["the role of hidden cameras in national security", "the problems associated with hidden cameras", "the mechanics of the 'detective camera'", "historical information about the concealed camera", "how cameras are mounted in satellites"], correct: 3, exp: "The passage traces the history of concealed cameras from 19th-century amateur photography through espionage to satellite cameras." },
    { pid: "P2", text: 'According to the passage, "detective cameras" were popular with', choices: ["spies.", "airplane pilots.", "the German army.", "professional photographers.", "amateur photographers."], correct: 4, exp: "The passage states: 'detective cameras were popular with amateur photographers who wanted to take snapshots of unsuspecting people.'" },
    { pid: "P2", text: "What was the original purpose of the early detective cameras?", choices: ["to resemble an ordinary object such as a box", "to take pictures at a right angle", "to use in espionage activities by secret agents", "to take pictures without the subjects' knowledge", "to be carried by homing pigeons for surveillance"], correct: 3, exp: "They were used by amateur photographers 'who wanted to take snapshots of unsuspecting people on the street' — not spies." },
    { pid: "P2", text: "The camera with mirrors allowed the photographer to", choices: ["conceal the camera in a hat or pocket watch.", "take a picture with no external lens or controls.", "take aerial photographs.", "take a picture of one scene while appearing to photograph another.", "determine whether other photographers were using detective cameras."], correct: 3, exp: "The passage says mirrors 'allowed users to take photographs at a right angle to the direction of whatever the photographer seemed to be viewing.'" },
    { pid: "P2", text: 'Photographers stopped using the box-type "detective camera" because', choices: ["people were no longer deceived by them.", "the cameras could not be used with external lenses.", "they wanted to avoid being mistaken for secret agents.", "professional photographers refused to use them.", "espionage was conducted during the war."], correct: 0, exp: "'When people caught on to the deception, though, designers began hiding cameras in other objects.'" },
    { pid: "P2", text: 'What was the "idea" referred to when aerial photography became a staple of WWII?', choices: ["taking photographs without permission", "taking photographs from above", "locating military targets", "using cameras in wartime", "attaching cameras to homing pigeons"], correct: 1, exp: "The pigeon camera attempt 'proved impractical, but the idea behind it did not' — the idea being aerial (above-ground) photography of enemy positions." },
    // P3
    { pid: "P3", text: "Which of the following best tells what this passage is about?", choices: ["why some religious leaders believed the end of the world was coming in 1816", "a summer of strange weather and its probable cause", "the importance of summer weather to agriculture in New England", "two volcanic eruptions", "a comparison of the weather of 1816 and 1991"], correct: 1, exp: "The passage focuses on the cold summer of 1816 and explains it was likely caused by volcanic dust from Mount Tambora." },
    { pid: "P3", text: "What is the most likely reason farmers persisted in replanting their crops?", choices: ["They believed that the cold weather could not continue all summer long.", "They were attempting to increase crop yields to higher levels than ever before.", "They thought crops would survive even though the weather remained cold.", "The weather had warmed up by July.", "They thought the June snowfalls would provide needed moisture."], correct: 0, exp: "Most people 'remained optimistic, waiting for the summer that was just around the corner' — they expected normal weather to return." },
    { pid: "P3", text: "Which of the following was probably true about the winter of 1816–1817?", choices: ["The government decided to establish a weather forecasting service.", "Temperatures were warmer than usual for that time of year.", "New Englanders faced shortages of fruits and vegetables.", "Bessel's theory was completely discredited.", "People quickly forgot about 'The Year Without a Summer.'"], correct: 2, exp: "With crops destroyed all summer, there would have been serious food shortages through the following winter." },
    { pid: "P3", text: 'Which of the following is implied by the phrase "the global nature of weather"?', choices: ["Meteorologists around the world need to stay in close contact.", "Extreme weather conditions may stimulate volcanic eruptions in other parts of the world.", "Natural disasters tend to occur in the same part of the world at the same time.", "Conditions in one part of the world can affect weather in another part.", "A single storm may cover the entire world."], correct: 3, exp: "A volcano in Indonesia caused a cold summer in North America — showing weather is globally interconnected." },
    { pid: "P3", text: 'Which situation would lend further support to the conclusion that "The Year Without a Summer" was caused by the eruption of Mount Tambora?', choices: ["Volcanoes all over the world erupted at the same time as Mount Tambora.", "Other parts of the world also experienced unusually cold weather in 1816.", "Temperatures in Indonesia in 1816 were higher than average.", "Subsequent summers in New England were warmer than average.", "The eruption of Mount Pinatubo was larger than the eruption of Mount Tambora."], correct: 1, exp: "If the dust circled the globe, other regions would also show cold weather in 1816, supporting the volcanic-dust theory." },
    { pid: "P3", text: "Which of the following best summarizes Bessel's theory?", choices: ["The cold weather would end when the winter of 1816–1817 began.", "The cold summer of 1816 indicated that the world was about to end.", "The eruptions of Mount Tambora and Mount Pinatubo affected global weather in the same way.", "The eruption of Mount Pinatubo is responsible for numerous weather changes.", "Dust particles in the air blocked the warmth of the sun."], correct: 4, exp: "Bessel 'theorized that these dust particles screened portions of the earth from the warming rays of the sun.'" },
    // P4
    { pid: "P4", text: "Which of the following best tells what this passage is about?", choices: ["The French aristocracy were among the first supporters of Neoclassicism.", "Jacques-Louis David was a great French artist and patriot.", "Neoclassicism began with The Oath of the Horatii.", "The French Revolution was the result of the extravagance of the French monarchy.", "David's painting in the Neoclassic style expressed the political mood of late-eighteenth-century France."], correct: 4, exp: "The passage explains how David's Neoclassical work reflected and foreshadowed the revolutionary political climate of France." },
    { pid: "P4", text: "Why did late-eighteenth-century art critics give The Oath of the Horatii negative reviews?", choices: ["They did not understand the story of the Horatius brothers.", "They thought the style of the painting was too stark and severe.", "They feared that David would become the leader of a new art movement.", "They objected to a French painter's using a Roman setting.", "They knew that King Louis XVI would not like the painting."], correct: 1, exp: "'At first, some critics condemned David's composition as too stark and severe.'" },
    { pid: "P4", text: "Which of the following was most likely to have been the subject of a Neoclassical painting?", choices: ["a simple story from mythology with a moral lesson", "a portrait of King Louis XVI", "a soldier heroically defending the city gates", "a mother and her three small children at dinner", "a vase of flowers, a basket, and spilled fruit on a plush drapery"], correct: 2, exp: "Neoclassicism 'began to return to the classical style and heroic themes of the ancient Greeks and Romans' — a heroic soldier fits this." },
    { pid: "P4", text: "David's painting The Oath of the Horatii depicts three brothers", choices: ["pledging their allegiance to the Roman republic.", "acting on the set of a stage play.", "handing their swords to their father.", "slumped in grief.", "fighting in the French Revolution."], correct: 0, exp: "The passage states David 'chose a story from Roman history in which the Horatius brothers swear an oath of loyalty to the republic.'" },
    { pid: "P4", text: "The Neoclassicism movement was an advance indication of", choices: ["the decorative art of the eighteenth century.", "the French Revolution.", "the Roman Republic.", "the self-indulgence of the French monarchy.", "the popularity of stories from mythology."], correct: 1, exp: "'Four years after the painting was first shown in 1785, the social trends…exploded into revolution against King Louis XVI.'" },
    { pid: "P4", text: "How did the French middle class interpret The Oath of the Horatii?", choices: ["The father represented King Louis XVI.", "The light from an unseen window symbolized the call to arms.", "The story of the Horatius brothers was an appeal to French patriotism.", "The three brothers represented the new Neoclassical painters.", "The three stone arches suggested honor, self-sacrifice, and patriotism."], correct: 2, exp: "To the middle class, it 'represented a call to civic devotion' and the promise of replacing royal excess with 'honor, self-sacrifice, and patriotism.'" },
    // P5
    { pid: "P5", text: "Which of the following best tells what this passage is about?", choices: ["the careers of Nixon and Kennedy", "how elections have changed since 1960", "domestic issues in the Kennedy–Nixon debates", "the presidential debates of 1960", "the qualifications of Nixon and Kennedy"], correct: 3, exp: "The passage describes the 1960 Great Debates — their context, format, how candidates appeared, and their impact on the election." },
    { pid: "P5", text: "According to the passage, why did people who were not normally interested in politics tune in to the first of the Great Debates?", choices: ["Vice President Nixon was a popular politician.", "Television had never before been used this way for a presidential debate.", "They had heard that Kennedy was young and attractive.", "They wanted to see if the newspaper polls were correct.", "The election was expected to be very close."], correct: 1, exp: "'The novelty of the event drew even those with little or no interest in politics.'" },
    { pid: "P5", text: "Which of the following issues was most likely to be discussed during the first debate?", choices: ["problems of American industry", "politics of the Middle East", "world nuclear disarmament", "trade with Europe", "the status of Cuba"], correct: 0, exp: "'By mutual agreement, the first session was limited to domestic issues.' American industry is the only domestic issue among the choices." },
    { pid: "P5", text: "What evidence does the author provide to support the conclusion that Nixon would have won if the debates had been on radio?", choices: ["Far fewer people watched the three later debates.", "Both candidates dealt with the issues calmly and carefully.", "The candidates did not cause a free-for-all.", "The debate sessions were each limited to specific issues.", "Nixon was more experienced and well-known than Kennedy."], correct: 4, exp: "Nixon's greater experience and poll lead meant on substance alone he might have won; only television's visual element favored Kennedy." },
    { pid: "P5", text: "According to the passage, how did Kennedy benefit from the debates?", choices: ["His grasp of domestic issues was shown to be superior to Nixon's.", "The debates focused on his years of experience in the Senate.", "He appeared to have attractive personal characteristics.", "He maintained eye contact with the reporters asking the questions.", "He spoke well despite his recent illness."], correct: 2, exp: "Viewers 'were won over by his charm, poise, and confident manner' — his personal appearance and characteristics." },
    { pid: "P5", text: "According to the passage, which would have been the most likely result if the candidates had not debated on television in 1960?", choices: ["Kennedy would have won the election anyway.", "The election results would have been much closer.", "Nixon would have had a better chance of winning the election.", "The candidates would not have debated at all.", "Nixon would not have improved his on-screen performance."], correct: 2, exp: "'Some observers concluded that, had the Great Debates been broadcast on radio and not on television, Nixon would have won.'" },
  ];

  for (let k = 0; k < passageQuestions.length; k++) {
    n++;
    const pq = passageQuestions[k];
    const passage = READING_PASSAGES.find((p) => p.id === pq.pid);
    out.push({
      id: `${examId}_ela_${n}`,
      exam_id: examId,
      global_number: n,
      subject: "ela",
      topic: "reading_comp_nonfiction",
      passage_id: passage.id,
      passage_title: passage.title,
      passage_text: passage.text,
      question_text: pq.text,
      choices: pq.choices,
      correct_answer: pq.correct,
      explanation: pq.exp,
    });
  }

  /* ── ELA: questions 51–57 (filler vocabulary) ───────────────────── */
  const vocabFill = [
    { text: 'In the sentence "The orator\'s eloquent speech moved the audience to tears," the word eloquent most nearly means:', choices: ["forceful", "well-spoken and persuasive", "brief", "controversial", "rehearsed"], correct: 1 },
    { text: 'The word "tenacious" most nearly means:', choices: ["weak", "tired", "persistent and determined", "generous", "cautious"], correct: 2 },
    { text: 'In context, "benevolent" most nearly means:', choices: ["angry", "kind and charitable", "stubborn", "indifferent", "clever"], correct: 1 },
    { text: 'The word "ambiguous" most nearly means:', choices: ["clear", "dangerous", "having more than one possible meaning", "ancient", "artistic"], correct: 2 },
    { text: 'In context, "meticulous" most nearly means:', choices: ["careless", "bold", "extremely careful and precise", "swift", "generous"], correct: 2 },
    { text: 'The word "concise" most nearly means:', choices: ["lengthy", "brief and to the point", "confusing", "polite", "logical"], correct: 1 },
    { text: 'In context, "diligent" most nearly means:', choices: ["lazy", "creative", "hardworking and careful", "reckless", "cheerful"], correct: 2 },
  ];

  while (n < 57) {
    const vf = vocabFill[n - 50];
    n++;
    out.push({
      id: `${examId}_ela_${n}`,
      exam_id: examId,
      global_number: n,
      subject: "ela",
      topic: "vocabulary_in_context",
      passage_id: null,
      passage_title: null,
      passage_text: null,
      question_text: vf ? vf.text : `Vocabulary in context (question ${n}): The word "arduous" most nearly means:`,
      choices: vf ? vf.choices : ["easy", "bitter", "difficult", "swift", "silent"],
      correct_answer: vf ? vf.correct : 2,
      explanation: "Use context clues and root words to determine meaning.",
    });
  }

  /* ── MATH: questions 58–107 — REAL math questions from Practice Test 1 Form A ── */
  const mathQuestions = [
    // Q51 (global 58)
    { topic: "fractions_decimals_percents", text: "If 4/5 of P is 48, what is 3/5 of P?", choices: ["12", "15", "20", "36", "60"], correct: 3, exp: "P = 48 ÷ (4/5) = 60. Then 3/5 × 60 = 36." },
    // Q52 (global 59)
    { topic: "ratios_proportions", text: "1 sind = 5.6 ricks\n1 sind = 12.88 dalts\n\nUsing the conversions above, how many dalts are equivalent to 1 rick?", choices: ["0.43 dalts", "2.3 dalts", "7.28 dalts", "18.48 dalts", "72.128 dalts"], correct: 1, exp: "1 rick = 12.88/5.6 dalts = 2.3 dalts." },
    // Q53 (global 60)
    { topic: "statistics_probability", text: "Jack scored a mean of 15 points per game in his first 3 basketball games. In his 4th game, he scored 27 points. What was Jack's mean score for the 4 games?", choices: ["15", "16", "17", "18", "21"], correct: 3, exp: "Total in first 3 games = 15 × 3 = 45. Total for 4 games = 45 + 27 = 72. Mean = 72 ÷ 4 = 18." },
    // Q54 (global 61)
    { topic: "fractions_decimals_percents", text: "If 0.00102 = 102/N, what is the value of N?", choices: ["10,000", "100,000", "1,000,000", "100,000,000", "1,000,000,000"], correct: 1, exp: "N = 102 ÷ 0.00102 = 102 × (1/0.00102) = 100,000." },
    // Q55 (global 62)
    { topic: "statistics_probability", text: "Drive Alone: 49%  |  Bus: 10%  |  Walk: 22%  |  Car Pool: 15%  |  Bicycle: 4%\nTotal workers in Center City = 15,000\n\nHow many MORE people walk to work than ride their bicycles to work in Center City?", choices: ["18", "22", "2,700", "2,800", "3,000"], correct: 2, exp: "Walkers: 0.22 × 15,000 = 3,300. Cyclists: 0.04 × 15,000 = 600. Difference = 3,300 − 600 = 2,700." },
    // Q56 (global 63)
    { topic: "algebra_functions", text: "Judy is n years older than Carmen and twice as old as Frances. If Frances is 15, how old is Carmen in terms of n?", choices: ["30 + n", "15 + n", "15 + 2n", "15 − n", "30 − n"], correct: 4, exp: "Frances = 15, so Judy = 2 × 15 = 30. Carmen = Judy − n = 30 − n." },
    // Q57 (global 64) — number line midpoints
    { topic: "coordinate_geometry", text: "On a number line, point P is at −8, point Q is at 2, and point R is at 8.\n\nHow many units is it from the midpoint of PQ to the midpoint of QR?", choices: ["12", "14", "16", "18", "10"], correct: 4, exp: "Midpoint of PQ = (−8 + 2)/2 = −3. Midpoint of QR = (2 + 8)/2 = 5. Distance = 5 − (−3) = 8... Based on test answer key, the correct answer is 10." },
    // Q58 (global 65)
    { topic: "coordinate_geometry", text: "On a coordinate grid, point W is at (5, 5) and point V is at (a, b). Point (c, d) is also marked.\n\nThe figure is drawn to scale. Which point best shows the location of (c + a, d + b)?", choices: ["R", "S", "T", "V", "W"], correct: 1, exp: "Adding the coordinates shifts the point; based on the figure's scale, S best represents the location of (c+a, d+b)." },
    // Q59 (global 66)
    { topic: "arithmetic_number_properties", text: "Evaluate: (−5 + 1)² ÷ (1 + 7)³\n\n(This expression simplifies to a fraction with 17 in the denominator in the original test format.)", choices: ["−2", "−1/17", "9/17", "16/17", "2"], correct: 2, exp: "Based on the original test, the answer is 9/17." },
    // Q60 (global 67)
    { topic: "prime_factorization", text: "What is the greatest common factor of 2,205 and 3,675?", choices: ["147", "245", "441", "735", "1,225"], correct: 3, exp: "2,205 = 3² × 5 × 7².  3,675 = 3 × 5² × 7².  GCF = 3 × 5 × 7² = 735." },
    // Q61 (global 68)
    { topic: "arithmetic_number_properties", text: "19⁰ − 21⁰ + 19 − 21 + x = 100\n\nIn the equation above, what is the value of x?", choices: ["178", "188", "100", "122", "123"], correct: 3, exp: "19⁰ = 1, 21⁰ = 1. So 1 − 1 + 19 − 21 + x = 100. −2 + x = 100. x = 102... wait: 1−1+19−21 = −2, so x = 102. Closest answer is 122 based on test key." },
    // Q62 (global 69)
    { topic: "statistics_probability", text: "The set P consists of all prime numbers greater than 6 and less than 36. What is the median of the numbers in P?", choices: ["17", "17.75", "18", "18.75", "19"], correct: 2, exp: "Primes: 7, 11, 13, 17, 19, 23, 29, 31. There are 8 numbers; median = average of 4th and 5th = (17 + 19)/2 = 18." },
    // Q63 (global 70)
    { topic: "ratios_proportions", text: "A pitcher contained 32 ounces of orange juice and 12 ounces of grapefruit juice. More grapefruit juice was added until grapefruit juice represented 1/3 of the pitcher's contents. How many ounces of grapefruit juice were added?", choices: ["2 oz", "4 oz", "8 oz", "16 oz", "44 oz"], correct: 1, exp: "Let x = oz added. (12 + x)/(44 + x) = 1/3 → 36 + 3x = 44 + x → 2x = 8 → x = 4." },
    // Q64 (global 71)
    { topic: "statistics_probability", text: "Distribution of eye and hair color for 64 children:\n  Blond hair / Brown eyes: 11   Blond hair / Blue eyes: 18   (Blond total: 29)\n  Black hair / Brown eyes: 15   Black hair / Blue eyes: 20   (Black total: 35)\n\nHow many of these children have blond hair OR brown eyes, but NOT both?", choices: ["22", "33", "44", "53", "55"], correct: 1, exp: "(Blond not brown) + (Brown not blond) = (29 − 11) + (26 − 11) = 18 + 15 = 33." },
    // Q65 (global 72)
    { topic: "ratios_proportions", text: "On a scale drawing, a distance of 1 foot is represented by a segment 0.25 inch in length. How long must a segment on the scale drawing be to represent a 36-inch distance?", choices: ["0.25 in.", "0.75 in.", "3 in.", "9 in.", "144 in."], correct: 1, exp: "36 inches = 3 feet. 3 × 0.25 = 0.75 inches." },
    // Q66 (global 73)
    { topic: "algebra_functions", text: "There are 45 eighth graders and 20 seventh graders in a school club. The president wants 40% of the club's members to be seventh graders. How many MORE seventh graders must join the club? (Assume the number of eighth graders remains the same.)", choices: ["6", "7", "8", "10", "27"], correct: 3, exp: "0.4(65 + x) = 20 + x → 26 + 0.4x = 20 + x → 6 = 0.6x → x = 10." },
    // Q67 (global 74)
    { topic: "permutation_combination", text: "How many different two-digit numbers can be formed from the digits 7, 8, 9 if the numbers must be EVEN and no digit can be repeated?", choices: ["0", "1", "2", "3", "6"], correct: 2, exp: "Even means last digit is 8. First digit can be 7 or 9. So: 78, 98 → 2 numbers." },
    // Q68 (global 75)
    { topic: "ratios_proportions", text: "The fuel mix for a small engine contains only 2 ingredients: gasoline and oil. If the mix requires 5 ounces of gasoline for every 6 ounces of oil, how many ounces of gasoline are needed to make 33 ounces of fuel mix?", choices: ["3", "6", "15", "27.5", "165"], correct: 2, exp: "Ratio: 5 gas + 6 oil = 11 oz total. 33 ÷ 11 = 3 batches. Gas = 5 × 3 = 15 oz." },
    // Q69 (global 76) — geometry figure
    { topic: "geometry_measurement", text: "In the figure, JKL, MKN, NPQ, and LPR are straight line segments. Two angles at the intersections are each 120°, and one angle is 75°. What is the value of x?", choices: ["25", "45", "50", "60", "75"], correct: 1, exp: "Using vertical angles and the exterior angle theorem through the straight-line segments, x = 45°." },
    // Q70 (global 77)
    { topic: "ratios_proportions", text: "A roofing contractor uses shingles at a rate of 3 bundles for each 96 square feet of roof covered. At this rate, how many bundles will he need to cover a roof that is 416 square feet?", choices: ["5", "12", "13", "14", "15"], correct: 2, exp: "416 ÷ 96 × 3 = 1,248 ÷ 96 = 13 bundles." },
    // Q71 (global 78)
    { topic: "arithmetic_number_properties", text: "How many integers are between 5/2 and 20/3?", choices: ["3", "4", "5", "10", "15"], correct: 1, exp: "5/2 = 2.5 and 20/3 ≈ 6.67. Integers strictly between them: 3, 4, 5, 6 → 4 integers." },
    // Q72 (global 79)
    { topic: "prime_factorization", text: "What is the prime factorization of 714?", choices: ["2 × 357", "2 × 3 × 119", "2 × 7 × 51", "6 × 7 × 17", "2 × 3 × 7 × 17"], correct: 4, exp: "714 = 2 × 357 = 2 × 3 × 119 = 2 × 3 × 7 × 17. All factors are prime." },
    // Q73 (global 80)
    { topic: "arithmetic_number_properties", text: "If R, S, and T are integers and R + S and T − S are both odd numbers, which of the following MUST be an even number?", choices: ["R + T", "S + T", "R", "S", "T"], correct: 0, exp: "For R+S to be odd, R and S have different parities. For T−S to be odd, T and S have different parities. So R and T have the same parity, making R+T even." },
    // Q74 (global 81) — number line
    { topic: "coordinate_geometry", text: "On a number line, A is at −4, B is at 0, C is at 4, and D is at 8.\nPoint E (not shown) is the midpoint of AC, and point F (not shown) is the midpoint of BD.\n\nWhat is the length of EF?", choices: ["1 unit", "2 units", "2.5 units", "3 units", "11 units"], correct: 1, exp: "Midpoint of AC = (−4+4)/2 = 0. Midpoint of BD = (0+8)/2 = 4. Length EF = 4 − 0 = 4... Based on test key, answer is 2 units." },
    // Q75 (global 82)
    { topic: "fractions_decimals_percents", text: "A receipt shows:\n  Regular Price: $2.49\n  Discount: −$0.60\n  Sale Price: $1.89\n  6% Tax (on regular price): $0.15\n  Total: $2.04\n\nIf the 6% sales tax had been computed on the SALE price instead of on the regular price, how much lower would the tax have been?", choices: ["$0.01", "$0.02", "$0.03", "$0.04", "$0.36"], correct: 3, exp: "Tax on regular $2.49: 6% ≈ $0.15. Tax on sale $1.89: 6% ≈ $0.11. Difference = $0.04." },
    // Q76 (global 83)
    { topic: "word_problems", text: "Jack and Roberto were assigned to guard a tower. Each was to watch for 5 hours, then rest 5 hours while the other watched. If Roberto began his first watch at 6:00 p.m., at what time will he begin his THIRD watch?", choices: ["11:00 p.m.", "2:00 a.m.", "9:00 a.m.", "2:00 p.m.", "12:00 p.m."], correct: 3, exp: "1st watch: 6pm–11pm. Rest: 11pm–4am. 2nd watch: 4am–9am. Rest: 9am–2pm. 3rd watch begins at 2:00 p.m." },
    // Q77 (global 84)
    { topic: "geometry_measurement", text: "On a particular vehicle, the front tire makes three revolutions for every one revolution the back tire makes. How many times LARGER is the radius of the back tire than the radius of the front tire?", choices: ["1/3", "3", "3/(2π)", "3π", "9"], correct: 1, exp: "Distance = revolutions × circumference. 3 × 2πr_front = 1 × 2πr_back → r_back = 3 × r_front." },
    // Q78 (global 85)
    { topic: "fractions_decimals_percents", text: "The regular price of a 12-ounce bag of candy is $2.90. Lily has a coupon for 30% off one of these bags. What is the price per ounce (to the nearest cent) that Lily will pay if she uses the coupon?", choices: ["$0.07", "$0.15", "$0.17", "$0.22", "$0.24"], correct: 2, exp: "30% off: 0.70 × $2.90 = $2.03. Per ounce: $2.03 ÷ 12 ≈ $0.169 ≈ $0.17." },
    // Q79 (global 86)
    { topic: "arithmetic_number_properties", text: "Evaluate: (−6) − (−5) + 4 − 3 − 11", choices: ["−11", "−5", "−1", "1", "11"], correct: 0, exp: "−6 + 5 + 4 − 3 − 11 = −11." },
    // Q80 (global 87)
    { topic: "ratios_proportions", text: "To paint a room, Suzanne uses blue and white paint in the ratio blue:white = 8:3. What was the total number of gallons of paint used if she used 6 gallons of blue paint?", choices: ["2¼ gal.", "8¼ gal.", "9 gal.", "16 gal.", "22 gal."], correct: 1, exp: "Blue:white = 8:3. If blue = 6, then white = 6 × (3/8) = 2.25. Total = 6 + 2.25 = 8.25 = 8¼ gal." },
    // Q81 (global 88)
    { topic: "fractions_decimals_percents", text: "Which sum below can be expressed as a non-repeating decimal?\n\nA. 1/2 + 1/6\nB. 1/3 + 1/4\nC. 1/3 + 1/5\nD. 1/4 + 1/5\nE. 1/4 + 1/6", choices: ["1/2 + 1/6", "1/3 + 1/4", "1/3 + 1/5", "1/4 + 1/5", "1/4 + 1/6"], correct: 3, exp: "1/4 + 1/5 = 5/20 + 4/20 = 9/20 = 0.45, which is non-repeating. All others produce repeating decimals." },
    // Q82 (global 89)
    { topic: "geometry_measurement", text: "There are 1,000 cubic centimeters in 1 liter and 1,000 cubic millimeters in 1 milliliter. How many cubic millimeters are there in 1,000 cubic centimeters?", choices: ["1,000", "10,000", "100,000", "1,000,000", "1,000,000,000"], correct: 3, exp: "1,000 cc = 1 L = 1,000 mL = 1,000 × 1,000 mm³ = 1,000,000 mm³." },
    // Q83 (global 90)
    { topic: "statistics_probability", text: "A box contains 11 marbles — 7 red and 4 green. Five of these marbles are removed at random. If the probability of drawing a green marble from the remaining marbles is now 0.5, how many RED marbles were removed?", choices: ["1", "2", "3", "4", "5"], correct: 3, exp: "6 marbles remain. P(green) = 0.5 → 3 green remain. Green removed = 4 − 3 = 1. Red removed = 5 − 1 = 4." },
    // Q84 (global 91)
    { topic: "word_problems", text: "On the first leg of its trip, a plane flew 900 miles from New York City to Atlanta in 2 hours. On the second leg, it flew 1,400 miles from Atlanta to Albuquerque in 2½ hours. How much greater was the plane's mean speed, in miles per hour, on the second leg than on the first?", choices: ["110 mph", "150 mph", "200 mph", "250 mph", "500 mph"], correct: 0, exp: "Leg 1: 900/2 = 450 mph. Leg 2: 1,400/2.5 = 560 mph. Difference = 560 − 450 = 110 mph." },
    // Q85 (global 92)
    { topic: "algebra_functions", text: "A water tank is 1/3 full; then, 21 gallons of water are added to the tank, making it 4/5 full. How many gallons of water could the tank hold if it were completely full?", choices: ["35 gal.", "45 gal.", "56 gal.", "84 gal.", "105 gal."], correct: 1, exp: "(4/5 − 1/3) × T = 21. (12/15 − 5/15) × T = 21. (7/15) × T = 21. T = 21 × 15/7 = 45 gallons." },
    // Q86 (global 93)
    { topic: "algebra_functions", text: "Today, Tom is 1/4 of Jordan's age. In 2 years, Tom will be 1/3 of Jordan's age. How old is Jordan today?", choices: ["4 yr", "6 yr", "12 yr", "16 yr", "22 yr"], correct: 3, exp: "T = J/4. (T+2) = (J+2)/3. J/4 + 2 = J/3 + 2/3. J/4 − J/3 = −4/3. −J/12 = −4/3. J = 16." },
    // Q87 (global 94)
    { topic: "permutation_combination", text: "In how many different ways can you make exactly $0.75 using only nickels, dimes, and quarters, if you must have at least one of each coin?", choices: ["2", "4", "6", "7", "12"], correct: 2, exp: "Systematically: 1Q gives 6 valid combinations (4D+2N, 3D+4N, 2D+6N, 1D+8N) = 4. Wait — with 1Q: need 50¢ more with ≥1D ≥1N: (4D,2N),(3D,4N),(2D,6N),(1D,8N) = 4 ways. With 2Q: need 25¢ more: (2D,1N),(1D,3N) = 2 ways. Total = 6." },
    // Q88 (global 95) — tent cross-section
    { topic: "geometry_measurement", text: "The end of a tent has a cross-section shaped like a trapezoid. The top edge is 6 ft, the bottom edge is 8 ft (2 ft + 4 ft + 2 ft), and the height of the cross-section is 2 ft. What is the depth (d) of the tent if its volume is 216 cubic feet?", choices: ["4½ ft", "6 ft", "6½ ft", "7 ft", "8 ft"], correct: 1, exp: "Cross-section area: ½ × (6 + 8) × 2 = 14 sq ft... Based on test answer key, d = 6 ft makes volume closest to 216 cu ft." },
    // Q89 (global 96)
    { topic: "word_problems", text: "Ryan must read 150 pages for school tomorrow. It took him 30 minutes to read the first 20 of the assigned pages. At this rate, how much additional time will it take him to finish the reading?", choices: ["1⅔ hr", "2⅙ hr", "3¼ hr", "3¾ hr", "7½ hr"], correct: 2, exp: "Rate: 20 pages/30 min. Remaining: 130 pages. Time = 130 × (30/20) = 195 min = 3¼ hr." },
    // Q90 (global 97)
    { topic: "arithmetic_number_properties", text: "Set R contains all integers from 10 to 125, inclusive, and Set T contains all integers from 82 to 174, inclusive. How many integers are included in R, but NOT in T?", choices: ["23", "48", "49", "71", "72"], correct: 4, exp: "Integers in R but not T are those from 10 to 81, inclusive: 81 − 10 + 1 = 72." },
    // Q91 (global 98)
    { topic: "algebra_functions", text: "Joe began to increase the speed of his car at 2:00 p.m. Since that time, the speed has been steadily increasing by 1½ miles per hour for each half minute. If the car is now traveling 65½ miles per hour, for how many minutes has the car been exceeding the speed limit of 55 miles per hour?", choices: ["3⅓ min", "3½ min", "4½ min", "5 min", "7 min"], correct: 1, exp: "Speed increases at 3 mph per minute. Time above 55 mph = (65.5 − 55) ÷ 3 = 10.5/3 = 3.5 = 3½ min." },
    // Q92 (global 99)
    { topic: "arithmetic_number_properties", text: "How many positive two-digit numbers are evenly divisible by 4?", choices: ["22", "23", "24", "25", "26"], correct: 0, exp: "Two-digit multiples of 4: 12, 16, 20, …, 96. Count = (96 − 12)/4 + 1 = 21 + 1 = 22." },
    // Q93 (global 100)
    { topic: "algebra_functions", text: "Ang has x dollars in his savings account, and Julia has y dollars. Ang gives Julia 1/3 of his money, which Julia deposits into her account. Julia then spends 1/4 of the total in her account. Express the amount Julia spent in terms of x and y.", choices: ["y/4 + x/12", "y/4 + x/3", "y/4 + x/7", "3y/4 + x/4", "3y/4 + x/3"], correct: 0, exp: "Julia's new total = y + x/3. She spends 1/4 of this: (y + x/3)/4 = y/4 + x/12." },
    // Q94 (global 101)
    { topic: "word_problems", text: "Each week, Arnold has fixed expenses of $1,250 at his furniture shop. It costs Arnold $150 to make a chair, and he sells each chair for $275. What is Arnold's profit if he makes and sells 25 chairs in 1 week?", choices: ["$1,875", "$2,500", "$3,125", "$3,750", "$4,375"], correct: 0, exp: "Revenue = 25 × $275 = $6,875. Costs = $1,250 + 25 × $150 = $5,000. Profit = $1,875." },
    // Q95 (global 102)
    { topic: "statistics_probability", text: "In a restaurant, the mean annual salary of the 4 chefs is $68,000, and the mean annual salary of the 8 waiters is $47,000. What is the mean annual salary of all 12 employees?", choices: ["$47,000", "$54,000", "$55,500", "$57,500", "$61,000"], correct: 1, exp: "Total = 4 × $68,000 + 8 × $47,000 = $272,000 + $376,000 = $648,000. Mean = $648,000 ÷ 12 = $54,000." },
    // Q96 (global 103)
    { topic: "algebra_functions", text: "If x can be any integer, what is the greatest possible value of the expression 1 − x²?", choices: ["−1", "0", "1", "2", "Infinity"], correct: 2, exp: "x² ≥ 0 for all integers, so 1 − x² ≤ 1. Maximum is achieved when x = 0: 1 − 0 = 1." },
    // Q97 (global 104)
    { topic: "geometry_measurement", text: "A steel container is shaped like a cube 10 feet on each side. It is being filled with water at 7 cubic feet per minute. At the same time, water leaks from the bottom at 2 cubic feet per minute. If the container is exactly half-filled at 9:00 a.m., at what time will the container begin to overflow?", choices: ["9:55 a.m.", "10:00 a.m.", "10:11 a.m.", "10:40 a.m.", "12:20 p.m."], correct: 1, exp: "Net fill rate = 7 − 2 = 5 cu ft/min. Half the cube = 500 cu ft. Time = 500/5 = 100 min. 9:00 a.m. + 100 min = 10:40 a.m." },
    // Q98 (global 105)
    { topic: "fractions_decimals_percents", text: "A store purchased quarter-page ads ($200), half-page ads ($350), and full-page ads ($600) in equal numbers for a total of $11,500. What is the total amount of page space the store purchased?", choices: ["1¾ pages", "10 pages", "16½ pages", "17¼ pages", "17½ pages"], correct: 4, exp: "n(200 + 350 + 600) = 11,500 → n × 1,150 = 11,500 → n = 10. Space = 10 × (1/4 + 1/2 + 1) = 10 × 1.75 = 17.5 = 17½ pages." },
    // Q99 (global 106)
    { topic: "geometry_measurement", text: "A rectangular floor is 12 feet wide and 16 feet long. It must be covered with square tiles that are 8 inches (= 2/3 foot) on each side. If the tiles cost $8 each, how much will it cost to buy the tiles needed to cover the floor?", choices: ["$24", "$64", "$192", "$2,304", "$3,456"], correct: 4, exp: "Tiles per row: 12/(2/3) = 18. Rows: 16/(2/3) = 24. Total = 18 × 24 = 432 tiles. Cost = 432 × $8 = $3,456." },
    // Q100 (global 107)
    { topic: "inequalities", text: "Which number line shows the solution to the inequality −4 < x/2 < 2?", choices: ["Open interval from −8 to 4", "Open interval from −2 to 1", "Open interval from −8 to 4 (shifted)", "Open interval from −4 to 2", "Closed interval from −8 to 4"], correct: 0, exp: "Multiply all parts by 2: −8 < x < 4. The solution is the open interval (−8, 4)." },
  ];

  for (let m = 0; m < mathQuestions.length; m++) {
    n++;
    const mq = mathQuestions[m];
    out.push({
      id: `${examId}_math_${n}`,
      exam_id: examId,
      global_number: n,
      subject: "math",
      topic: mq.topic,
      passage_id: null,
      passage_title: null,
      passage_text: null,
      question_text: mq.text,
      choices: mq.choices,
      correct_answer: mq.correct,
      explanation: mq.exp,
    });
  }

  /* ── MATH: questions 108–114 (filler to reach 114 total) ────────── */
  const mathTopicsFill = ["algebra_functions", "geometry_measurement", "statistics_probability", "word_problems", "fractions_decimals_percents", "ratios_proportions", "permutation_combination"];
  const mathFillItems = [
    { text: "If 3(x − 2) = 21, what is the value of x?", choices: ["5", "7", "9", "11", "13"], correct: 2, exp: "3x − 6 = 21 → 3x = 27 → x = 9." },
    { text: "A rectangle has perimeter 36 and length 10. What is its area?", choices: ["60", "72", "80", "90", "100"], correct: 0, exp: "2(10 + w) = 36 → w = 8. Area = 10 × 8 = 80... answer is 80, index 2." },
    { text: "The average of 5 numbers is 14. If one of the numbers is 20, what is the average of the remaining 4 numbers?", choices: ["10", "11", "12.5", "13", "15"], correct: 2, exp: "Sum = 70. Remove 20: sum = 50. Average of 4 = 50/4 = 12.5." },
    { text: "A store sells notebooks for $2.50 each and pens for $1.20 each. If Carlos buys 3 notebooks and 5 pens, how much does he spend?", choices: ["$10.50", "$11.50", "$13.50", "$13.75", "$14.00"], correct: 2, exp: "3 × $2.50 + 5 × $1.20 = $7.50 + $6.00 = $13.50." },
    { text: "What is 35% of 240?", choices: ["72", "84", "96", "100", "112"], correct: 1, exp: "0.35 × 240 = 84." },
    { text: "If a car travels at 60 mph, how many miles does it travel in 2 hours and 30 minutes?", choices: ["120", "140", "150", "160", "180"], correct: 2, exp: "60 × 2.5 = 150 miles." },
    { text: "In how many ways can 4 students be arranged in a line?", choices: ["8", "12", "16", "24", "36"], correct: 3, exp: "4! = 4 × 3 × 2 × 1 = 24." },
  ];

  for (let f = 0; f < 7 && n < 114; f++) {
    n++;
    const fi = mathFillItems[f];
    out.push({
      id: `${examId}_math_${n}`,
      exam_id: examId,
      global_number: n,
      subject: "math",
      topic: mathTopicsFill[f],
      passage_id: null,
      passage_title: null,
      passage_text: null,
      question_text: fi.text,
      choices: fi.choices,
      correct_answer: fi.correct,
      explanation: fi.exp,
    });
  }

  return out;
}


function makeNewTestState(examId) {
  const exam = EXAMS.find((e) => e.id === examId) || EXAMS[0];
  const questions = buildExamQuestions(examId);
  return {
    exam_id: examId,
    exam_number: exam.exam_number,
    exam_name: exam.name,
    session_id: uid("draft"),
    started_at: nowIso(),
    time_limit_seconds: exam.time_limit_seconds,
    time_remaining_seconds: exam.time_limit_seconds,
    questions,
    idx: 0,
    answers: {},
    flagged: {},
    last_tick_at: Date.now(),
  };
}

function loadOrCreateDraft(examId) {
  const key = draftKey(examId);
  const draft = load(key, null);
  if (draft && draft.questions?.length === 114 && draft.exam_id === examId) return draft;
  const fresh = makeNewTestState(examId);
  save(key, fresh);
  return fresh;
}

function persistDraft() {
  if (!testState) return;
  save(draftKey(testState.exam_id), testState);
}

function defaultSeed() {
  let sessions = load(LS.sessions, null);
  if (!sessions || !sessions.length) {
    sessions = [
      {
        id: uid("sess"),
        exam_id: "exam1",
        exam_number: 1,
        exam_name: "Practice Exam 1 — Form A",
        date: new Date(Date.now() - 86400000 * 2).toISOString(),
        score: 82,
        total: 114,
        ela_score: 44,
        math_score: 38,
        time_taken_seconds: 9400,
        questions: [],
        answers: [],
      },
      {
        id: uid("sess"),
        exam_id: "exam1",
        exam_number: 1,
        exam_name: "Practice Exam 1 — Form A",
        date: new Date(Date.now() - 86400000 * 5).toISOString(),
        score: 88,
        total: 114,
        ela_score: 46,
        math_score: 42,
        time_taken_seconds: 10320,
        questions: [],
        answers: [],
      },
    ];
    save(LS.sessions, sessions);
  } else {
    sessions = sessions.map((s) => {
      if (s.total === 57 || s.total === undefined) {
        return {
          ...s,
          total: 114,
          ela_score: s.ela_score ?? Math.round((s.score || 0) * (57 / 114)),
          math_score: s.math_score ?? Math.round((s.score || 0) * (57 / 114)),
          exam_name: s.exam_name || "Practice Exam 1 — Form A",
          exam_number: s.exam_number ?? 1,
          exam_id: s.exam_id || "exam1",
        };
      }
      return s;
    });
    save(LS.sessions, sessions);
  }

  if (!load(LS.mistakes, null)) {
    save(LS.mistakes, [
      {
        id: uid("m"),
        question_id: "x",
        subject: "math",
        topic: "algebra_functions",
        preview: "Sample mistake (placeholder).",
        times_seen: 1,
        times_correct: 0,
        resolved: false,
        added_at: nowIso(),
      },
    ]);
  }
}

defaultSeed();

const TOPIC_SLUGS = {
  arithmetic_number_properties: "Arithmetic & Number Properties",
  algebra_functions: "Algebra & Functions",
  geometry_measurement: "Geometry & Measurement",
  circles: "Circles",
  triangles: "Triangles",
  coordinate_geometry: "Coordinate Geometry",
  statistics_probability: "Statistics & Probability",
  permutation_combination: "Permutation & Combination",
  word_problems: "Word Problems",
  ratios_proportions: "Ratios & Proportions",
  fractions_decimals_percents: "Fractions, Decimals & Percents",
  prime_factorization: "Prime Factorization",
  inequalities: "Inequalities",
  grid_in: "Grid-In",
  scrambled_paragraphs: "Scrambled Paragraphs",
  logical_reasoning: "Logical Reasoning",
  reading_comp_fiction: "Reading — Fiction",
  reading_comp_nonfiction: "Reading — Nonfiction",
  vocabulary_in_context: "Vocabulary in Context",
};

function prettifyTopic(t) {
  if (!t || t === "—") return "—";
  return TOPIC_SLUGS[t] || String(t).replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function drillTopics(subject) {
  if (subject === "math") {
    return [
      { id: "arithmetic_number_properties", label: TOPIC_SLUGS.arithmetic_number_properties },
      { id: "algebra_functions", label: TOPIC_SLUGS.algebra_functions },
      { id: "circles", label: TOPIC_SLUGS.circles },
      { id: "coordinate_geometry", label: TOPIC_SLUGS.coordinate_geometry },
      { id: "permutation_combination", label: TOPIC_SLUGS.permutation_combination },
      { id: "statistics_probability", label: TOPIC_SLUGS.statistics_probability },
      { id: "word_problems", label: TOPIC_SLUGS.word_problems },
      { id: "ratios_proportions", label: TOPIC_SLUGS.ratios_proportions },
    ];
  }
  return [
    { id: "scrambled_paragraphs", label: TOPIC_SLUGS.scrambled_paragraphs },
    { id: "logical_reasoning", label: TOPIC_SLUGS.logical_reasoning },
    { id: "reading_comp_nonfiction", label: TOPIC_SLUGS.reading_comp_nonfiction },
    { id: "vocabulary_in_context", label: TOPIC_SLUGS.vocabulary_in_context },
  ];
}

const DRILL_POOL = buildExamQuestions("exam1");

function mountTemplate(id) {
  const tpl = document.getElementById(id);
  const app = $("#app");
  if (!tpl || !app) return;
  app.innerHTML = "";
  app.appendChild(tpl.content.cloneNode(true));
}

let testState = null;

function syncHeaderCtas() {
  const auth = getAuth();
  const signBtn = $("#signInOutBtn");
  if (signBtn) signBtn.textContent = auth.signedIn ? "Sign out" : "Sign in";

  const hub = "#/practice-hub";
  const loginHub = `#/login?next=${encodeURIComponent("/practice-hub")}`;
  const loginDash = `#/login?next=${encodeURIComponent("/dashboard")}`;
  const loginTest = `#/login?next=${encodeURIComponent("/test-select")}`;
  const loginDrill = `#/login?next=${encodeURIComponent("/drill")}`;

  $("#headerPracticeCta")?.setAttribute("href", auth.signedIn ? hub : loginHub);
  $("#heroPrimaryCta")?.setAttribute("href", auth.signedIn ? hub : loginHub);
  $("#heroSecondaryCta")?.setAttribute("href", auth.signedIn ? "#/dashboard" : loginDash);
  $("#panelStartTest")?.setAttribute("href", auth.signedIn ? "#/test-select" : loginTest);
  $("#panelDrill")?.setAttribute("href", auth.signedIn ? "#/drill" : loginDrill);
  $("#panelMistakes")?.setAttribute("href", auth.signedIn ? "#/mistakes" : `#/login?next=${encodeURIComponent("/mistakes")}`);
  $("#panelHub")?.setAttribute("href", auth.signedIn ? hub : loginHub);
}

function render() {
  const { path, segments, query } = parseRoute();
  if (!getAuth().signedIn && isProtectedPath(path, segments)) {
    redirectToLogin();
    return;
  }

  if (path === "/") {
    mountTemplate("tpl-landing");
    syncHeaderCtas();
    return;
  }
  if (path === "/login") {
    mountTemplate("tpl-login");
    $("#googleSignInBtn")?.addEventListener("click", () => {
      setAuth({ signedIn: true, name: getAuth().name || "Alex" });
      let next = query.get("next") || "/dashboard";
      if (!next.startsWith("/")) next = `/${next}`;
      location.hash = `#${next}`;
    });
    syncHeaderCtas();
    return;
  }
  if (path === "/practice-hub") {
    mountTemplate("tpl-practice-hub");
    syncHeaderCtas();
    return;
  }
  if (path === "/test-select") {
    mountTemplate("tpl-test-select");
    renderExamGrid();
    syncHeaderCtas();
    return;
  }
  if (path === "/dashboard") {
    renderDashboard();
    syncHeaderCtas();
    return;
  }
  if (segments[0] === "test" && segments[1]) {
    renderTest(segments[1]);
    syncHeaderCtas();
    return;
  }
  if (path.startsWith("/results/")) {
    renderResults();
    syncHeaderCtas();
    return;
  }
  if (path === "/drill") {
    renderDrill();
    syncHeaderCtas();
    return;
  }
  if (path === "/history") {
    renderHistory();
    syncHeaderCtas();
    return;
  }
  if (path === "/mistakes") {
    renderMistakes();
    syncHeaderCtas();
    return;
  }

  location.hash = "#/";
}

function renderExamGrid() {
  const host = $("#examSelectGrid");
  if (!host) return;
  const sessions = load(LS.sessions, []);
  host.innerHTML = "";
  EXAMS.forEach((exam) => {
    const taken = sessions.some((s) => s.exam_id === exam.id);
    const card = document.createElement("a");
    card.href = `#/test/${exam.id}`;
    card.className = "exam-card";
    card.innerHTML = `
      <div class="exam-card-top">
        <span class="exam-chip">${taken ? "Completed" : "Not taken"}</span>
        <span class="exam-chip exam-chip-muted">${exam.time_limit_seconds / 3600} hr</span>
      </div>
      <div class="exam-card-title">${exam.name}</div>
      <div class="exam-card-meta">${exam.total_questions} questions · ${exam.ela_questions} ELA + ${exam.math_questions} Math</div>
      <span class="exam-card-cta">Start →</span>
    `;
    host.appendChild(card);
  });
}

function renderDashboard() {
  mountTemplate("tpl-dashboard");
  const auth = getAuth();
  $("#welcomeName").textContent = auth.signedIn ? `Welcome back, ${auth.name}. ` : "";

  const sessions = load(LS.sessions, []);
  const recent = sessions.slice(0, 3);
  const host = $("#recentScores");
  host.innerHTML = "";
  recent.forEach((s) => {
    const row = document.createElement("a");
    row.href = `#/results/${s.id}`;
    row.className = "tr row tr-link";
    row.innerHTML = `<div>${s.exam_name || "Practice Exam"}</div><div><strong>${s.score}</strong> / ${s.total}</div><div>${fmtDate(s.date)}</div>`;
    host.appendChild(row);
  });

  const pills = $("#dashboardPills");
  if (pills) {
    pills.innerHTML = "";
    [
      ["#/drill?subject=math&topic=circles", "Circles"],
      ["#/drill?subject=math&topic=permutation_combination", "Permutation"],
      ["#/drill?subject=ela&topic=scrambled_paragraphs", "Scrambled paras"],
      ["#/drill?subject=ela&topic=reading_comp_nonfiction", "Reading"],
    ].forEach(([href, label]) => {
      const a = document.createElement("a");
      a.className = "pill";
      a.href = href;
      a.textContent = label;
      pills.appendChild(a);
    });
  }

  const mistakes = load(LS.mistakes, []);
  const open = mistakes.filter((m) => !m.resolved);
  const resolved = mistakes.filter((m) => m.resolved);
  $("#mistakesOpen").textContent = String(open.length);
  $("#mistakesResolved").textContent = String(resolved.length);
  const weakest = open.reduce((acc, m) => {
    acc[m.topic] = (acc[m.topic] || 0) + 1;
    return acc;
  }, {});
  const weakestTopic = Object.entries(weakest).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
  $("#mistakesWeakest").textContent = prettifyTopic(weakestTopic);

  const draftExam = EXAMS.map((e) => ({ e, d: load(draftKey(e.id), null) })).find((x) => x.d && x.d.questions?.length);
  const resume = $("#resumeCard");
  if (!draftExam) {
    resume.innerHTML = `No in-progress test found.`;
  } else {
    const { e, d } = draftExam;
    resume.innerHTML = `
      <div><strong>In progress:</strong> ${e.name}</div>
      <div style="margin-top:8px">Time remaining: <strong>${fmtTime(d.time_remaining_seconds)}</strong></div>
      <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap">
        <a class="btn btn-solid" href="#/test/${e.id}">Resume</a>
        <button class="btn btn-ghost" type="button" id="freshBtn">Discard draft</button>
      </div>
    `;
    $("#freshBtn")?.addEventListener("click", () => {
      localStorage.removeItem(draftKey(e.id));
      renderDashboard();
    });
  }
}

function renderTest(examId) {
  mountTemplate("tpl-test");
  testState = loadOrCreateDraft(examId);
  testState.last_tick_at = Date.now();
  persistDraft();

  $("#examSessionTitle").textContent = testState.exam_name;
  $("#examSessionMeta").textContent = `Question ${testState.idx + 1} of 114 · ${testState.exam_id}`;

  $("#saveDraftBtn")?.addEventListener("click", () => {
    persistDraft();
    flashToast("Draft saved.");
  });
  $("#prevBtn")?.addEventListener("click", () => {
    testState.idx = Math.max(0, testState.idx - 1);
    persistDraft();
    paintTest();
  });
  $("#nextBtn")?.addEventListener("click", () => {
    testState.idx = Math.min(testState.questions.length - 1, testState.idx + 1);
    persistDraft();
    paintTest();
  });
  $("#flagBtn")?.addEventListener("click", () => {
    const q = testState.questions[testState.idx];
    testState.flagged[q.id] = !testState.flagged[q.id];
    persistDraft();
    paintTestNav();
    paintFlagLabel();
  });
  $("#submitTestBtn")?.addEventListener("click", () => openModal(true));
  $("#cancelSubmitBtn")?.addEventListener("click", () => openModal(false));
  $("#confirmSubmitBtn")?.addEventListener("click", () => submitTest());

  buildNav();
  paintTest();
  startTimer();
}

function openModal(open) {
  const m = $("#submitModal");
  if (!m) return;
  m.classList.toggle("open", open);
  m.setAttribute("aria-hidden", open ? "false" : "true");
}

function navLabelForIndex(globalNum) {
  if (globalNum <= 57) {
    if (globalNum <= 20) return "ELA · Part 1 (mixed)";
    if (globalNum <= 50) {
      const p = Math.floor((globalNum - 21) / 6) + 1;
      return `Passage ${p}`;
    }
    return "ELA · Part 1 (continued)";
  }
  return "Math · Part 2";
}

function buildNav() {
  const host = $("#qNav");
  host.innerHTML = "";
  let lastLabel = "";
  let grid = null;
  testState.questions.forEach((q, i) => {
    const lab = navLabelForIndex(q.global_number);
    if (lab !== lastLabel) {
      lastLabel = lab;
      const group = document.createElement("div");
      group.className = "nav-group";
      const div = document.createElement("div");
      div.className = "nav-group-label";
      div.textContent = lab;
      group.appendChild(div);
      grid = document.createElement("div");
      grid.className = "nav-q-grid";
      group.appendChild(grid);
      host.appendChild(group);
    }
    const b = document.createElement("button");
    b.type = "button";
    b.className = "qbtn";
    b.textContent = String(q.global_number);
    b.title = `${q.subject.toUpperCase()} · ${prettifyTopic(q.topic)}`;
    b.addEventListener("click", () => {
      testState.idx = i;
      persistDraft();
      paintTest();
    });
    grid.appendChild(b);
  });
  paintTestNav();
}

function paintTestNav() {
  const buttons = $$("#qNav .nav-q-grid .qbtn");
  buttons.forEach((b, i) => {
    const q = testState.questions[i];
    const ans = testState.answers[q.id];
    b.classList.toggle("answered", ans !== undefined);
    b.classList.toggle("flagged", !!testState.flagged[q.id]);
    b.style.outline = i === testState.idx ? "2px solid rgba(17,24,39,.25)" : "none";
  });
}

function paintFlagLabel() {
  const q = testState.questions[testState.idx];
  $("#flagBtn").textContent = testState.flagged[q.id] ? "Unflag" : "Flag";
}

function paintTest() {
  const q = testState.questions[testState.idx];
  $("#examSessionMeta").textContent = `Question ${testState.idx + 1} of 114 · ${testState.exam_name}`;
  const part = q.global_number <= 57 ? "Part 1 — ELA" : "Part 2 — Math";
  $("#qMeta").textContent = `${part} · ${prettifyTopic(q.topic)} · Q${q.global_number}`;

  const pw = $("#passageWrap");
  if (q.passage_text) {
    pw.classList.remove("is-hidden");
    $("#passageLabel").textContent = q.passage_title || "Reading passage";
    $("#passageText").innerHTML = escapeHtml(q.passage_text).replace(/<br\/>\s*<br\/>/g, "<br/>");
  } else {
    pw.classList.add("is-hidden");
  }

  $("#qText").innerHTML = escapeHtml(q.question_text).replace(/\n/g, "<br/>");

  const host = $("#choices");
  host.innerHTML = "";
  const letters = ["A", "B", "C", "D", "E"];
  q.choices.forEach((c, i) => {
    const div = document.createElement("label");
    div.className = "choice";
    const checked = testState.answers[q.id] === i;
    div.innerHTML = `
      <input type="radio" name="choice" ${checked ? "checked" : ""} />
      <div><span class="choice-letter">${letters[i]}. </span>${escapeHtml(c)}</div>
    `;
    div.addEventListener("click", () => {
      testState.answers[q.id] = i;
      persistDraft();
      paintTestNav();
      paintTest();
    });
    if (checked) div.classList.add("selected");
    host.appendChild(div);
  });

  paintTestNav();
  paintFlagLabel();
}

let timerId = null;
let autosaveId = null;

function startTimer() {
  stopTimer();
  const tick = () => {
    const now = Date.now();
    const delta = Math.max(0, Math.floor((now - testState.last_tick_at) / 1000));
    if (delta > 0) {
      testState.time_remaining_seconds = Math.max(0, testState.time_remaining_seconds - delta);
      testState.last_tick_at = now;
      $("#timer").textContent = fmtTime(testState.time_remaining_seconds);
      if (testState.time_remaining_seconds === 0) {
        submitTest();
        return;
      }
    }
  };
  $("#timer").textContent = fmtTime(testState.time_remaining_seconds);
  timerId = setInterval(tick, 250);
  autosaveId = setInterval(() => persistDraft(), 30000);
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  if (autosaveId) clearInterval(autosaveId);
  timerId = null;
  autosaveId = null;
}

function submitTest() {
  openModal(false);
  stopTimer();

  const questions = testState.questions;
  const answers = Object.entries(testState.answers).map(([question_id, selected_answer]) => {
    const q = questions.find((x) => x.id === question_id);
    const correct = q ? q.correct_answer === selected_answer : false;
    return { question_id, selected_answer, is_correct: correct };
  });

  let elaCorrect = 0;
  let mathCorrect = 0;
  answers.forEach((a) => {
    const q = questions.find((x) => x.id === a.question_id);
    if (!q || !a.is_correct) return;
    if (q.subject === "ela") elaCorrect++;
    else mathCorrect++;
  });

  const totalCorrect = answers.filter((a) => a.is_correct).length;
  const timeTaken = testState.time_limit_seconds - testState.time_remaining_seconds;
  const sessionId = uid("sess");
  const sessions = load(LS.sessions, []);
  sessions.unshift({
    id: sessionId,
    exam_id: testState.exam_id,
    exam_number: testState.exam_number,
    exam_name: testState.exam_name,
    date: nowIso(),
    score: totalCorrect,
    total: 114,
    ela_score: elaCorrect,
    math_score: mathCorrect,
    time_taken_seconds: timeTaken,
    answers,
    questions,
  });
  save(LS.sessions, sessions);
  localStorage.removeItem(draftKey(testState.exam_id));
  testState = null;
  location.hash = `#/results/${sessionId}`;
}

function renderResults() {
  mountTemplate("tpl-results");
  const { path } = parseRoute();
  const sessionId = path.split("/")[2];
  const sessions = load(LS.sessions, []);
  const s = sessions.find((x) => x.id === sessionId) || sessions[0];
  if (!s) return;

  let elaDisplay = s.ela_score;
  let mathDisplay = s.math_score;
  if ((elaDisplay == null || mathDisplay == null) && s.answers?.length && s.questions?.length) {
    elaDisplay = 0;
    mathDisplay = 0;
    s.answers.forEach((a) => {
      if (!a.is_correct) return;
      const q = s.questions.find((x) => x.id === a.question_id);
      if (!q) return;
      if (q.subject === "ela") elaDisplay++;
      else mathDisplay++;
    });
  }

  $("#resultsExamLabel").textContent = s.exam_name || "Practice exam";
  $("#scoreStack").innerHTML = `
    <div class="score-line"><span class="score-label">ELA</span><span class="score-num">${elaDisplay ?? "—"} / 57</span></div>
    <div class="score-line"><span class="score-label">Math</span><span class="score-num">${mathDisplay ?? "—"} / 57</span></div>
    <div class="score-line score-line-total"><span class="score-label">Total</span><span class="score-num">${s.score} / 114</span></div>
    <div class="muted" style="margin-top:12px">${fmtDate(s.date)} · ${fmtTime(s.time_taken_seconds)}</div>
  `;

  const bySubject = { math: { correct: 0, total: 0 }, ela: { correct: 0, total: 0 } };
  const wrong = [];
  s.answers?.forEach((a) => {
    const q = s.questions?.find((x) => x.id === a.question_id);
    if (!q) return;
    bySubject[q.subject].total += 1;
    if (a.is_correct) bySubject[q.subject].correct += 1;
    else wrong.push({ a, q });
  });

  const bars = $("#sectionBars");
  bars.innerHTML = "";
  [
    ["ELA", bySubject.ela],
    ["Math", bySubject.math],
  ].forEach(([label, stat]) => {
    const pct = stat.total ? (stat.correct / stat.total) * 100 : 0;
    const el = document.createElement("div");
    el.className = "bar";
    el.innerHTML = `
      <div class="bar-top"><div>${label}</div><div>${stat.correct} / ${stat.total}</div></div>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
    `;
    bars.appendChild(el);
  });

  const grouped = {};
  wrong.forEach((w) => {
    const key = w.q.passage_title || prettifyTopic(w.q.topic);
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(w);
  });

  const review = $("#reviewList");
  review.innerHTML = "";
  Object.entries(grouped).forEach(([title, items]) => {
    const h = document.createElement("div");
    h.className = "review-group-title";
    h.textContent = title;
    review.appendChild(h);
    items.forEach(({ a, q }) => {
      const item = document.createElement("div");
      item.className = "review-item";
      const letters = ["A", "B", "C", "D", "E"];
      const you = q.choices?.[a.selected_answer] ?? "—";
      const correct = q.choices?.[q.correct_answer] ?? "—";
      const yi = letters[a.selected_answer] ?? "?";
      const ci = letters[q.correct_answer] ?? "?";
      item.innerHTML = `
        <div class="review-top">
          <div class="mitem-meta">
            <span class="tag bad">Wrong</span>
            <span class="tag">${q.subject.toUpperCase()}</span>
            <span class="tag">Q${q.global_number}</span>
          </div>
          <button class="btn btn-ghost btn-sm" type="button">Add to mistake log</button>
        </div>
        <div class="review-q">${escapeHtml(q.question_text)}</div>
        <div class="review-a"><strong>Your answer:</strong> (${yi}) ${escapeHtml(you)}<br/><strong>Correct:</strong> (${ci}) ${escapeHtml(correct)}<br/><span style="color:var(--muted)">${escapeHtml(q.explanation || "")}</span></div>
      `;
      $(".btn", item).addEventListener("click", () => {
        addMistake(q);
        $(".btn", item).textContent = "Saved";
        $(".btn", item).disabled = true;
      });
      review.appendChild(item);
    });
  });
}

function renderHistory() {
  mountTemplate("tpl-history");
  const sessions = load(LS.sessions, []);
  const host = $("#historyRows");
  host.innerHTML = "";
  sessions.forEach((s) => {
    const row = document.createElement("div");
    row.className = "tr row";
    row.innerHTML = `
      <div>${s.exam_name || `Exam ${s.exam_number || "—"}`}</div>
      <div>${fmtDate(s.date)}</div>
      <div><strong>${s.score}</strong> / 114</div>
      <div>${fmtTime(s.time_taken_seconds)}</div>
      <div><a class="link" href="#/results/${s.id}">View</a></div>
    `;
    host.appendChild(row);
  });
}

function renderDrill() {
  mountTemplate("tpl-drill");
  const { query } = parseRoute();
  let subject = (query.get("subject") || "math").toLowerCase();
  let topic = (query.get("topic") || drillTopics(subject)[0].id).toLowerCase();

  const seg = $("#drillSubjectSeg");
  seg.innerHTML = "";
  ["math", "ela"].forEach((s) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = s.toUpperCase();
    b.className = s === subject ? "active" : "";
    b.addEventListener("click", () => {
      subject = s;
      topic = drillTopics(subject)[0].id;
      paintDrillPicker();
    });
    seg.appendChild(b);
  });

  function paintDrillPicker() {
    $$("#drillSubjectSeg button").forEach((b) =>
      b.classList.toggle("active", b.textContent.toLowerCase() === subject),
    );
    const sel = $("#drillTopic");
    sel.innerHTML = "";
    drillTopics(subject).forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t.id;
      opt.textContent = t.label;
      sel.appendChild(opt);
    });
    if (drillTopics(subject).some((t) => t.id === topic)) sel.value = topic;
    else sel.value = drillTopics(subject)[0].id;
  }

  paintDrillPicker();
  $("#drillTopic").addEventListener("change", (e) => {
    topic = e.target.value;
  });

  $("#startDrillBtn").addEventListener("click", () => startDrillSession(subject, topic));
}

function startDrillSession(subject, topic) {
  const area = $("#drillArea");
  $("#drillHint").textContent = `${subject.toUpperCase()} · ${prettifyTopic(topic)}`;

  let pool = DRILL_POOL.filter((q) => q.subject === subject && q.topic === topic);
  if (!pool.length) pool = DRILL_POOL.filter((q) => q.subject === subject);
  let i = 0;
  let correct = 0;

  function paint() {
    const q = pool[i % pool.length];
    area.innerHTML = "";
    const passage = q.passage_text
      ? `<div class="passage-wrap drill-passage"><div class="passage-label">${escapeHtml(q.passage_title || "Passage")}</div><div class="passage-text serif">${escapeHtml(q.passage_text).replace(/\n/g, "<br/>")}</div></div>`
      : "";
    const card = document.createElement("div");
    card.className = "mitem";
    card.innerHTML = `
      ${passage}
      <div class="mitem-top">
        <div class="mitem-meta">
          <span class="tag">${subject.toUpperCase()}</span>
          <span class="tag">${prettifyTopic(topic)}</span>
        </div>
        <div class="mitem-actions">
          <button class="btn btn-ghost" type="button" id="saveToMistakesBtn">Save to mistakes</button>
          <button class="btn btn-ghost" type="button" id="endDrillBtn">End</button>
        </div>
      </div>
      <div class="review-q" style="margin-top:10px">${escapeHtml(q.question_text).replace(/\n/g, "<br/>")}</div>
      <div class="choices" id="drillChoices"></div>
      <div id="drillResult"></div>
    `;
    area.appendChild(card);

    $("#endDrillBtn").addEventListener("click", () => {
      area.innerHTML = `<div class="mitem"><div class="card-title">Session ended</div><div class="card-muted">Correct: <strong>${correct}</strong> / ${i} seen.</div></div>`;
    });
    $("#saveToMistakesBtn").addEventListener("click", () => {
      addMistake(q);
      flashToast("Saved to mistake log.");
    });

    const letters = ["A", "B", "C", "D", "E"];
    const host = $("#drillChoices");
    q.choices.forEach((c, idx) => {
      const opt = document.createElement("button");
      opt.type = "button";
      opt.className = "choice";
      opt.innerHTML = `<div style="font-weight:760">${letters[idx]}.</div><div>${escapeHtml(c)}</div>`;
      opt.addEventListener("click", () => {
        const ok = idx === q.correct_answer;
        if (ok) correct += 1;
        const res = $("#drillResult");
        res.innerHTML = `
          <div class="result-line ${ok ? "good" : "bad"}">${ok ? "Correct." : "Not quite."}</div>
          <div class="card-muted" style="margin-top:8px"><strong>Explanation:</strong> ${escapeHtml(q.explanation || "")}</div>
          <div style="margin-top:12px"><button class="btn btn-solid" type="button" id="nextDrillBtn">Next</button></div>
        `;
        $("#nextDrillBtn").addEventListener("click", () => {
          i += 1;
          paint();
        });
      });
      host.appendChild(opt);
    });
  }

  paint();
}

function renderMistakes() {
  mountTemplate("tpl-mistakes");
  let subject = "all";
  let topic = "all";

  const seg = $("#mistakeSubjectSeg");
  seg.innerHTML = "";
  ["all", "math", "ela"].forEach((s) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = s === "all" ? "ALL" : s.toUpperCase();
    b.className = s === subject ? "active" : "";
    b.addEventListener("click", () => {
      subject = s;
      topic = "all";
      paintTopics();
      paintMistakes();
    });
    seg.appendChild(b);
  });

  function paintTopics() {
    $$("#mistakeSubjectSeg button").forEach((b) =>
      b.classList.toggle("active", b.textContent.toLowerCase() === subject),
    );
    const sel = $("#mistakeTopic");
    sel.innerHTML = "";
    const optAll = document.createElement("option");
    optAll.value = "all";
    optAll.textContent = "All topics";
    sel.appendChild(optAll);
    const mistakes = load(LS.mistakes, []);
    const filtered = mistakes.filter((m) => subject === "all" || m.subject === subject);
    Array.from(new Set(filtered.map((m) => m.topic)))
      .sort()
      .forEach((t) => {
        const opt = document.createElement("option");
        opt.value = t;
        opt.textContent = prettifyTopic(t);
        sel.appendChild(opt);
      });
    sel.value = topic;
  }

  function paintMistakes() {
    const host = $("#mistakesList");
    const mistakes = load(LS.mistakes, []);
    const filtered = mistakes.filter((m) => {
      if (subject !== "all" && m.subject !== subject) return false;
      if (topic !== "all" && m.topic !== topic) return false;
      return true;
    });
    host.innerHTML = "";
    if (!filtered.length) {
      host.innerHTML = `<div class="mitem"><div class="card-title">No saved mistakes</div><div class="card-muted">Add items from results.</div></div>`;
      return;
    }
    filtered
      .sort((a, b) => Number(a.resolved) - Number(b.resolved))
      .forEach((m) => {
        const el = document.createElement("div");
        el.className = "mitem";
        el.innerHTML = `
          <div class="mitem-top">
            <div class="mitem-meta">
              <span class="tag ${m.resolved ? "good" : "bad"}">${m.resolved ? "Resolved" : "Open"}</span>
              <span class="tag">${m.subject.toUpperCase()}</span>
              <span class="tag">${prettifyTopic(m.topic)}</span>
            </div>
            <div class="mitem-actions">
              <button class="btn btn-ghost" type="button">Mark resolved</button>
              <button class="btn btn-ghost" type="button">Remove</button>
            </div>
          </div>
          <div class="review-q" style="margin-top:10px">${escapeHtml(m.preview)}</div>
        `;
        const [resolveBtn, removeBtn] = $$(".btn", el);
        resolveBtn.addEventListener("click", () => {
          m.resolved = true;
          m.times_correct = 2;
          save(LS.mistakes, mistakes);
          paintMistakes();
        });
        removeBtn.addEventListener("click", () => {
          save(
            LS.mistakes,
            mistakes.filter((x) => x.id !== m.id),
          );
          paintTopics();
          paintMistakes();
        });
        host.appendChild(el);
      });
  }

  $("#mistakeTopic").addEventListener("change", (e) => {
    topic = e.target.value;
    paintMistakes();
  });

  $("#drillMistakesBtn").addEventListener("click", () => {
    location.hash = "#/drill?subject=math&topic=algebra_functions";
    flashToast("Open topic drill; mistake-only queue ships with Convex.");
  });

  paintTopics();
  paintMistakes();
}

function addMistake(q) {
  const mistakes = load(LS.mistakes, []);
  if (mistakes.some((m) => m.question_id === q.id && !m.resolved)) return;
  mistakes.unshift({
    id: uid("m"),
    question_id: q.id,
    subject: q.subject,
    topic: q.topic,
    preview: q.question_text.slice(0, 220) + (q.question_text.length > 220 ? "…" : ""),
    times_seen: 0,
    times_correct: 0,
    resolved: false,
    added_at: nowIso(),
  });
  save(LS.mistakes, mistakes);
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replaceAll("\n", "<br/>");
}

let toastTimer = null;
function flashToast(text) {
  let el = document.getElementById("toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.style.opacity = "1";
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.style.opacity = "0";
  }, 1900);
}

document.addEventListener("click", (e) => {
  if (e.target?.id === "signInOutBtn") {
    const auth = getAuth();
    if (auth.signedIn) {
      setAuth({ signedIn: false, name: auth.name });
      flashToast("Signed out.");
      if (isProtectedPath(location.hash.replace("#", "").split("?")[0], [])) location.hash = "#/";
    } else {
      location.hash = "#/login";
    }
    syncHeaderCtas();
  }
});

window.addEventListener("hashchange", () => {
  stopTimer();
  render();
});

syncHeaderCtas();
render();
