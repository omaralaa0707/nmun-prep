// "In depth" sections, part 2: law, rights, security, development.
window.UNIT_DEPTH = Object.assign(window.UNIT_DEPTH || {}, {
intlaw: { mins: 8, html: `
<h3>Branches of international law</h3>
<table>
<tr><th>Branch</th><th>Covers</th><th>Key instruments</th></tr>
<tr><td>Public international law</td><td>Relations between states and international organizations ("made by states, for states")</td><td>UN Charter, VCLT, Vienna Convention on Diplomatic Relations</td></tr>
<tr><td>Private international law</td><td>Which country's law applies to cross-border disputes between individuals and companies</td><td>Hague Conference conventions, UNCITRAL model laws</td></tr>
<tr><td>International humanitarian law</td><td>Conduct of armed conflict</td><td>Geneva and Hague Conventions</td></tr>
<tr><td>International human rights law</td><td>States' duties towards individuals</td><td>UDHR, ICCPR, ICESCR, core treaties</td></tr>
<tr><td>International criminal law</td><td>Individual responsibility for the gravest crimes</td><td>Rome Statute, Genocide Convention (1948)</td></tr>
<tr><td>Law of the sea</td><td>Territorial sea (12 nautical miles), exclusive economic zone (200), high seas</td><td>UNCLOS (1982); the BBNJ "High Seas Treaty" (2023, in force January 2026)</td></tr>
<tr><td>Environmental, trade, space law</td><td>Climate, biodiversity, WTO rules, outer space</td><td>UNFCCC, CBD, GATT/WTO, Outer Space Treaty (1967)</td></tr>
</table>
<h3>Custom in more depth</h3>
<ul>
<li><strong>Examples of customary rules:</strong> diplomatic immunity (before it was codified in 1961), the prohibition of piracy, non-refoulement, the prohibition of torture, much of the UDHR and of IHL.</li>
<li><strong>State practice</strong> must be widespread, representative and consistent; <strong>opinio juris</strong> is the belief it is legally required, not just habit or courtesy.</li>
<li><strong>Evidence</strong> includes official statements, national laws and court decisions, votes on GA resolutions, and treaty ratification patterns. Judges identify custom; it is not written in one place, which makes it hard to prove.</li>
<li><strong>Persistent objector:</strong> a state that objected clearly and consistently while the rule was forming is not bound (<em>Anglo-Norwegian Fisheries</em>, ICJ 1951). Rarely successful, and never against jus cogens.</li>
<li><strong>Regional custom:</strong> possible between a group of states, but must be strictly proven (<em>Asylum</em> case, 1950: Colombia failed to prove a Latin American custom of diplomatic asylum).</li>
</ul>
<h3>General principles</h3>
<p>Principles found across national legal systems "recognized by civilized nations" (old wording now read as "recognized by the community of nations"): good faith, <em>pacta sunt servanda</em>, estoppel, <em>res judicata</em>, the duty to repair harm caused. They fill gaps and help interpret treaties. Many carry Latin names because they come from Roman law.</p>
<h3>Treaties: more vocabulary</h3>
<ul>
<li><strong>Depositary:</strong> the body that holds the treaty and receives ratifications; for most multilateral treaties, the UN Secretary-General.</li>
<li><strong>Interpretation</strong> (VCLT Arts. 31–32): ordinary meaning, in context, in light of object and purpose; preparatory work only as a supplement.</li>
<li><strong>Derogation:</strong> temporarily suspending some obligations in an emergency (ICCPR Art. 4), never for the right to life, ban on torture or slavery.</li>
<li><strong>Termination and withdrawal:</strong> as the treaty allows; otherwise only under VCLT rules (material breach, fundamental change of circumstances).</li>
<li><strong>Treaty vs convention:</strong> legally identical. In practice "convention" is used for broad multilateral treaties open to all on a general subject (UNFCCC, CEDAW), and "treaty" for more specific arrangements, often among particular parties (peace treaties, border treaties), though usage is loose (NPT is a "treaty" open to all).</li>
<li><strong>Covenant:</strong> a solemn treaty, mostly used for the two 1966 human rights covenants and the League Covenant.</li>
<li><strong>Charter:</strong> the constituent treaty of an organization (UN Charter, African Charter on Human and Peoples' Rights).</li>
</ul>
<h3>The Montevideo Convention in detail</h3>
<ul>
<li>Convention on the Rights and Duties of States, signed <strong>26 December 1933</strong> at the Seventh International Conference of American States in Montevideo, Uruguay; in force 26 December 1934. A regional treaty, but Article 1 is accepted as the customary definition of a state.</li>
<li><strong>Article 1:</strong> permanent population, defined territory, government, capacity to enter into relations with other states.</li>
<li><strong>Article 3:</strong> a state's political existence is independent of recognition (the <strong>declaratory theory</strong>).</li>
<li><strong>Article 8:</strong> no state has the right to intervene in the internal or external affairs of another.</li>
<li><strong>Article 11:</strong> no recognition of territory acquired by force.</li>
<li>The US (on intervention), Brazil and Peru signed with reservations.</li>
</ul>
<h3>Sovereignty in more depth</h3>
<ul>
<li><strong>Peace of Westphalia (1648):</strong> ended the Thirty Years' War and the Eighty Years' War; the origin of the idea of independent, equal territorial states with no outside authority over religion or internal affairs.</li>
<li><strong>Elements:</strong> supreme authority within the territory; independence from outside control; legal equality with other states; immunity of the state and its property from other states' courts.</li>
<li><strong>Internal vs external sovereignty:</strong> internal is effective control and law-making at home; external is independence and recognition in international relations.</li>
<li><strong>Sovereign immunity</strong> protects states from being sued in other states' courts without consent. The ICJ held in <em>Germany v. Italy</em> (2012) that immunity still applies even when serious violations (jus cogens) are alleged, so "violating jus cogens waives immunity" is not the current law, though it is a live debate, especially for individual officials before international courts.</li>
<li><strong>Sovereignty as responsibility</strong> (R2P) and human rights law have limited what states can do to their own people.</li>
</ul>
<h3>Self-determination vs territorial integrity</h3>
<p>Both are Charter principles. In the colonial context, self-determination meant independence (GA <span class="sym">1514 (XV)</span>, 1960; <span class="sym">1541 (XV)</span> on the three options of independence, free association or integration). Outside colonialism, international law generally favours <strong>internal</strong> self-determination (autonomy, participation) over secession; "remedial secession" for oppressed peoples is debated. The Friendly Relations Declaration (<span class="sym">A/RES/2625 (XXV)</span>, 1970) states both principles and is treated as reflecting custom.</p>
<h3>Key terms</h3>
<table>
<tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Recognition</td><td>A state's acknowledgement of another state or government; implies readiness for diplomatic relations; only states grant it</td></tr>
<tr><td>Legitimacy</td><td>Acceptance of a government's authority by its people and by other states</td></tr>
<tr><td>Secession</td><td>A part of a state breaking away to form a new state, or formally withdrawing from a body</td></tr>
<tr><td>Occupation</td><td>A foreign army's effective control of territory without sovereignty; governed by the Hague Regulations (1907) and Geneva Convention IV</td></tr>
<tr><td>Annexation</td><td>Claiming sovereignty over territory taken by force; unlawful and not to be recognized</td></tr>
<tr><td>Colonization</td><td>Settling among and establishing control over an area's indigenous people</td></tr>
<tr><td>Entry into force</td><td>When a legal instrument starts to have legal effect</td></tr>
<tr><td>Foreign policy</td><td>How a state deals with others, using diplomatic, political, economic, military and cultural tools</td></tr>
</table>` },

force: { mins: 5, html: `
<h3>The just war tradition behind jus ad bellum</h3>
<p>Older criteria for a lawful war: just cause, right (legitimate) authority, right intention, last resort, proportionality, and reasonable chance of success. The Charter replaced most of this with a single rule (Art. 2(4)) and two exceptions, but <strong>necessity</strong> and <strong>proportionality</strong> survive as conditions on self-defence.</p>
<h3>Self-defence debates</h3>
<ul>
<li><strong>The Caroline (1837):</strong> British forces destroyed a US steamer supplying Canadian rebels; US Secretary of State Webster set the test of a necessity "instant, overwhelming, leaving no choice of means, and no moment for deliberation".</li>
<li><strong>Anticipatory self-defence</strong> against an imminent attack is widely accepted; <strong>pre-emptive</strong> self-defence against a non-imminent threat (the 2003 Iraq war rationale) is not.</li>
<li><strong>Non-state actors:</strong> since 9/11 (<span class="sym">S/RES/1368</span>, <span class="sym">1373</span>) several states claim self-defence against groups in states "unable or unwilling" to stop them (e.g. against ISIL in Syria); contested.</li>
<li><strong>Collective self-defence:</strong> helping a victim state at its request (basis of NATO's Article 5).</li>
<li><strong>Intervention by invitation:</strong> force at the request of the recognized government; disputed when the government's legitimacy is in doubt.</li>
<li><strong>Humanitarian intervention</strong> without SC approval (Kosovo 1999) remains unlawful in most views; R2P channels it through the SC.</li>
</ul>
<h3>SC authorizations of force</h3>
<p>Korea (1950, possible because the USSR was boycotting), Iraq/Kuwait (<span class="sym">S/RES/678</span>, 1990), Somalia (1992), Haiti (1994), Bosnia (NATO air power, 1990s), Libya (<span class="sym">S/RES/1973</span>, 2011), and robust peacekeeping mandates such as the DR Congo Force Intervention Brigade (2013).</p>
<h3>IHL in more depth</h3>
<ul>
<li><strong>Combatants</strong> may be attacked and, if captured, are prisoners of war (Geneva Convention III); they cannot be prosecuted merely for fighting. <strong>Civilians</strong> are protected unless and for such time as they take a direct part in hostilities.</li>
<li><strong>International vs non-international armed conflicts:</strong> the full Conventions and Protocol I apply between states; civil wars are governed by <strong>Common Article 3</strong> (minimum humane treatment) and Protocol II.</li>
<li><strong>Occupation law:</strong> the occupier must maintain order and civilian life, may not transfer its own population into the territory (GC IV Art. 49) and must allow relief.</li>
<li><strong>Protected persons and objects:</strong> the wounded and sick, medical staff and hospitals, humanitarian workers, cultural property (Hague Convention 1954), objects indispensable to survival (food, water).</li>
<li><strong>Weapons law:</strong> bans on chemical and biological weapons, anti-personnel mines (Ottawa 1997), cluster munitions (Oslo 2008), blinding lasers; the CCW framework; weapons reviews for new technology (Additional Protocol I Art. 36), which is where the debate on autonomous weapons sits.</li>
<li><strong>Enforcement:</strong> national courts, universal jurisdiction (states can prosecute grave breaches wherever committed), ad hoc tribunals, and the ICC.</li>
</ul>
<h3>The four ICC crimes</h3>
<table>
<tr><th>Crime</th><th>Core definition</th></tr>
<tr><td>Genocide</td><td>Acts committed with intent to destroy, in whole or in part, a national, ethnical, racial or religious group (Genocide Convention 1948)</td></tr>
<tr><td>Crimes against humanity</td><td>Murder, extermination, deportation, torture, rape, persecution and similar acts as part of a widespread or systematic attack on civilians</td></tr>
<tr><td>War crimes</td><td>Grave breaches of the Geneva Conventions and other serious IHL violations</td></tr>
<tr><td>Aggression</td><td>Planning or executing an act of aggression that manifestly violates the Charter, by a political or military leader (jurisdiction activated 2018)</td></tr>
</table>
<p><strong>Ethnic cleansing</strong> is not a separate legal crime: it is a political term for forced removal of a group, usually prosecuted as crimes against humanity or war crimes, which is why R2P lists it separately.</p>` },

hr: { mins: 10, html: `
<h3>All nine core treaties and their monitoring committees</h3>
<table>
<tr><th>Treaty</th><th>Adopted</th><th>Treaty body</th></tr>
<tr><td>Convention on the Elimination of Racial Discrimination (ICERD)</td><td class="mono">1965</td><td>Committee on the Elimination of Racial Discrimination</td></tr>
<tr><td>ICCPR</td><td class="mono">1966</td><td>Human Rights Committee</td></tr>
<tr><td>ICESCR</td><td class="mono">1966</td><td>Committee on Economic, Social and Cultural Rights</td></tr>
<tr><td>CEDAW (women)</td><td class="mono">1979</td><td>CEDAW Committee</td></tr>
<tr><td>Convention against Torture (CAT)</td><td class="mono">1984</td><td>Committee against Torture (plus a Subcommittee on Prevention)</td></tr>
<tr><td>Convention on the Rights of the Child (CRC)</td><td class="mono">1989</td><td>Committee on the Rights of the Child</td></tr>
<tr><td>Migrant Workers Convention (ICRMW)</td><td class="mono">1990</td><td>Committee on Migrant Workers (few destination states have joined)</td></tr>
<tr><td>CRPD (persons with disabilities)</td><td class="mono">2006</td><td>Committee on the Rights of Persons with Disabilities</td></tr>
<tr><td>Enforced Disappearance (CPED)</td><td class="mono">2006</td><td>Committee on Enforced Disappearances</td></tr>
</table>
<p>Treaty bodies are committees of <strong>independent experts</strong> (not states) that review periodic state reports, issue "concluding observations" and "general comments", and, where states accept it, hear individual complaints. Don't confuse the <strong>Human Rights Committee</strong> (ICCPR treaty body) with the <strong>Human Rights Council</strong> (intergovernmental body of 47 states).</p>
<h3>UDHR and the covenants: more detail</h3>
<ul>
<li>The UDHR was drafted by a committee chaired by Eleanor Roosevelt, with René Cassin (France), Charles Malik (Lebanon), P.C. Chang (China) and others. Adopted in Paris on 10 December 1948 by 48 votes, 0 against, 8 abstentions (the Soviet bloc, South Africa and Saudi Arabia).</li>
<li>Structure: preamble and 30 articles; Arts. 3–21 civil and political rights, Arts. 22–27 economic, social and cultural rights. Art. 18 freedom of religion; Art. 19 freedom of opinion and expression.</li>
<li>ICESCR: preamble and 31 articles in five parts; the Optional Protocol (2008) allows individual complaints. ICCPR: preamble and 53 articles in six parts.</li>
<li><strong>"Three generations" of rights</strong>: civil and political; economic, social and cultural; collective rights (development, a healthy environment, peace). The 1993 Vienna Declaration rejected ranking them: all are "universal, indivisible, interdependent and interrelated".</li>
</ul>
<h3>The HRC year and leadership</h3>
<ul>
<li>Each year is a "cycle" (January–December) with three regular sessions: roughly <strong>February–April</strong> (the longest, about six weeks), <strong>June–July</strong> and <strong>September–October</strong>. Sessions are numbered consecutively (the 60th was in September–October 2025).</li>
<li>Recent Presidents: 2024 Omar Zniber (Morocco); 2025 Jürg Lauber (Switzerland); 2026 Sidharto Reza Suryodipuro (Indonesia). The first President (2006) was Luis Alfonso de Alba (Mexico).</li>
<li><strong>The Bureau</strong> is the President and four Vice-Presidents, one per regional group; one Vice-President also serves as Rapporteur. It handles procedural and organizational matters.</li>
<li><strong>Funding:</strong> the UN regular budget plus voluntary contributions to OHCHR (the annual UN Human Rights Appeal); chronic underfunding is a recurring problem.</li>
</ul>
<h3>The UPR step by step</h3>
<ol>
<li>Three documents: the state's national report; a UN compilation (from treaty bodies and Special Procedures); a stakeholder summary (NGOs, national human rights institutions).</li>
<li>Review in the <strong>UPR Working Group</strong> (all 47 HRC members; any UN member may speak), three and a half hours per state, with a "troika" of three rapporteur states drawn by lot.</li>
<li>Other states make recommendations; the state under review "supports" or "notes" each.</li>
<li>The HRC adopts the outcome at its next session; implementation is checked at the next review.</li>
</ol>
<p>Pace: three Working Group sessions a year, 14 states each, 42 a year, all 193 in a 4.5-year cycle (HRC resolution 16/21). The fourth cycle started in November 2022.</p>
<h3>Special Procedures in practice</h3>
<ul>
<li>About 46 thematic and 14 country mandates. Examples of thematic mandates: freedom of expression, human rights defenders, violence against women, torture, the right to a healthy environment, the rights of persons with disabilities, extreme poverty, contemporary racism, sale and sexual exploitation of children, rights of Indigenous Peoples. Country mandates include Myanmar, the DPRK, Iran, Afghanistan, Belarus, Syria and the Occupied Palestinian Territories.</li>
<li>Mandate holders are appointed by the HRC on the President's proposal, serve unpaid in their personal capacity, conduct country visits (only with the state's invitation), send communications to governments, and report annually to the HRC and often the GA Third Committee.</li>
<li>Controversy example: in July 2025 the United States imposed sanctions on Francesca Albanese, Special Rapporteur on the Occupied Palestinian Territories, after her reports accused Israel of genocide and named companies; many states and UN experts condemned the move.</li>
</ul>
<h3>Advisory Committee and Complaint Procedure details</h3>
<ul>
<li><strong>Advisory Committee:</strong> 18 independent experts nominated by governments and elected by the HRC (normally at its September session), three-year terms renewable once; meets twice a year (one week in February, one in August); first met in August 2008; produces studies only when the HRC requests them; cannot adopt resolutions.</li>
<li><strong>Complaint Procedure:</strong> confidential, for consistent patterns of gross violations. (1) Initial screening by the Chair of the <strong>Working Group on Communications</strong> with the Secretariat: in an official UN language, not manifestly politically motivated or abusive, domestic remedies tried. (2) The Working Group on Communications (meets twice a year) dismisses, asks for more information or passes it on. (3) The <strong>Working Group on Situations</strong> (twice a year) reports to the HRC on patterns. (4) The HRC, usually in private, can end the review, keep it under review, appoint an expert, make it public, or recommend OHCHR technical assistance.</li>
</ul>
<h3>Other HRC mechanisms</h3>
<ul>
<li><strong>Commissions of inquiry and fact-finding missions</strong> (Syria since 2011, Myanmar, Ukraine, Sudan, Venezuela, the Occupied Palestinian Territory and Israel since 2021) gather evidence for accountability.</li>
<li><strong>Open-ended intergovernmental working groups</strong> negotiate new instruments (e.g. on business and human rights, private military and security companies, the right to development). "Open-ended" means any UN member can join; "intergovernmental" means negotiators are states, with NGOs as observers.</li>
<li><strong>Expert mechanisms</strong> (e.g. the Expert Mechanism on the Rights of Indigenous Peoples) and <strong>forums</strong> (Social Forum, Forum on Minority Issues, Forum on Business and Human Rights) meet annually.</li>
</ul>
<h3>Common HRC questions</h3>
<table>
<tr><th>Question</th><th>Answer</th></tr>
<tr><td>Are HRC resolutions binding?</td><td>No. Their weight comes from scrutiny, investigations and the norms they build on, many of which are binding treaty or customary law</td></tr>
<tr><td>Is the HRC in the Charter?</td><td>No. It is a GA subsidiary organ created under Article 22</td></tr>
<tr><td>Can members be suspended?</td><td>Yes, by two-thirds of the GA for gross and systematic violations: Libya (March 2011, reinstated November 2011), Russia (April 2022)</td></tr>
<tr><td>Who has left?</td><td>The US withdrew in 2018, returned (elected 2021), and withdrew again in 2025</td></tr>
<tr><td>Main criticisms</td><td>Members with poor records (election is not competitive in many regions); selectivity (a permanent agenda item on Israel); politicized votes; limited follow-up</td></tr>
<tr><td>Relationship with OHCHR</td><td>OHCHR is its secretariat: organizes sessions, prepares reports, supports Special Procedures and investigations</td></tr>
</table>
<h3>OHCHR in more depth</h3>
<p>Created by <span class="sym">A/RES/48/141</span> (20 December 1993), succeeding the UN Centre for Human Rights. Based in Geneva with an office in New York and field presences in dozens of countries. High Commissioners: José Ayala-Lasso (Ecuador, first, 1994), Mary Robinson, Sérgio Vieira de Mello (killed in Baghdad, 2003), Louise Arbour, Navi Pillay, Zeid Ra'ad Al Hussein, Michelle Bachelet (Chile, 2018–22), Volker Türk (Austria, since 2022). Its work: supports the HRC and treaty bodies, monitors and reports, provides technical cooperation and capacity-building to states and national human rights institutions (which should meet the <strong>Paris Principles</strong>, 1993), and mainstreams human rights across the UN.</p>` },

r2p: { mins: 4, html: `
<h3>Key moments</h3>
<table>
<tr><th>Year</th><th>Event</th></tr>
<tr><td class="mono">1999</td><td>Kosovo: NATO acts without the SC; Kofi Annan asks how to reconcile sovereignty with stopping mass atrocities</td></tr>
<tr><td class="mono">2001</td><td>ICISS report "The Responsibility to Protect" (co-chaired by Gareth Evans and Mohamed Sahnoun)</td></tr>
<tr><td class="mono">2005</td><td>World Summit Outcome paras 138–139; the SC first refers to R2P in <span class="sym">S/RES/1674</span> (2006) on protection of civilians</td></tr>
<tr><td class="mono">2008</td><td>Kenya post-election violence: mediation led by Kofi Annan, often cited as successful pillar 2 prevention</td></tr>
<tr><td class="mono">2009</td><td>Ban Ki-moon's report sets out the three pillars; the GA holds its first R2P debate</td></tr>
<tr><td class="mono">2011</td><td>Libya (<span class="sym">S/RES/1970</span>, 1973) and Côte d'Ivoire (<span class="sym">S/RES/1975</span>); Brazil proposes "Responsibility while Protecting"</td></tr>
<tr><td class="mono">2011–</td><td>Syria: repeated Russian and Chinese vetoes; R2P's credibility questioned</td></tr>
<tr><td class="mono">2015</td><td>France–Mexico veto restraint declaration; ACT Code of Conduct</td></tr>
<tr><td class="mono">2021</td><td>R2P becomes a formal item on the GA agenda (annual debate on the SG's report)</td></tr>
</table>
<h3>Who works on it</h3>
<p>The <strong>Special Adviser on the Responsibility to Protect</strong> and the <strong>Special Adviser on the Prevention of Genocide</strong> share a joint office, which uses a Framework of Analysis for Atrocity Crimes for early warning. More than 60 states have appointed national R2P focal points. The SC, HRC and GA have all referred to R2P in many resolutions, most often to the state's primary responsibility (pillar 1).</p>
<h3>Arguments for and against</h3>
<table>
<tr><th>Supporters</th><th>Critics</th></tr>
<tr><td>Sovereignty cannot shield mass atrocities; Rwanda and Srebrenica show the cost of inaction; most of R2P is prevention and assistance, which nearly all states support; it channels force through the SC rather than unilateral action</td><td>Pillar 3 can be a pretext for regime change (Libya); applied selectively depending on great-power interests; the veto blocks it where most needed (Syria); risk to the sovereignty of weaker states</td></tr>
</table>
<p>A balanced line for an interview: R2P is widely accepted as a principle and in its preventive pillars, while pillar 3 remains contested; the realistic debate today is about prevention, early warning and veto restraint.</p>` },

peace: { mins: 7, html: `
<h3>Peacekeeping history in phases</h3>
<table>
<tr><th>Period</th><th>Character</th><th>Examples</th></tr>
<tr><td class="mono">1948–1988</td><td>Cold War: mostly unarmed observers and lightly armed buffer forces monitoring ceasefires between states; 13 missions</td><td>UNTSO, UNMOGIP, UNEF I (1956–67), ONUC (Congo, 1960–64), UNFICYP (1964), UNEF II (1973), UNDOF (1974), UNIFIL (1978); short missions in Yemen, West New Guinea and the Dominican Republic</td></tr>
<tr><td class="mono">1989–1999</td><td>Post-Cold War surge: complex missions inside states, elections, transitional administrations; then failures</td><td>Namibia (UNTAG), Cambodia (UNTAC), Mozambique; failures in Somalia (1993), Rwanda (1994), Srebrenica (1995)</td></tr>
<tr><td class="mono">2000s–2010s</td><td>Large, multidimensional missions with protection-of-civilians mandates under Chapter VII</td><td>MONUC/MONUSCO, UNMIL (Liberia), UNAMID (Darfur, with the AU), MINUSTAH (Haiti), MINUSMA (Mali)</td></tr>
<tr><td class="mono">2020s</td><td>Contraction: host governments asking missions to leave, budget cuts, more reliance on regional forces</td><td>MINUSMA closed (2023), UNAMID ended (2020), MONUSCO drawing down, UNIFIL to end after 2026</td></tr>
</table>
<h3>How a mission is created and run</h3>
<ol>
<li>The SC adopts a resolution with a <strong>mandate</strong> (tasks, size, duration, usually renewed every year).</li>
<li>The Secretariat (DPO with DOS) plans and asks member states for troops and police; the GA Fifth Committee approves the budget.</li>
<li>A Special Representative of the Secretary-General heads the mission; a Force Commander leads the military component.</li>
<li>Troop-contributing countries keep command over discipline and criminal jurisdiction over their soldiers; the UN reimburses them per soldier.</li>
</ol>
<h3>Facts that come up</h3>
<ul>
<li><strong>Blue helmets and berets</strong> signal neutrality and UN authority; soldiers keep their national uniforms and weapons, supplied by their governments.</li>
<li>Uniformed personnel are nominated by their governments (you can't apply individually); civilians are recruited directly by the UN or through UN Volunteers.</li>
<li>More than 4,000 peacekeepers have died since 1948; the deadliest missions include ONUC, UNIFIL and MINUSMA. Attacks on peacekeepers can be war crimes.</li>
<li>Nobel Peace Prize 1988 for UN peacekeeping; Lester Pearson won in 1957 for UNEF.</li>
<li>Largest troop contributors are South Asian and African states (Nepal, Bangladesh, India, Rwanda, Pakistan, Ghana); Egypt is consistently among the top contributors. The largest funders of the peacekeeping budget are the US and China.</li>
<li>Women are still under 10% of military peacekeepers; the UN has set gender targets under its Uniformed Gender Parity Strategy.</li>
<li><strong>Scandals:</strong> cholera introduced to Haiti by peacekeepers (2010, about 10,000 deaths; the UN apologized in 2016); sexual exploitation and abuse in several missions, leading to a zero-tolerance policy.</li>
</ul>
<h3>Peacekeeping vs other tools</h3>
<table>
<tr><th>Tool</th><th>What it is</th></tr>
<tr><td>Preventive diplomacy</td><td>Action to stop disputes escalating: envoys, good offices, early warning</td></tr>
<tr><td>Peacemaking</td><td>Bringing parties to agreement, mainly by negotiation and mediation (Chapter VI)</td></tr>
<tr><td>Peacekeeping</td><td>Deployed presence with consent to help implement a ceasefire or peace agreement</td></tr>
<tr><td>Peace enforcement</td><td>Coercive force authorized under Chapter VII, possibly without consent (e.g. Korea, Kuwait, or AU forces in Somalia)</td></tr>
<tr><td>Peacebuilding</td><td>Long-term work on the causes of conflict: institutions, rule of law, economy, reconciliation</td></tr>
<tr><td>Special political missions</td><td>Civilian missions run by DPPA (UNAMA in Afghanistan, UNSMIL in Libya, envoy offices)</td></tr>
</table>
<h3>The PBC in more depth</h3>
<ul>
<li>It works through <strong>country configurations</strong> (Burundi, Sierra Leone, Liberia, Guinea-Bissau, Central African Republic, Guinea) chaired by a member state, and increasingly through flexible meetings on regions (Sahel, Great Lakes, West Africa, Colombia, the Gambia) at a country's request.</li>
<li>Its added value: <strong>convening</strong> (governments, international financial institutions, regional bodies, civil society, women and youth), <strong>sustained attention</strong> after the SC moves on, <strong>advice</strong> to the SC and GA, and <strong>resource mobilization</strong>.</li>
<li>The <strong>Peacebuilding Fund</strong> (2006) has allocated over $1.5 billion to dozens of countries; it is fast and risk-tolerant, often first money in. The GA agreed to give it some assessed funding from 2025.</li>
<li>Main criticism: no power or money of its own beyond the Fund; its influence depends on whether the SC listens to its advice.</li>
</ul>` },

disarm: { mins: 6, html: `
<h3>The nuclear-armed states</h3>
<table>
<tr><th>State</th><th>Status</th></tr>
<tr><td>US, Russia, UK, France, China</td><td>NPT nuclear-weapon states (tested before 1967); also the P5</td></tr>
<tr><td>India, Pakistan</td><td>Never joined the NPT; tested in 1998</td></tr>
<tr><td>Israel</td><td>Never joined; neither confirms nor denies its arsenal ("ambiguity")</td></tr>
<tr><td>DPRK</td><td>Announced NPT withdrawal 2003; six nuclear tests 2006–2017; under SC sanctions</td></tr>
</table>
<p>About 12,000 warheads exist worldwide, about 90% held by Russia and the US. <strong>New START</strong>, the last US–Russia arms control treaty, expired in February 2026. <strong>South Africa</strong> is the only state to have built and then dismantled its own nuclear weapons; it joined the NPT in <strong>1991</strong>. Ukraine, Belarus and Kazakhstan gave up Soviet weapons on their soil in the 1990s.</p>
<h3>NPT Review Conferences</h3>
<table>
<tr><th>Year</th><th>Outcome</th></tr>
<tr><td class="mono">1995</td><td>Indefinite extension, with a resolution on a Middle East zone free of weapons of mass destruction (the price for Arab states' agreement)</td></tr>
<tr><td class="mono">2000</td><td>"13 practical steps" towards disarmament</td></tr>
<tr><td class="mono">2005</td><td>Failed</td></tr>
<tr><td class="mono">2010</td><td>64-point action plan; last successful final document</td></tr>
<tr><td class="mono">2015, 2022, 2026</td><td>Failed (2022: Russia blocked over Zaporizhzhia language; 2026: disputes including Iran)</td></tr>
</table>
<p>The Middle East zone remains unrealized; since 2019 a UN conference, pushed by Egypt and Arab states, meets annually on it, without Israel's participation.</p>
<h3>The IAEA in more depth</h3>
<ul>
<li>Founded 1957 under its own Statute; 180+ member states; reports annually to the GA and, on safeguards non-compliance, to the SC.</li>
<li><strong>Board of Governors</strong> (35 members) makes most decisions (e.g. finding Iran in non-compliance); the <strong>General Conference</strong> (all members) meets each September and approves the budget.</li>
<li><strong>Safeguards:</strong> comprehensive safeguards agreements for NPT non-nuclear states; the <strong>Additional Protocol</strong> (1997) allows short-notice inspections of undeclared sites.</li>
<li><strong>Nuclear security in war:</strong> Grossi's seven indispensable pillars (2022) include physical integrity of facilities, working safety systems, staff able to work without pressure, secure off-site power, supply chains, radiation monitoring and communication with the regulator. IAEA teams have been stationed at Ukraine's nuclear plants since 2022.</li>
<li><strong>Development:</strong> technical cooperation in cancer care (Rays of Hope), food and agriculture (Atoms4Food with the FAO), zoonotic disease (ZODIAC), water and plastic pollution (NUTEC Plastics).</li>
</ul>
<h3>Iran in brief</h3>
<p>The 2015 Joint Comprehensive Plan of Action (endorsed by <span class="sym">S/RES/2231</span>) limited enrichment in exchange for sanctions relief. The US left in 2018; Iran then expanded enrichment to 60%. In June 2025 Israel and the US struck Iranian nuclear facilities; Iran suspended cooperation with the IAEA. The E3 (France, Germany, UK) triggered the "snapback" and UN sanctions returned in late September 2025.</p>
<h3>Conventional arms and new domains</h3>
<ul>
<li><strong>Small arms:</strong> the UN Programme of Action (2001) and the Arms Trade Treaty (2013).</li>
<li><strong>Landmines and cluster munitions:</strong> Ottawa Convention (1997), Convention on Cluster Munitions (2008).</li>
<li><strong>Outer space:</strong> Outer Space Treaty (1967) bans nuclear weapons in orbit; talks on preventing an arms race in outer space (PAROS).</li>
<li><strong>Cyberspace:</strong> GA open-ended working groups on ICT security since 2019 agreed non-binding norms of responsible state behaviour and a permanent mechanism.</li>
<li><strong>Autonomous weapons:</strong> CCW Group of Governmental Experts; GA resolutions since 2023; calls for a treaty.</li>
</ul>` },

dev: { mins: 7, html: `
<h3>The 2030 Agenda in more depth</h3>
<ul>
<li>Built around the "5 Ps": <strong>People, Planet, Prosperity, Peace, Partnership</strong>; pledge to "leave no one behind".</li>
<li>Negotiated by all member states (the MDGs were drafted largely by UN staff), after an Open Working Group of the GA proposed the goals.</li>
<li>Indicators (about 230) are set by the UN Statistical Commission; progress is tracked in the SG's annual SDG Report.</li>
<li>Follow-up: the HLPF reviews a set of goals each year in depth; states present VNRs voluntarily (most states have done at least one).</li>
</ul>
<h3>The eight MDGs and why they fell short</h3>
<p>(1) End extreme poverty and hunger; (2) universal primary education; (3) gender equality; (4) reduce child mortality; (5) improve maternal health; (6) combat HIV/AIDS, malaria and other diseases; (7) environmental sustainability; (8) global partnership for development. Successes: extreme poverty roughly halved (largely thanks to China and India), primary enrolment and child survival rose. Weaknesses: designed top-down, applied only to developing countries, silent on inequality, governance, peace and climate, and uneven progress, especially in sub-Saharan Africa and conflict-affected states.</p>
<h3>Development financing history</h3>
<table>
<tr><th>Year</th><th>Conference</th><th>Outcome</th></tr>
<tr><td class="mono">2002</td><td>Monterrey</td><td>Monterrey Consensus: aid, trade, debt, domestic resources</td></tr>
<tr><td class="mono">2008</td><td>Doha</td><td>Review amid the financial crisis</td></tr>
<tr><td class="mono">2015</td><td>Addis Ababa</td><td>Addis Ababa Action Agenda, financing framework for the SDGs</td></tr>
<tr><td class="mono">2025</td><td>Sevilla (FfD4)</td><td>Compromiso de Sevilla: debt, tax cooperation, multilateral development bank reform; the US did not join</td></tr>
</table>
<p>Other key groups: <strong>Least Developed Countries</strong> (about 44; Doha Programme of Action 2022–2031), <strong>Landlocked Developing Countries</strong> (32), <strong>Small Island Developing States</strong> (Antigua and Barbuda Agenda, 2024).</p>
<h3>Climate in more depth</h3>
<ul>
<li><strong>IPCC</strong> (1988, set up by WMO and UNEP) assesses the science; its 2021–23 Sixth Assessment found human influence on warming "unequivocal".</li>
<li><strong>Rio Earth Summit (1992)</strong> produced the Rio Declaration, Agenda 21, the UNFCCC, the CBD and the process leading to the UNCCD (1994).</li>
<li><strong>Kyoto (1997):</strong> binding targets for developed (Annex I) countries only; the US never ratified; second period agreed in Doha (2012).</li>
<li><strong>Copenhagen (COP15, 2009)</strong> failed to agree a successor, but produced the pledge of $100 billion a year in climate finance by 2020 (reached only in 2022).</li>
<li><strong>Paris (2015):</strong> bottom-up NDCs from all parties, a "ratchet" to raise ambition every five years, transparency rules, adaptation goals, carbon markets (Art. 6) and loss and damage (Art. 8).</li>
<li>Recent COPs: <strong>COP26 Glasgow</strong> (2021, "phase down" coal); <strong>COP27 Sharm el-Sheikh</strong> (2022, hosted by Egypt: agreed to create a loss and damage fund); <strong>COP28 Dubai</strong> (2023, first Global Stocktake: "transitioning away from fossil fuels", fund made operational); <strong>COP29 Baku</strong> (2024, $300 billion a year by 2035); <strong>COP30 Belém</strong> (2025); <strong>COP31 Antalya</strong> (November 2026).</li>
<li>The US withdrew from the Paris Agreement again (effective January 2026).</li>
</ul>
<h3>Other environmental milestones</h3>
<ul>
<li><strong>Montreal Protocol</strong> (1987) on ozone-depleting substances: universally ratified, often called the most successful environmental treaty.</li>
<li><strong>Kunming-Montreal Global Biodiversity Framework</strong> (2022): protect 30% of land and sea by 2030 ("30x30").</li>
<li><strong>High Seas Treaty (BBNJ)</strong>, adopted 2023, in force January 2026: marine protected areas in waters beyond national jurisdiction.</li>
<li><strong>Plastics treaty</strong> negotiations (since 2022) failed to agree a text in 2024 and 2025.</li>
</ul>` },
});

// New units, inserted after the unit named in "after".
window.UNITS_NEW = [
{
after: 'system', id: 'groups', group: 'UN foundations', title: 'Regional groups and negotiating blocs', mins: 8,
html: `
<p>Most UN negotiation happens through groups. Knowing which groups your country belongs to tells you who your natural allies are, and panels like to ask it.</p>
<h2>The five regional groups</h2>
<p>Used for <strong>elections</strong>: seats on the SC, ECOSOC, HRC and other bodies, and the rotation of the GA presidency, are shared out by region.</p>
<table>
<tr><th>Group</th><th>Members</th><th>Notes</th></tr>
<tr><td>African Group</td><td class="mono">54</td><td>Largest group; coordinates closely with the AU</td></tr>
<tr><td>Asia-Pacific Group</td><td class="mono">53</td><td>Stretches from Cyprus and the Gulf to the Pacific islands</td></tr>
<tr><td>Eastern European Group</td><td class="mono">23</td><td>Former Soviet-bloc states</td></tr>
<tr><td>Latin American and Caribbean Group (GRULAC)</td><td class="mono">33</td><td></td></tr>
<tr><td>Western European and Others Group (WEOG)</td><td class="mono">28</td><td>Includes Australia, Canada, New Zealand, Israel and Türkiye (Türkiye also takes part in Asia-Pacific). The US is not a member but attends as an observer and counts as WEOG for elections</td></tr>
</table>
<p>These groups have no Charter basis: they are a practice from the 1960s. Arab states are split between Africa and Asia-Pacific, so the <strong>Arab Group</strong> coordinates across them (and one SC seat rotates as an "Arab swing seat").</p>
<h2>Political and negotiating blocs</h2>
<table>
<tr><th>Bloc</th><th>Size</th><th>What it does</th></tr>
<tr><td><strong>Group of 77 and China</strong></td><td class="mono">~134</td><td>Largest developing-country coalition (founded 1964 by 77 states); negotiates as one in the Second and Fifth Committees, on development, finance and climate. Chair rotates yearly</td></tr>
<tr><td><strong>Non-Aligned Movement (NAM)</strong></td><td class="mono">120</td><td>Founded in Belgrade in 1961 (roots in the 1955 Bandung Conference) by states not aligned with either Cold War bloc; led by figures such as Nasser, Nehru, Tito and Sukarno; active on sovereignty, disarmament and Palestine</td></tr>
<tr><td><strong>Organisation of Islamic Cooperation (OIC)</strong></td><td class="mono">57</td><td>Largest group after the UN; active on Palestine, religious defamation and Islamophobia (e.g. the GA's International Day to Combat Islamophobia)</td></tr>
<tr><td><strong>African Union (AU)</strong></td><td class="mono">55</td><td>Common African positions (e.g. Ezulwini Consensus on SC reform); the AU Peace and Security Council works with the UN SC</td></tr>
<tr><td><strong>Arab League</strong></td><td class="mono">22</td><td>Arab Group positions in New York</td></tr>
<tr><td><strong>European Union</strong></td><td class="mono">27</td><td>Speaks with one voice in many committees; enhanced GA observer status since 2011</td></tr>
<tr><td><strong>AOSIS</strong> (Alliance of Small Island States)</td><td class="mono">39</td><td>Climate diplomacy; pushed the 1.5°C goal and loss and damage</td></tr>
<tr><td><strong>Least Developed Countries</strong></td><td class="mono">~44</td><td>Development finance, trade preferences, climate</td></tr>
<tr><td><strong>CARICOM</strong></td><td class="mono">15</td><td>Caribbean coordination (climate, reparations, Haiti)</td></tr>
<tr><td><strong>BRICS</strong></td><td class="mono">10+</td><td>Brazil, Russia, India, China, South Africa plus newer members (Egypt, Ethiopia, Iran, UAE, Indonesia); pushes global governance reform; not a formal UN bloc</td></tr>
<tr><td>G4, Uniting for Consensus, L.69, C-10</td><td></td><td>Groups on SC reform (L.69 is a cross-regional group of developing states; C-10 is the AU's committee of ten on reform)</td></tr>
<tr><td>CANZ / JUSCANZ</td><td></td><td>Canada, Australia, New Zealand (and Japan, US, others) coordinating in WEOG-style positions</td></tr>
</table>
<h2>Why this matters in an interview</h2>
<div class="say">"As a member of the African Group, the AU and the G77, my country will usually work with other developing states on financing and development topics, while on human rights it coordinates closely with the Arab Group and the OIC."</div>
<p>A good answer names the blocs <strong>and</strong> explains when your country follows them and when it breaks from them.</p>`
},
{
after: 'groups', id: 'agencies', group: 'UN foundations', title: 'Agencies, funds and programmes', mins: 10,
html: `
<p>Panels often test whether you know which body does what, and which one would implement your committee's recommendations.</p>
<h2>Funds and programmes (created by the GA, voluntarily funded)</h2>
<table>
<tr><th>Body</th><th>Founded</th><th>HQ</th><th>Does</th></tr>
<tr><td>UNICEF</td><td class="mono">1946</td><td>New York</td><td>Children: health, nutrition, education, protection (Nobel 1965). Executive Director Catherine Russell</td></tr>
<tr><td>UNRWA</td><td class="mono">1949</td><td>Amman / Gaza</td><td>Services for Palestine refugees (education, health, relief) in Gaza, the West Bank, Jordan, Lebanon and Syria; Israel banned its operations in Israeli territory from 2025, and several donors suspended funding in 2024</td></tr>
<tr><td>UNHCR</td><td class="mono">1950</td><td>Geneva</td><td>Refugees and the stateless. High Commissioner Barham Salih</td></tr>
<tr><td>WFP</td><td class="mono">1961</td><td>Rome</td><td>Largest humanitarian food agency (Nobel 2020). Executive Director Cindy McCain</td></tr>
<tr><td>UNDP</td><td class="mono">1965</td><td>New York</td><td>Development, governance, crisis recovery; runs the Human Development Report</td></tr>
<tr><td>UNFPA</td><td class="mono">1969</td><td>New York</td><td>Sexual and reproductive health, population data</td></tr>
<tr><td>UNEP</td><td class="mono">1972</td><td>Nairobi</td><td>Environment; governed by UNEA</td></tr>
<tr><td>UN-Habitat</td><td class="mono">1978</td><td>Nairobi</td><td>Cities and housing</td></tr>
<tr><td>UNCTAD (UN Trade and Development)</td><td class="mono">1964</td><td>Geneva</td><td>Trade, debt and investment for developing countries. Secretary-General Rebeca Grynspan</td></tr>
<tr><td>UN Women</td><td class="mono">2010</td><td>New York</td><td>Gender equality; secretariat of the CSW</td></tr>
<tr><td>UNODC</td><td class="mono">1997</td><td>Vienna</td><td>Drugs, crime, corruption and terrorism; secretariat of the CND and CCPCJ</td></tr>
<tr><td>OHCHR</td><td class="mono">1993</td><td>Geneva</td><td>Human rights; secretariat of the HRC. High Commissioner Volker Türk</td></tr>
<tr><td>OCHA</td><td class="mono">1998</td><td>New York / Geneva</td><td>Coordinates humanitarian response (successor to the 1992 Department of Humanitarian Affairs); runs the Central Emergency Response Fund (CERF)</td></tr>
</table>
<h2>Specialized agencies (own treaty, members and budget)</h2>
<table>
<tr><th>Agency</th><th>HQ</th><th>Does</th></tr>
<tr><td>ILO (1919)</td><td>Geneva</td><td>Labour standards; unique tripartite structure (governments, employers, workers). Director-General Gilbert Houngbo</td></tr>
<tr><td>FAO (1945)</td><td>Rome</td><td>Food and agriculture. Director-General Qu Dongyu</td></tr>
<tr><td>UNESCO (1945)</td><td>Paris</td><td>Education, science, culture, World Heritage. Director-General Khaled El-Enany (Egypt)</td></tr>
<tr><td>WHO (1948)</td><td>Geneva</td><td>Health; International Health Regulations; Pandemic Agreement (2025). Director-General Tedros Adhanom Ghebreyesus. The US withdrew (effective January 2026)</td></tr>
<tr><td>World Bank Group / IMF (1944, Bretton Woods)</td><td>Washington</td><td>Development lending / financial stability and balance-of-payments loans; weighted voting by shareholding</td></tr>
<tr><td>ICAO, IMO, ITU, UPU, WMO</td><td>Montreal, London, Geneva, Bern, Geneva</td><td>Aviation, shipping, telecoms, post, weather</td></tr>
<tr><td>WIPO, IFAD, UNIDO, UN Tourism</td><td>Geneva, Rome, Vienna, Madrid</td><td>Intellectual property, rural development finance, industrial development, tourism</td></tr>
</table>
<h2>Related organizations</h2>
<p>IAEA (Vienna, nuclear), OPCW (The Hague, chemical weapons), CTBTO (Vienna, test-ban verification), WTO (Geneva, trade; Director-General Ngozi Okonjo-Iweala), IOM (Geneva, migration; joined the UN system in 2016), and the International Seabed Authority.</p>
<h2>Who would implement your committee's ideas?</h2>
<table>
<tr><th>If your proposal is about…</th><th>Name…</th></tr>
<tr><td>Refugees, asylum, statelessness</td><td>UNHCR (with IOM for migrants)</td></tr>
<tr><td>Children and youth</td><td>UNICEF, UNFPA (adolescents), WHO (mental health)</td></tr>
<tr><td>Women's rights and economic empowerment</td><td>UN Women, ILO, UNDP</td></tr>
<tr><td>Human rights monitoring and training</td><td>OHCHR, Special Procedures, national human rights institutions</td></tr>
<tr><td>Development, governance, post-conflict recovery</td><td>UNDP, Peacebuilding Fund, World Bank</td></tr>
<tr><td>Humanitarian access and emergencies</td><td>OCHA, WFP, UNICEF, ICRC (not UN)</td></tr>
<tr><td>Crime, corruption, cybercrime, trafficking</td><td>UNODC</td></tr>
<tr><td>Environment and land</td><td>UNEP, UNCCD secretariat, FAO</td></tr>
<tr><td>Media, education, heritage</td><td>UNESCO</td></tr>
<tr><td>Nuclear safety and peaceful nuclear technology</td><td>IAEA</td></tr>
</table>`
},
{
after: 'intlaw', id: 'vocab', group: 'Law, rights and security', title: 'UN vocabulary and documents', mins: 6,
html: `
<p>Using UN terms precisely is one of the fastest ways to sound prepared.</p>
<h2>Bodies</h2>
<table>
<tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Council</td><td>High-level body that sets policy and sometimes decides or enforces</td><td>Security Council, Human Rights Council, ECOSOC</td></tr>
<tr><td>Commission</td><td>Standing subsidiary body that studies and recommends in one field; meets in annual sessions and reports to a parent body</td><td>CSW, International Law Commission, PBC</td></tr>
<tr><td>Committee</td><td>Body that handles specific agenda items, or monitors a treaty</td><td>GA Main Committees; CEDAW Committee</td></tr>
<tr><td>Conference</td><td>Temporary large meeting of states that usually ends in a treaty, declaration or action plan</td><td>San Francisco 1945; Rio 1992; COPs (Conferences of the Parties)</td></tr>
<tr><td>Assembly</td><td>Plenary of all members</td><td>General Assembly, UN Environment Assembly, World Health Assembly</td></tr>
<tr><td>Programme / fund</td><td>Operational body created by the GA with its own executive board</td><td>UNDP, UNICEF</td></tr>
<tr><td>Agency</td><td>Autonomous organization linked to the UN</td><td>WHO, UNESCO</td></tr>
</table>
<h2>Texts</h2>
<table>
<tr><th>Term</th><th>Binding?</th><th>Meaning</th></tr>
<tr><td>Charter / treaty / convention / covenant</td><td>Yes, for parties</td><td>Legally binding agreements</td></tr>
<tr><td>Protocol</td><td>Yes, for its parties</td><td>Addition to a treaty, often optional</td></tr>
<tr><td>Declaration</td><td>No</td><td>Solemn political statement (UDHR, Beijing Declaration)</td></tr>
<tr><td>Resolution</td><td>Depends on the body</td><td>Formal text adopted by an organ</td></tr>
<tr><td>Decision</td><td>Usually procedural</td><td>Shorter formal act (e.g. on dates, agenda)</td></tr>
<tr><td>Agreed conclusions</td><td>No</td><td>Negotiated outcome of the CSW and some commissions</td></tr>
<tr><td>Report of the Secretary-General</td><td>No</td><td>Analysis and recommendations requested by a resolution; the basis of most debates</td></tr>
<tr><td>Framework / action plan / compact</td><td>No</td><td>Guides action (Sendai Framework, Global Compacts)</td></tr>
</table>
<h2>How decisions are taken</h2>
<ul>
<li><strong>Consensus / without a vote:</strong> no one objects; not the same as unanimity (some may dislike it but stay silent).</li>
<li><strong>Acclamation:</strong> approval by applause, mostly for elections.</li>
<li><strong>Recorded vote:</strong> each state's yes, no or abstention is listed. <strong>Roll-call vote:</strong> states are called by name.</li>
<li><strong>Sponsor / co-sponsor:</strong> states that submit a draft; others can join as co-sponsors. <strong>Penholder:</strong> the state that drafts.</li>
<li><strong>Explanation of vote / position:</strong> statement before or after adoption, often to register disagreement with parts of a text.</li>
<li><strong>Mandate:</strong> the tasks and authority given to a body or mission by its founding resolution.</li>
<li><strong>Special Rapporteur:</strong> independent expert reporting on a theme or country for the HRC.</li>
<li><strong>Consultative status:</strong> NGO access to ECOSOC and its bodies (Art. 71).</li>
</ul>
<h2>Reading UN document symbols</h2>
<table>
<tr><th>Symbol</th><th>What it is</th></tr>
<tr><td class="sym">A/RES/70/1</td><td>General Assembly resolution, 70th session, number 1 (the 2030 Agenda)</td></tr>
<tr><td class="sym">A/C.3/80/L.12</td><td>Draft (L = limited distribution) in the GA Third Committee (C.3) at the 80th session</td></tr>
<tr><td class="sym">A/80/150</td><td>A GA document at the 80th session, often a report of the Secretary-General</td></tr>
<tr><td class="sym">S/RES/1325 (2000)</td><td>Security Council resolution 1325, adopted in 2000 (SC resolutions are numbered continuously, not by session)</td></tr>
<tr><td class="sym">S/PRST/2024/1</td><td>Presidential statement of the SC</td></tr>
<tr><td class="sym">E/CN.6/2026/L.1</td><td>ECOSOC (E) functional commission (CN) number 6 = the CSW, 2026 session, draft</td></tr>
<tr><td class="sym">A/HRC/RES/48/13</td><td>Human Rights Council resolution 48/13 (session 48)</td></tr>
<tr><td class="sym">A/RES/ES-11/1</td><td>Resolution of the 11th emergency special session</td></tr>
</table>
<p>Older GA resolutions use Roman numerals for the session: <span class="sym">377 (V)</span> means resolution 377 of the 5th session (1950).</p>`
},
];
